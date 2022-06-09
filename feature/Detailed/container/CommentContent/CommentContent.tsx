import { useMemo } from "react";
import { useDispatch, useSelector } from "shared/hooks";
import {
  fillReactionUsers,
  stateComments,
} from "shared/store/slices/comment/commentSlices";
import {
  openReactionModal,
  openReplyModal,
} from "shared/store/slices/modal/modalSlices";

import { TransitionGroup } from "react-transition-group";
import Collapse from "@mui/material/Collapse";

import { CommentReactionType, CommentType } from "types/comment";
import { Comment } from "../../components/Comment/Comment";
import { CommentInput } from "../../components/CommentInput";

export const CommentContent = ({
  slug,
  addRemoveLike,
  addComment,
  removeComment,
}) => {
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
      <TransitionGroup>
        {comments?.map((item: any) => (
          <Collapse key={`user-comment--${item.user_id}--${item.id}`}>
            <Comment
              onLike={addRemoveLike}
              onReply={onReply}
              onReaction={onReaction}
              onRemove={removeComment}
              {...item}
            />
          </Collapse>
        ))}
      </TransitionGroup>
    );
  }, [comments, slug]);

  return (
    <div>
      <CommentInput addComment={addComment} />
      {Comments}
    </div>
  );
};
