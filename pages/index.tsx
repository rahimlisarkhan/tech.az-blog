import dynamic from 'next/dynamic'
import Layout from '../components/Layout'
import { getMixNews } from '../services/MixNews'
import { GetServerSideProps, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
const NewsContainer = dynamic(() => import('../feature/News/NewsContainer'))

const HomePage: NextPage = ({ news }: any) => {

  const { t } = useTranslation("menu");

  return (
    <Layout title={`${t("home")} | tech.az`}>
      <NewsContainer newsData={news} />
    </Layout>
  )
}

export default HomePage


export const getServerSideProps: GetServerSideProps = async ({locale}) => {
  
  let languages = { ...await serverSideTranslations(locale, ['common', 'menu']) }
  let { data: { result: { news } } } = await getMixNews()

  if (!news) {
    return {
      notFound: true
    }
  }


  
  return {
    props: {
      ...languages,
      news: news
    }
  }

}