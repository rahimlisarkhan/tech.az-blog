import { Fragment } from "react";
import { useDispatch, useSelector } from "shared/hooks";
import { fillReactionUsers } from "shared/store/slices/comment/commentSlices";
import {
  openReactionModal,
  openReplyModal,
  stateReactionModal,
  stateReplyModal,
} from "shared/store/slices/modal/modalSlices";
import { ReactionModal } from "../ReactionModal";
import { ReplyModal } from "../ReplyModal";

export const DetailedModals = () => {
  const isOpenReplyModal = useSelector(stateReplyModal);
  const isOpenReactionModal = useSelector(stateReactionModal);
  const dispatch = useDispatch();

  const onReply = () => {
    dispatch(openReplyModal());
  };

  const onReaction = () => {
    dispatch(openReactionModal());
    dispatch(fillReactionUsers(null))
  };

  return (
    <Fragment>
      <ReplyModal isOpen={isOpenReplyModal} onOpenClose={onReply}  />
      <ReactionModal isOpen={isOpenReactionModal} onOpenClose={onReaction} />
    </Fragment>
  );
};
