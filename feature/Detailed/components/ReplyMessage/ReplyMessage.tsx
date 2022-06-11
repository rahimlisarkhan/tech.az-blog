import { Avatar } from "ui/Avatar";
import Typograph from "ui/Typograph";
import { isAppMode } from "shared/utils/isAppMode";
import { Content, Message, MessageSub } from "./ReplyMessage.styled";

export const ReplyMessage = ({ small, isUser }: any) => {
  return (
    <Content user={isAppMode(isUser)}>
      <Message user={isAppMode(isUser)} width={isAppMode(small)}>
        <Typograph color="whiteGray" font={small ? "14" : "16"} space="1">
          Mən təklif edərdimki siz ən çox kosmosla bağlı paylaşımda edərsiz.Biz
          bunu çox sevirik
        </Typograph>
      </Message>
      <MessageSub user={isAppMode(isUser)}>
        <Typograph
          margin="0 25px"
          color="whiteGray"
          font={small ? "12" : "14"}
          space="1"
        >
          18:15 13.02.2022
        </Typograph>
        <Avatar name="Sarkhan" image={null} size="lg" />
      </MessageSub>
    </Content>
  );
};
