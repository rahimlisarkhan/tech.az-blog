import { Grow } from "@mui/material";

export const Motion = ({ children }) => {
  return (
    <Grow in={true} style={{ transformOrigin: "0 0 10" }} timeout={2000}>
      {children}
    </Grow>
  );
};
