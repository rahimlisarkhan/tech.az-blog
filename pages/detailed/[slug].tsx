import {
  GetServerSideProps,
  NextPage,
} from "next";
import dynamic from "next/dynamic";
import {  serverSideRequest } from "shared/services/request";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// import { GetStaticProps } from "next";
import { Fragment, useEffect, useState } from "react";
// import { NewsResponseType, NewsType } from "types/news";
import { useRouter } from "next/router";
import { productURL } from "shared/utils/productURL";
// import { writeData } from "db/writeData";
// import { realTimeData } from "db/realTimeData";
// import { onValue, ref } from "firebase/database";
// import { db } from "config/firebase";
// import { createdAt } from "db/createdAt";
import { useRequest } from "shared/hooks/useRequest";
import { status_req } from "shared/constant/status";
import { apiPageContents } from "api/news";
import { apiPatch } from "shared/constant/patch";
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

// news: { results }

const DetailedPage: NextPage = ({ newsSlug }: any) => {
  const { asPath } = useRouter();
  const [results, setResults] = useState(null);

  const { exc,isStatus } = useRequest(() => apiPageContents(apiPatch.mixdata), {
    onSuccess: ({ results }) => {
      setResults(results);
    },
  });

  useEffect(() => {
    exc();
  }, []);

  //read data
  // useEffect(() => {
  //   realTimeData("/all_content_comments", (data: any) => {
  //     console.log(data, "Data");
  //   });
  // }, []);

  //create comments comments

  // useEffect(() => {
  //   writeData(
  //     `all_content_comments/${newsSlug.slug}`,
  //     {
  //       user: {
  //         user_id: "",
  //         full_name: "Cemil",
  //         last_name: "Huseynzade",
  //         image: "url",
  //       },
  //       content: "Ela Xeberdir",
  //       created_at: createdAt(),
  //       reply: "",
  //     },
  //     true
  //   );
  // }, [newsSlug.slug]);

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
        {isStatus === status_req.isSuccess ? (
          <DetailedContainer newsSlug={newsSlug} newsData={results} />
        ) : (
          <Loading />
        )}
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

  // let res = await getNewsSlug(params.slug);
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

// export const getStaticProps: GetStaticProps = async ({ locale, params }) => {
//   let languages = {
//     ...(await serverSideTranslations(locale, ["common", "menu"])),
//   };

//   let data = await getDataNews("mixdata", null);

//   let res = await getNewsSlug(params.slug);

//   if (!data || !res) {
//     return {
//       notFound: true,
//     };
//   }

//   return {
//     props: {
//       ...languages,
//       news: data.data,
//       newsSlug: res.data,
//     },
//     // revalidate: 1,
//   };
// };

// export const getStaticPaths: GetStaticPaths = async () => {
//   const news = await getDataNews("alldata", null);

//   const paths = news?.data?.map((item: any) => ({
//     params: { slug: `${item.type}=${item.slug}` },
//   }));

//   return { paths, fallback: false };
// };
