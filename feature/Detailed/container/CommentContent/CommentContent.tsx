import { useMemo } from "react";
import { MotionList } from "shared/components/MotionList";
import { useDispatch, useSelector } from "shared/hooks";
import {
  fillReactionUsers,
  stateComments,
} from "shared/store/slices/comment/commentSlices";
import {
  openReactionModal,
  openReplyModal,
} from "shared/store/slices/modal/modalSlices";
import { CommentReactionType, CommentType } from "types/comment";
import { Comment } from "../../components/Comment/Comment";
import { CommentInput } from "../../components/CommentInput";

export const CommentContent = ({ slug, addRemoveLike, addComment }) => {
  const comments: CommentType[] = useSelector(stateComments);
  const dispatch = useDispatch();

  const onReply = () => {
    dispatch(openReplyModal());
  };

  const onReaction = (users: CommentReactionType) => {
    dispatch(openReactionModal());
    dispatch(fillReactionUsers(users));
  };

  const Comments = useMemo(() => {
    return (
      <MotionList
        data={comments}
        key="user-comment"
        component={(comment: any) => (
          <Comment
            onLike={addRemoveLike}
            onReply={onReply}
            onReaction={onReaction}
            {...comment}
          />
        )}
      />
    );
  }, [comments, slug]);

  return (
    <div>
      <CommentInput addComment={addComment} />
      {Comments}
    </div>
  );
};
