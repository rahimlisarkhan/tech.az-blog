import { GetServerSideProps, NextPage } from 'next'
import dynamic from 'next/dynamic'
import Layout from '../../components/Layout'
import { getDataNews } from '../../services/MixNews'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

const NewsContainer = dynamic(() => import('../../feature/News/NewsContainer'))


const NewsPage: NextPage = ({ news: { results, next } }: any) => {
  const { t } = useTranslation("menu");


  return (
    <Layout title={`${t("news")} | tech.az`}>
      <NewsContainer newsData={results} nextPage={next} />
    </Layout>
  )
}


export default NewsPage

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {

  let languages = { ...await serverSideTranslations(locale, ['common', 'menu']) }

  let data = await getDataNews("news",null)

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