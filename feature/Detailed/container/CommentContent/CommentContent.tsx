import { createdAt } from "db/createdAt";
import { useCallback, useMemo, useState } from "react";
import { MotionList } from "shared/components/MotionList";
import { firebasePatch } from "shared/constant/patch";
import { useFirebase } from "shared/hooks/useFirebase";
import { useSelector } from "shared/hooks/useSelector";
import { stateUser } from "shared/store/slices/user/userSlices";
import { parseData } from "shared/utils/parseData";
import { CommentType } from "types/comment";
import { Comment } from "../../components/Comment/Comment";
import { CommentInput } from "../../components/CommentInput";

export const CommentContent = ({ slug }) => {
  const [comments, setComments] = useState<CommentType[]>([]);
  const { id, first_name, last_name, image } = useSelector(stateUser) ?? {};

  const generateCollection = useCallback(
    (comment_id) => {
      return `${firebasePatch.comments + slug}/${comment_id}/comment_like`;
    },
    [slug]
  );

  const { fireRequest, deleteRequest } = useFirebase({
    collection: firebasePatch.comments + slug,
    onData(data: any) {
      if (!data) return;

      let convertComment = parseData(data);
      setComments(convertComment);
    },
    unique: true,
  });

  const addComment = (comment: string) => {
    let newsSlugCollection = firebasePatch.comments + slug;

    let userComment = {
      user: {
        id,
        first_name,
        last_name,
        image,
      },
      comment,
      created_at: createdAt(),
      reply: "",
      comment_like: "",
    };

    fireRequest(newsSlugCollection, userComment);
  };

  const addRemoveLike = ({ comment_id, user_id,user_info, like_id }) => {
    if (user_id) {
      fireRequest(generateCollection(comment_id), { user_id,user_info });
      return;
    }

    deleteRequest(generateCollection(comment_id), like_id);
  };

  return (
    <div style={{ color: "white" }}>
      <CommentInput addComment={addComment} />
      <MotionList
        data={comments}
        key="user-comment"
        component={(comment: any) => (
          <Comment onLike={addRemoveLike} {...comment} />
        )}
      />
    </div>
  );
};
