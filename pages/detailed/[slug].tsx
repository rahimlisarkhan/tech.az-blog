import { GetStaticPaths, NextPage } from "next";
import dynamic from "next/dynamic";
import Layout from "shared/components/Layout";
import { getDataNews, getNewsSlug } from "../../shared/services/MixNews";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import { Fragment } from "react";
import { url } from "shared/utils/axios";
import Head from "next/head";
import { NewsResponseType, NewsType } from "types/news";
import { useRouter } from "next/router";

const DetailedContainer = dynamic(
  () => import("../../feature/Detailed/DetailedContainer")
);

interface DetailedTypes {
  news: NewsResponseType<NewsType>;
  newsSlug: NewsType;
}

const DetailedPage: NextPage = ({ news: { results }, newsSlug }: any) => {

  const {asPath} = useRouter()


  return (
    <Fragment>
      <Head>
        <meta property="og:title" content={newsSlug?.title} />
        <meta property="og:description" content={newsSlug?.title} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={url + newsSlug?.cover_image} />
        <meta property="og:url" content={`https://www.tech.az${asPath}`} />
      </Head>
      <Layout title={`${newsSlug.title}`}>
        <DetailedContainer newsSlug={newsSlug} newsData={results} />
      </Layout>
    </Fragment>
  );
};

export default DetailedPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const news = await getDataNews("alldata", null);

  const paths = news?.data?.map((item: any) => ({
    params: { slug: `${item.type}=${item.slug}` },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ locale, params }) => {
  let languages = {
    ...(await serverSideTranslations(locale, ["common", "menu"])),
  };

  let data = await getDataNews("mixdata", null);

  let res = await getNewsSlug(params.slug);

  if (!data || !res) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      ...languages,
      news: data.data,
      newsSlug: res.data,
    },
    revalidate: 1,
  };
};
