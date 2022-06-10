import { Avatar } from "shared/components/Avatar";
import Typograph from "shared/components/Typograph";
import { isAppMode } from "shared/utils/isAppMode";
import { Content, Message, MessageSub } from "./ReplyMessage.styled";

export const ReplyMessage = ({ small }: any) => {
  return (
    <Content>
      <Message width={isAppMode(small)}>
        <Typograph color="whiteGray" font={small ? "14" : "16"} space="1">
          Mən təklif edərdimki siz ən çox kosmosla bağlı paylaşımda edərsiz.Biz
          bunu çox sevirik
        </Typograph>
      </Message>
      <MessageSub>
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
