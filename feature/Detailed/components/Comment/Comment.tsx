import { useMemo } from "react";

import ReplyAllIcon from "@mui/icons-material/ReplyAll";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DeleteIcon from "@mui/icons-material/Delete";

import { Avatar } from "ui/Avatar";
import { Button } from "ui/Button";
import { Motion } from "ui/Motion";
import Typograph from "ui/Typograph";

import { convertNormalDate } from "shared/helper/timeConvert";
import { parseData } from "shared/utils/parseData";

import {
  CommentContainer,
  CommentHeader,
  CommentHeaderUser,
  Content,
  SubInfo,
  SubInfoContent,
} from "./Comment.styled";
import { useSelector } from "shared/hooks/useSelector";
import { stateUser } from "shared/store/slices/user/userSlices";
import { firebasePatch } from "shared/constant/patch";
import { toast } from "react-toastify";
import { stateAccess } from "shared/store/slices/comment/commentSlices";

export const Comment = ({
  id: comment_id,
  created_at,
  comment_like,
  comment,
  onLike,
  onReply,
  onRemove,
  onReaction,
  user: { first_name, last_name, image },
}) => {
  const user = useSelector(stateUser);
  const accessEmails = useSelector(stateAccess);
  const likesData = useMemo(() => parseData(comment_like), [comment_like]);

  const isAccess = accessEmails.includes(user?.email);

  const commentLike = useMemo(() => {
    return likesData?.find((comment) => comment.user_id === user?.id);
  }, [likesData]);

  const handleCommentLike = () => {
    if (!user) {
      toast.warning("Bəyənmək üçün qeydiyyat olun.");
      return;
    }

    onLike({
      id: comment_id,
      user_id: commentLike ? null : user?.id,
      like_id: commentLike?.id,
      collection: firebasePatch.comments,
    });
  };

  const handleRemoveComment = () => {
    onRemove(comment_id);
  };

  return (
    <CommentContainer>
      <Content>
        <CommentHeader>
          <CommentHeaderUser>
            <Avatar name={first_name} size="lg" image={image} />
            <Typograph color="white" font="16" margin="0 15px" bold>
              {first_name} {last_name}
            </Typograph>
            <Typograph color="white" font="16" margin="0 20px">
              {convertNormalDate(created_at)}
            </Typograph>
          </CommentHeaderUser>
          <CommentHeaderUser>
            <Button
              text={commentLike ? "bəyəndin" : "bəyən"}
              color={commentLike ? "whiteGray" : "green"}
              font="16"
              bold="500"
              margin="0 20px"
              onClick={handleCommentLike}
              cursor
              icon={<FavoriteIcon />}
            />
            <Button
              text="cavabla"
              color="green"
              font="16"
              bold="500"
              margin="0 20px 0 0"
              cursor
              onClick={onReply}
              icon={<ReplyAllIcon />}
            />
            {isAccess && (
              <Button
                color="green"
                font="16"
                bold="500"
                cursor
                onClick={handleRemoveComment}
                icon={<DeleteIcon />}
              />
            )}
          </CommentHeaderUser>
        </CommentHeader>
        <Typograph color="white" font="16" margin="0" bold>
          {comment}
        </Typograph>
      </Content>
      <SubInfoContent>
        <SubInfo onClick={onReply}>
          <Avatar name={first_name} size="md" image={image} />
          <Typograph color="white" font="14" margin="0 5px" bold>
            133 cavab
          </Typograph>
        </SubInfo>
        {likesData?.length && (
          <Motion time={500}>
            <SubInfo onClick={() => onReaction(likesData)}>
              <FavoriteIcon />
              <Typograph color="white" font="14" margin="0 5px" bold>
                {likesData?.length}
              </Typograph>
            </SubInfo>
          </Motion>
        )}
      </SubInfoContent>
    </CommentContainer>
  );
};
