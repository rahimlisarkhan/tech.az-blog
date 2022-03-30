import { GetStaticPaths, NextPage } from "next";
import dynamic from "next/dynamic";
import Layout from "shared/components/Layout";
import { getDataNews, getNewsSlug } from "../../shared/services/MixNews";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";

const DetailedContainer = dynamic(
  () => import("../../feature/Detailed/DetailedContainer")
);

const DetailedPage: NextPage = ({ news: { results }, newsSlug }: any) => {
  return (
    <Layout title={`${newsSlug.title}`}>
      <DetailedContainer newsSlug={newsSlug} newsData={results} />
    </Layout>
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
  };
};
