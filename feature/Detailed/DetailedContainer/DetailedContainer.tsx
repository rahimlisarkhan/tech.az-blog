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
import { fillComments } from "shared/store/slices/comment/commentSlices";

import dynamic from "next/dynamic";
import { apiPageContents } from "api/news";

const NewsContent = dynamic(() => import("../container/NewsContent"));
const DetailedModals = dynamic(() => import("../container/DetailedModals"));

export const DetailedContainer: React.FC<any> = ({ newsSlug }) => {
  const [newsReaction, setNewsReaction] = useState<any>([]);
  const dispatch = useDispatch();
  const slug = newsSlug.slug;

  const [newsData, setNewsData] = useState(null);

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

  const { fireRequest, deleteRequest } = useFirebase({
    collection: `${firebasePatch.all_contens}/${slug}`,
    onData(data: any) {
      if (!data) return;

      let convertComment = parseData(data.comments);
      dispatch(fillComments(convertComment));
      setNewsReaction(parseData(data?.info?.reactions));
    },
    unique: true,
  });

  const generateCollection = useCallback(
    (col, id) => {
      const commentsCollection = `${firebasePatch.all_contens}/${slug}/${col}/${id}/${firebasePatch.comment_like}`;
      const newsReactionsCollections = `${firebasePatch.all_contens}/${slug}/${col}/`;
      return col === firebasePatch.comments
        ? commentsCollection
        : newsReactionsCollections;
    },
    [slug]
  );

  const addComment = (comment: string) => {
    let newsSlugCollection = `${firebasePatch.all_contens}/${slug}/${firebasePatch.comments}`;

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

  console.log(newsReaction);

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
      />
    </Container>
  );
};
