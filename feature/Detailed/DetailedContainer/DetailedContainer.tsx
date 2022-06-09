import React, { useCallback, useEffect, useMemo, useState } from "react";
import { DetailedContainerStyled as Container } from "./DetailedContainer.styled";

import { NewsType } from "types/news";
import {
  useDispatch,
  useFirebase,
  useRequest,
  useSelector,
} from "shared/hooks";
// import { CommentType } from "types/comment";
import { stateUser } from "shared/store/slices/user/userSlices";
import { apiPatch, firebasePatch } from "shared/constant/patch";
import { parseData } from "shared/utils/parseData";
import { createdAt } from "db/createdAt";
import {
  fillAccessEmails,
  fillComments,
} from "shared/store/slices/comment/commentSlices";

import dynamic from "next/dynamic";
import { apiPageContents } from "api/news";

const NewsContent = dynamic(() => import("../container/NewsContent"));
const DetailedModals = dynamic(() => import("../container/DetailedModals"));

export const DetailedContainer: React.FC<any> = ({ newsSlug }) => {
  const [newsReaction, setNewsReaction] = useState<any>([]);
  const [newsData, setNewsData] = useState(null);

  const dispatch = useDispatch();

  const {
    all_contens,
    comments,
    comment_like,
    connect_reactions,
    access_emails,
  } = firebasePatch;
  const slug = newsSlug.slug;
  const newsSlugCollection = `${all_contens}/${slug}`;

  const { exc } = useRequest(() => apiPageContents(apiPatch.mixdata), {
    onSuccess: ({ results }) => {
      setNewsData(results);
    },
  });

  useEffect(() => {
    exc();
  }, []);

  const { id, first_name, last_name, image, email } =
    useSelector(stateUser) ?? {};

  useFirebase({
    collection: access_emails,
    onData(data: any) {
      dispatch(fillAccessEmails(Object.values(data)));
    },
  });

  const { fireRequest, deleteRequest } = useFirebase({
    collection: newsSlugCollection,
    unique: true,
    onData(data: any) {
      setNewsReaction(parseData(data?.info?.reactions));
      if (!data) return;

      dispatch(fillComments(parseData(data.comments)));
    },
  });

  const generateCollection = useCallback(
    (col, id) => {
      const commentsCollection = `${all_contens}/${slug}/${col}/${id}/${comment_like}`;
      const newsReactionsCollections = `${all_contens}/${slug}/${col}/`;

      switch (col) {
        case connect_reactions:
          return newsReactionsCollections;
        case comments:
          return commentsCollection;
        default:
          return;
      }
    },
    [slug, newsReaction]
  );

  const similarData = useMemo(
    () =>
      newsData?.filter((item: NewsType) => {
        if (
          item?.tag.findIndex((x) => x?.title === newsSlug?.tag[0]?.title) !==
            -1 &&
          item?.id !== newsSlug?.id
        ) {
          return true;
        }
        return false;
      }),
    [newsSlug?.id, newsData]
  );

  const addComment = (comment: string) => {
    let newsSlugCollection = `${all_contens}/${slug}/${comments}`;

    let userComment = {
      user: {
        id,
        first_name,
        last_name,
        image,
        email,
      },
      comment,
      created_at: createdAt(),
      reply: "",
      comment_like: "",
    };

    fireRequest(newsSlugCollection, userComment);
  };

  const addRemoveLike = ({ id, user_id, like_id, collection }) => {
    if (user_id) {
      fireRequest(generateCollection(collection, id), {
        user_id,
        user_info: {
          first_name,
          last_name,
          email,
          image: image ?? "",
        },
      });
      return;
    }
    deleteRequest(generateCollection(collection, id), like_id);
  };

  const removeComment = (comment_id: string) => {
    deleteRequest(newsSlugCollection + "/" + comments, comment_id);
  };

  return (
    <Container>
      <DetailedModals />
      <NewsContent
        newsSlug={newsSlug}
        newsReaction={newsReaction}
        similarData={similarData}
        userID={id}
        newsData={newsData}
        addRemoveLike={addRemoveLike}
        addComment={addComment}
        removeComment={removeComment}
      />
    </Container>
  );
};
