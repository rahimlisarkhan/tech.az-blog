import React, { Fragment, ReactNode } from "react";
import Head from "next/head";
import Container from "@mui/material/Container";
import Main from "../Main";
import Header from "../Header";
import Footer from "../Footer";
import { LayoutContent } from "./Layout.styled";
// import Image from "../Image"
import { useSelector } from "../../hooks/useSelector";
import { SearchContainer } from "feature/Search";

type Props = {
  children?: ReactNode;
  title?: string;
  errorPage?: boolean;
};

const Layout = ({ children, title = "tech.az | blog", errorPage }: Props) => {
  let mode = useSelector((state) => state.home.appMode);

  return (
    <Fragment>
      <Head>
        <title>{title}</title>
      </Head>
      <Fragment>
        <LayoutContent mode={mode ? "true" : ""}>
          {!errorPage && <Header />}
          {!errorPage && <SearchContainer />}
          <Container maxWidth="lg">
            <Main>{children}</Main>
          </Container>
          {!errorPage && <Footer />}
        </LayoutContent>
      </Fragment>
    </Fragment>
  );
};

export default Layout;
