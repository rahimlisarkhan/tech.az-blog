import { GetServerSideProps, NextPage } from "next";
import dynamic from "next/dynamic";
import { serverSideRequest } from "shared/services/request";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Fragment } from "react";
// import { NewsResponseType, NewsType } from "types/news";
import { useRouter } from "next/router";
import { productURL } from "shared/utils/productURL";
import { converSlug } from "shared/utils/converSlug";

const MetaSEO = dynamic(() => import("shared/components/Meta"));
const Layout = dynamic(() => import("shared/components/Layout"));
const Loading = dynamic(() => import("shared/components/Loading"));
const DetailedContainer = dynamic(
  () => import("feature/Detailed/DetailedContainer")
);

// interface DetailedTypes {
//   news: NewsResponseType<NewsType>;
//   newsSlug: NewsType;
// }

const DetailedPage: NextPage = ({ newsSlug }: any) => {
  const { asPath } = useRouter();

  //Reply click
  // useEffect(() => {
  //   writeData(
  //     `all_content_comments/${newsSlug.slug}/-N2CI73m8mKAW4wPdqtZ/reply/reply_content`,
  //     {
  //       user: {
  //         user_id: "",
  //         full_name: "Cemil",
  //         last_name: "Huseynzade",
  //         image: "url",
  //       },
  //       content: "Ela Xeberdir!",
  //     },
  //   );
  // }, [newsSlug.slug]);

  //Reply comments
  // useEffect(() => {
  //   writeData(
  //     `all_content_comments/${newsSlug.slug}/-N2CI73m8mKAW4wPdqtZ/reply/reply_messages`,
  //     {
  //       user: {
  //         user_id: "",
  //         full_name: "Sarkhan",
  //         last_name: "Rahimli",
  //         image: "url",
  //       },
  //       content: "Halaldi Cemil!",
  //     },
  //     true
  //   );
  // }, [newsSlug.slug]);

  return (
    <Fragment>
      <MetaSEO
        title={newsSlug.title}
        description={newsSlug.content}
        ogTitle={newsSlug.title}
        ogDescription={newsSlug.content}
        ogImage={newsSlug.cover_image}
        ogUrl={`${productURL()}${asPath}`}
      />
      <Layout>
        <DetailedContainer newsSlug={newsSlug} />
      </Layout>
    </Fragment>
  );
};

export default DetailedPage;

export const getServerSideProps: GetServerSideProps = async ({
  locale,
  params,
}) => {
  let languages = {
    ...(await serverSideTranslations(locale, ["common", "menu"])),
  };

  let res = await serverSideRequest(converSlug(params.slug));

  if (!res) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      ...languages,
      newsSlug: res.data,
    },
  };
};
