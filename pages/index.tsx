import dynamic from 'next/dynamic'
import Layout from '../shared/components/Layout'
import { getDataNews } from '../shared/services/MixNews'
import { GetServerSideProps, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

const NewsContainer = dynamic(() => import('../feature/News/NewsContainer'))


const HomePage: NextPage = ({ news: { results, next } }: any) => {

  const { t } = useTranslation("menu");

  return (
    <Layout title={`${t("home")} | tech.az`}>
      <NewsContainer newsData={results} nextPage={next} />
    </Layout>
  )
}

export default HomePage


export const getServerSideProps: GetServerSideProps = async ({ locale }) => {

  let languages = { ...await serverSideTranslations(locale, ['common', 'menu']) }

  let data = await getDataNews("mixdata",null)


  if (!data) {
    return {
      notFound: true
    }
  }
  
  return {
    props: {
      ...languages,
      news: data.data
    }
  }

}