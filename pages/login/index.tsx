import { GetStaticProps, NextPage } from "next";
import dynamic from "next/dynamic";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Fragment } from "react";
import { productURL } from "shared/utils/productURL";
import { FORM } from "shared/constant/form";
import { useRedirect } from "shared/hooks/useRedirect";

const MetaSEO = dynamic(() => import("shared/components/Meta"));
const LoginContainer = dynamic(() => import("feature/Login/LoginContainer"),{ssr:false});

const LoginPage: NextPage = () => {
  // const { isAccessPage } = useRedirect();

  return (
   <Fragment>
      <MetaSEO
        title={`Daxil ol | tech.az`}
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
       <LoginContainer {...FORM.LOGIN} />
    </Fragment> 
  );
};

export default LoginPage;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  let languages = {
    ...(await serverSideTranslations(locale, ["common", "menu"])),
  };

  return {
    props: {
      ...languages,
    },
    // revalidate: 1,
  };
};
