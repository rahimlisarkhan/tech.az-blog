import { GetServerSideProps, NextPage } from 'next'
import dynamic from 'next/dynamic'
import Layout from '../../components/Layout'
import { getDataNews } from '../../services/MixNews'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
const NewsContainer = dynamic(() => import('../../feature/News/NewsContainer'))

const ArticlePage: NextPage = ({ news: { results, next } }: any) => {

  let { t } = useTranslation("menu")

  return (
    <Layout title={`${t("article")} | tech.az`}>
      <NewsContainer newsData={results} nextPage={next} />
    </Layout>
  )
}

export default ArticlePage

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {

  let languages = { ...await serverSideTranslations(locale, ['common', 'menu']) }

  let data = await getDataNews("articles")

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