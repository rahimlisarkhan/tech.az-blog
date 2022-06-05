import { useState } from "react";

export const CommentInput = ({ addComment }) => {
  const [text, setText] = useState("");

  return (
    <div>
      <input
        size={100}
        onChange={(e) => setText(e.target.value)}
        placeholder="comment"
      />
      <button onClick={() => addComment(text)}>Send</button>
    </div>
  );
};
