import { UserType } from "types";

export interface ReplyType {
  reply_content: {
    user: UserType;
    content: string;
  };
}

export interface CommentType {
  comment: "hey";
  comment_id: "-N3sV8_mnP-YMUGgVNHk";
  created_at: 1654510361137;
  reply: ReplyType[];
  user: UserType;
}
