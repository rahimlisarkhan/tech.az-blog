import type { AppProps /*, AppContext */ } from "next/app";
import { Fragment } from "react";
import { AppProvider } from "../app/AppProvider";
import Head from "next/head";
import nextI18NextConfig from "../next-i18next.config";
import { appWithTranslation } from "next-i18next";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Fragment>
      <Head>
      <meta http-equiv="content-language" content="az" />
          <meta name="publisher" content="tech.az" />
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
          <meta
            name="description"
            content="tech az. blog platformasi. technologiyalarla bagli xeberler. en son xeberler"
          />
          <meta
            name="description"
            content="yerli startap və texnologiya ekosisteminə beynəlxalq təcrübə və təcrübə gətirən texnologiya mediası və tədbir platforması."
          />
          <meta name="page-topic" content="Media" />
          <meta name="page-type" content="Blogging" />
          <meta name="audience" content="Everyone" />
        <title>tech.az</title>
      </Head>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </Fragment>
  );
};

export default appWithTranslation(MyApp, nextI18NextConfig);
