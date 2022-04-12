import { NextPage } from "next";
import dynamic from "next/dynamic";
import Layout from "../../shared/components/Layout";
import { getDataNews } from "../../shared/services/MixNews";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { GetStaticProps } from "next";
import { NewsResponseType, NewsType } from "types/news";
const NewsContainer = dynamic(() => import("../../feature/News/NewsContainer"));

const ArticlePage: NextPage<NewsResponseType<NewsType>> = ({
  news: { results, next },
}) => {
  let { t } = useTranslation("menu");

  return (
    <Layout title={`${t("article")} | tech.az`}>
      <NewsContainer newsData={results} nextPage={next} />
    </Layout>
  );
};

export default ArticlePage;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  let languages = {
    ...(await serverSideTranslations(locale, ["common", "menu"])),
  };

  let data = await getDataNews("articles", null);

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
