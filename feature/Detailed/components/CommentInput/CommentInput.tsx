import {
  InputGroup,
  Input,
  InputContent,
} from "feature/Detailed/container/CommentContent/CommentContent.styled";
import { useState } from "react";
import { Avatar } from "shared/components/Avatar";
import { useSelector } from "shared/hooks/useSelector";
import { stateUser } from "shared/store/slices/user/userSlices";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import { IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { Button } from "shared/components/Button";

export const CommentInput = ({ addComment }) => {
  const [text, setText] = useState("");
  const { first_name, image } = useSelector(stateUser) ?? {};

  return (
    <InputContent>
      <InputGroup>
        {first_name && <Avatar name={first_name} size="xl" image={image} />}
        <Input
          onChange={(e) => setText(e.target.value)}
          placeholder="Rəyinizi bura yazın"
          value={text}
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
        width="80px"
        height="80px"
        cursor="true"
        icon={<SendIcon fontSize="large" />}
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
