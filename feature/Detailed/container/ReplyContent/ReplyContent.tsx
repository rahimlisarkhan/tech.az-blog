import { IconButton } from "ui/IconButton";
import Typograph from "ui/Typograph";
import CloseIcon from "@mui/icons-material/Close";

import {
  Content,
  ContentHeader,
  ContentBody,
  MessageBox,
  MessageInput,
} from "./ReplyContent.styled";
import { ReplyMessage } from "feature/Detailed/components/ReplyMessage";
import { CommentInput } from "feature/Detailed/components/CommentInput";

export const ReplyContent = ({ closeMenu }: any) => {
  return (
    <Content>
      <ContentHeader>
        <Typograph color="whiteGray" space="1" bold font="20">
          Müzakirə
        </Typograph>
        <IconButton size="25" cursor color="whiteGray" onClick={closeMenu}>
          <CloseIcon />
        </IconButton>
      </ContentHeader>
      <ReplyMessage />

      <ContentBody>
        <MessageBox>
          <ReplyMessage isUser small />
          <ReplyMessage  small />
          <ReplyMessage small />
          <ReplyMessage small />
          <ReplyMessage small />
          <ReplyMessage small />
        </MessageBox>
        <MessageInput>
          <CommentInput reply />
        </MessageInput>
      </ContentBody>
    </Content>
  );
};
