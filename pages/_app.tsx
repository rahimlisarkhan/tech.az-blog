import type { AppProps /*, AppContext */ } from 'next/app'
import { Fragment } from 'react'
import {AppProvider} from "../app/AppProvider"
import Head from 'next/head'
// import nextI18NextConfig from '../next-i18next.config.js'
// import { appWithTranslation } from 'next-i18next';

const MyApp = ({ Component, pageProps }:AppProps) => {
  return (
    <Fragment>
      <Head>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <title>tech.az</title>
      </Head>
      <AppProvider>
          <Component {...pageProps} />
      </AppProvider>
    </Fragment>
  )
}

// export default appWithTranslation(MyApp,nextI18NextConfig);
export default MyApp;