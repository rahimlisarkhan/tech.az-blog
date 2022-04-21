import dynamic from "next/dynamic";
import Layout from "../shared/components/Layout";
import { getDataNews } from "../shared/services/MixNews";
import { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { GetStaticProps } from "next";
import { NewsResponseType, NewsType } from "types/news";
import { Fragment } from "react";
import Head from "next/head";

const NewsContainer = dynamic(() => import("../feature/News/NewsContainer"));

const HomePage: NextPage<NewsResponseType<NewsType>> = ({
  news: { results, next },
}: any) => {
  const { t } = useTranslation("menu");

  return (
    <Fragment>
      <Head>
        <meta
          property="og:title"
          content={
            "yerli startap və texnologiya ekosisteminə beynəlxalq təcrübə və təcrübə gətirən texnologiya mediası və tədbir platforması."
          }
        />
        <meta
          property="og:description"
          content={
            "yerli startap və texnologiya ekosisteminə beynəlxalq təcrübə və təcrübə gətirən texnologiya mediası və tədbir platforması."
          }
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/image/techaz.jpg" />
        <meta property="og:url" content="https://www.tech.az" />
      </Head>
      <Layout title={`${t("home")} | tech.az`}>
        <NewsContainer newsData={results} nextPage={next} />
      </Layout>
    </Fragment>
  );
};

export default HomePage;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  let languages = {
    ...(await serverSideTranslations(locale, ["common", "menu"])),
  };

  let data = await getDataNews("mixdata", null);

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      ...languages,
      news: data.data,
    },
    revalidate: 1,
  };
};
