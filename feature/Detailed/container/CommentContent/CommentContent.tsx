import { createdAt } from "db/createdAt";
import { useMemo, useState } from "react";
import { firebasePatch } from "shared/constant/patch";
import { useFirebase } from "shared/hooks/useFirebase";
import { useSelector } from "shared/hooks/useSelector";
import { stateUser } from "shared/store/slices/user/userSlices";
import { Comment } from "../../components/Comment/Comment";
import { CommentInput } from "../../components/CommentInput";

export const CommentContent = ({ slug }) => {
  const [comments, setComments] = useState([]);
  const {
    id: user_id,
    first_name,
    last_name,
    image,
  } = useSelector(stateUser) ?? {};

  const resultComments = useMemo(
    () =>
      comments.map((comment) => (
        <Comment
          key={`${comment.user.user_id}-comment-id-${comment.comment_id}`}
          {...comment}
        />
      )),
    [comments]
  );

  const { fireRequest } = useFirebase({
    collection: firebasePatch.comments,
    onData(data) {
      let newsComments = Object.entries(data[slug])
        .map((comment: any) => {
          return {
            comment_id: comment[0],
            ...comment[1],
          };
        })
        .reverse();
      setComments(newsComments);
    },
    unique: true,
  });

  const addComment = (comment: string) => {
    let newsSlugCollection = firebasePatch.comments + slug;

    let userComment = {
      user: {
        user_id,
        first_name,
        last_name,
        image,
      },
      comment,
      created_at: createdAt(),
      reply: "",
    };

    fireRequest(newsSlugCollection, userComment);
  };

  return (
    <div style={{ color: "white" }}>
      <CommentInput addComment={addComment} />
      {resultComments}
    </div>
  );
};
