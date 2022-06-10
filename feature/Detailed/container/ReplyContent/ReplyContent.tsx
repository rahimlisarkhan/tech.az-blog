import { IconButton } from "shared/components/IconButton";
import Typograph from "shared/components/Typograph";
import CloseIcon from "@mui/icons-material/Close";

import { Content, ContentHeader, ContentBody, MessageBox } from "./ReplyContent.styled";
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
        <CommentInput reply />

        <MessageBox>
          <ReplyMessage small />
          <ReplyMessage small />
          <ReplyMessage small />
        </MessageBox>
      </ContentBody>
    </Content>
  );
};
