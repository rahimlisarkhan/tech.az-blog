import { GetStaticProps, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import dynamic from 'next/dynamic'
import Layout from '../../shared/components/Layout'

const AboutContainer = dynamic(() => import('../../feature/About/AboutContainer'))

const AboutPage: NextPage = () => {

  return (
    <Layout title="Haqqımızda | tech.az">
      <AboutContainer />
    </Layout>
  )
}

export default AboutPage


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
