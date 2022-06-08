import React, { Fragment, ReactNode } from "react";
import Container from "@mui/material/Container";
import { LayoutContent } from "./Layout.styled";
import { useSelector } from "../../hooks/useSelector";
import dynamic from "next/dynamic";
import { isAppMode } from "shared/utils/isAppMode";
type Props = {
  children?: ReactNode;
  title?: string;
  errorPage?: boolean;
};
const Header = dynamic(() => import("../Header"),{ ssr: false });
const Footer = dynamic(() => import("../Footer"),{ ssr: false });
const Main = dynamic(() => import("../Main"),{ ssr: false });
const SearchContainer = dynamic(() => import("feature/Search"),{ ssr: false });

const Layout = ({ children, errorPage }: Props) => {
  let mode = useSelector((state) => state.home.appMode);

  return (
    <Fragment>
      <LayoutContent mode={isAppMode(mode)}>
        {!errorPage && <Header />}
        {!errorPage && <SearchContainer />}
        <Container maxWidth={"lg"}>
          <Main>{children}</Main>
        </Container>
        {!errorPage && <Footer />}
      </LayoutContent>
    </Fragment>
  );
};

export default Layout;
