import { InputGroup, Input, InputContent } from "./CommentInput.styled";
import { useRef, useState } from "react";
import { Avatar } from "ui/Avatar";
import { useSelector } from "shared/hooks/useSelector";
import { stateUser } from "shared/store/slices/user/userSlices";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import { IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { Button } from "ui/Button";
import { toast } from "react-toastify";
import { isAppMode } from "shared/utils/isAppMode";

export const CommentInput = ({ addComment, reply }: any) => {
  const [text, setText] = useState("");
  const user = useSelector(stateUser);
  const inputRef = useRef<any>();

  return (
    <InputContent
      reply={isAppMode(reply)}
      onClick={() => {
        if (!user) {
          toast.warning("Bəyənmək üçün qeydiyyat olun.");
          inputRef.current.blur();
          return;
        }
      }}
    >
      <InputGroup reply={isAppMode(reply)}>
        {user && (
          <Avatar
            name={user.first_name}
            size={reply ? "lg" : "xl"}
            image={user.image}
          />
        )}
        <Input
          ref={inputRef}
          onChange={(e) => setText(e.target.value)}
          placeholder="Rəyinizi bura yazın"
          value={text}
          reply={isAppMode(reply)}
          onKeyDown={({ key }) => {
            if (key === "Enter") {
              addComment(text);
              setText("");
            }
          }}
        />
        <IconButton>
          <TagFacesIcon />
        </IconButton>
      </InputGroup>
      <Button
        bg="green"
        width={!reply ? "50px" : "40px"}
        height={!reply ? "50px" : "40px"}
        cursor
        icon={<SendIcon fontSize={reply ? "small" : "medium"} />}
        color="dark"
        radius="8px"
        onClick={() => {
          addComment(text);
          setText("");
        }}
      />
    </InputContent>
  );
};
