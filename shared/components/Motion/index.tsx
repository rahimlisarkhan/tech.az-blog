import { Grow } from "@mui/material";

enum transformOriginMap {
  "top" = "center top",
  "bottom" = "center bottom",
  "center" = "center",
}

export const Motion = ({ children }) => {
  return (
    <Grow in={true} style={{ transformOrigin: "center" }} timeout={2000}>
      {children}
    </Grow>
  );
};
