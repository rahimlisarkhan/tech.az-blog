import dynamic from "next/dynamic";
import { getDataNews } from "../shared/services/MixNews";
import {  NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { GetStaticProps } from "next";
import { NewsResponseType, NewsType } from "types/news";
import { Fragment } from "react";
import { productURL } from "shared/utils/productURL";

const MetaSEO = dynamic(() => import("shared/components/Meta"));
const Layout = dynamic(() => import("shared/components/Layout"));
const NewsContainer = dynamic(() => import("feature/News/NewsContainer"));

const HomePage: NextPage<NewsResponseType<NewsType>> = ({
  news: { results, next },
}: any) => {
  const { t } = useTranslation("menu");

  return (
    <Fragment>
      <MetaSEO
        title={`${t("home")} | tech.az`}
        description={
          "yerli startap və texnologiya ekosisteminə beynəlxalq təcrübə və təcrübə gətirən texnologiya mediası və tədbir platforması."
        }
        ogTitle={
          "yerli startap və texnologiya ekosisteminə beynəlxalq təcrübə və təcrübə gətirən texnologiya mediası və tədbir platforması."
        }
        ogDescription={
          "yerli startap və texnologiya ekosisteminə beynəlxalq təcrübə və təcrübə gətirən texnologiya mediası və tədbir platforması."
        }
        ogImage={"static/image/techaz.jpg"}
        ogUrl={`${productURL()}`}
      />
      <Layout>
        <NewsContainer newsData={results} nextPage={next} />
      </Layout>
    </Fragment>
  );
};

export default HomePage;

export const getStaticProps: GetStaticProps  = async ({ locale }) => {
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
