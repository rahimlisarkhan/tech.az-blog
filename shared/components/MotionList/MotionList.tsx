import { TransitionGroup } from "react-transition-group";
import Collapse from "@mui/material/Collapse";

export const MotionList = ({ data, key, component }) => {
  return (
    <TransitionGroup>
      {data?.map((item) => (
        <Collapse key={`${key}--${item.id}`}>{component(item)}</Collapse>
      ))}
    </TransitionGroup>
  );
};
