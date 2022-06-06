import { useMemo } from "react";

import ReplyAllIcon from "@mui/icons-material/ReplyAll";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { Avatar } from "shared/components/Avatar";
import { Button } from "shared/components/Button";
import { Motion } from "shared/components/Motion";
import Typograph from "shared/components/Typograph";

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

export const Comment = ({
  id: comment_id,
  created_at,
  comment_like,
  comment,
  onLike,
  onReply,
  user: { id, first_name, last_name, image },
}) => {
  const user = useSelector(stateUser);
  const likesData = parseData(comment_like);

  const commentLike = useMemo(() => {
    return likesData?.find((comment) => comment.user_id === user?.id);
  }, [likesData]);

  const handleCommentLike = () => {
    onLike({
      comment_id,
      user_id: commentLike ? null : user.id,
      user_info: {
        first_name,
        last_name,
        image: image ?? "",
      },
      like_id: commentLike?.id,
    });
  };

  return (
    <CommentContainer>
      <Content>
        <CommentHeader>
          <CommentHeaderUser>
            <Avatar name={first_name} size="lg" image={image} />
            <Typograph color="white" font="16" margin="0 15px" bold="true">
              {first_name} {last_name}
            </Typograph>
            <Typograph color="white" font="16" margin="0 20px">
              {convertNormalDate(created_at)}
            </Typograph>
          </CommentHeaderUser>
          <CommentHeaderUser>
            <Button
              text="bəyən"
              color={commentLike ? "whiteGray" : "green"}
              font="16"
              bold="500"
              margin="0 20px"
              onClick={handleCommentLike}
              cursor="true"
              icon={<FavoriteIcon />}
            />
            <Button
              text="cavabla"
              color="green"
              font="16"
              bold="500"
              cursor="true"
              onClick={onReply}
              icon={<ReplyAllIcon />}
            />
          </CommentHeaderUser>
        </CommentHeader>
        <Typograph color="white" font="16" margin="0" bold="true">
          {comment}
        </Typograph>
      </Content>
      <SubInfoContent>
        <SubInfo>
          <Avatar name={first_name} size="md" image={image} />
          <Typograph color="white" font="14" margin="0 5px" bold="true">
            133 cavab
          </Typograph>
        </SubInfo>
        {likesData?.length && (
          <Motion time={500}>
            <SubInfo>
              <FavoriteIcon />
              <Typograph color="white" font="14" margin="0 5px" bold="true">
                {likesData?.length}
              </Typograph>
            </SubInfo>
          </Motion>
        )}
      </SubInfoContent>
    </CommentContainer>
  );
};
