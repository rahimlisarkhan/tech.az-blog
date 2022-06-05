import { Avatar } from "shared/components/Avatar";
import { convertNormalDate } from "shared/helper/timeConvert";

export const Comment = ({
  comment_id,
  created_at,
  comment,
  user: { first_name, image },
}) => {
  return (
    <>
      <br />
      <br />
      <div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Avatar name={first_name} size="md" image={image} />
          Sarkhan Rahimli <span>{convertNormalDate(created_at)}</span>
        </div>
        <p>{comment}</p>
      </div>
      <br />
    </>
  );
};
