import { GetStaticProps, NextPage } from "next";
import dynamic from "next/dynamic";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Fragment } from "react";
import { productURL } from "shared/utils/productURL";
import { FORM } from "shared/constant/form";
import { useRedirect } from "shared/hooks/useRedirect";

const LoginContainer = dynamic(() => import("feature/Login/LoginContainer"));
const MetaSEO = dynamic(() => import("shared/components/Meta"));

const RegisterPage: NextPage = () => {

  return (
      <Fragment>
        <MetaSEO
          title={`Qeydiyyat | tech.az`}
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
        <LoginContainer {...FORM.REGISTER} />
      </Fragment>
    
  );
};

export default RegisterPage;

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
