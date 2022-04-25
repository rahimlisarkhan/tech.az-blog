import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";
import GlobalStyle from "../styles/global";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Router from "next/router";
import NProgress from "nprogress";
import { Provider } from "react-redux";
import { store } from "../shared/store/store";
import { useEffect, useMemo, useRef, useState } from "react";
import { useMounted } from "shared/hooks/useMounted";
import { useLangChange } from "shared/hooks/useLangChange";
import { useScreenMode } from "shared/hooks/useScreenMode";

Router.events.on("routeChangeStart", (url) => {
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export const AppProvider = ({ children }) => {
  const mounted = useMounted();
  const { langChange } = useLangChange();

  useEffect(() => {
    langChange("az");
  }, []);
  
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {mounted && children}
        <ToastContainer />
      </ThemeProvider>
    </Provider>
  );
};
