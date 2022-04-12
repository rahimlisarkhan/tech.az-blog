import type { AppProps /*, AppContext */ } from "next/app";
import { Fragment } from "react";
import { AppProvider } from "../app/AppProvider";
import Head from "next/head";
import nextI18NextConfig from "../next-i18next.config";
import "styles/theme.scss";
import { appWithTranslation } from "next-i18next";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Fragment>
      <Head>
        <meta httpEquiv="content-language" content="az" />
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
        <Head>
          <meta
            property="og:title"
            content="tech az. blog platformasi. technologiyalarla bagli xeberler. en son xeberler"
          />
          <meta
            property="og:description"
            content="yerli startap və texnologiya ekosisteminə beynəlxalq təcrübə və təcrübə gətirən texnologiya mediası və tədbir platforması."
          />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="/static/images/techaz.jpg" />
          <meta property="og:url" content="https://www.tech.az" />
        </Head>
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
