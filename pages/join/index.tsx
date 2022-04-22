import { GetStaticProps, NextPage } from 'next'
import Layout from '../../shared/components/Layout'
import dynamic from 'next/dynamic'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const JoinContainer = dynamic(() => import('../../feature/join/JoinContainer'))

const JoinPage:NextPage = () => {
    return(
    <Layout title="Bizə qoşul | tech.az">
        <JoinContainer/>
    </Layout>
    )
}

export default JoinPage

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
  