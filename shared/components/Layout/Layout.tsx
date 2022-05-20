import React, { Fragment, ReactNode } from "react";
import Container from "@mui/material/Container";
import { LayoutContent } from "./Layout.styled";
import { useSelector } from "../../hooks/useSelector";
import dynamic from "next/dynamic";
type Props = {
  children?: ReactNode;
  title?: string;
  errorPage?: boolean;
};
const Header = dynamic(() => import("../Header"));
const Footer = dynamic(() => import("../Footer"));
const Main = dynamic(() => import("../Main"));
const SearchContainer = dynamic(() => import("feature/Search"));

const Layout = ({ children, errorPage }: Props) => {
  let mode = useSelector((state) => state.home.appMode);

  return (
    <Fragment>
      <LayoutContent mode={mode ? "true" : ""}>
        {!errorPage && <Header />}
        {!errorPage && <SearchContainer />}
        <Container maxWidth={false}>
          <Main>{children}</Main>
        </Container>
        {!errorPage && <Footer />}
      </LayoutContent>
    </Fragment>
  );
};

export default Layout;
