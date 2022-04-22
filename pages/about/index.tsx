import { GetStaticProps, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import dynamic from "next/dynamic";
import { Fragment } from "react";
import MetaSEO from "shared/components/Meta";
import { productURL } from "shared/utils/productURL";
import Layout from "../../shared/components/Layout";

const AboutContainer = dynamic(
  () => import("../../feature/About/AboutContainer")
);

const AboutPage: NextPage = () => {
  return (
    <Fragment>
      <MetaSEO
        title={`Haqqımızda | tech.az`}
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
      <Layout title="Haqqımızda | tech.az">
        <AboutContainer />
      </Layout>
    </Fragment>
  );
};

export default AboutPage;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  let languages = {
    ...(await serverSideTranslations(locale, ["common", "menu"])),
  };

  return {
    props: {
      ...languages,
    },
    revalidate: 1,
  };
};
