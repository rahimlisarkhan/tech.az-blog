import { GetServerSideProps, NextPage } from 'next'
import dynamic from 'next/dynamic'
import Layout from '../../components/Layout'
import { getDataNews, getNewsSlug } from '../../services/MixNews'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const DetailedContainer = dynamic(() => import('../../feature/Detailed/DetailedContainer'))


const DetailedPage: NextPage = ({ news: { results }, newsSlug }: any) => {



  return (
    <Layout title={`${newsSlug.title}`}>
      <DetailedContainer newsSlug={newsSlug} newsData={results} />
    </Layout>
  )
}

export default DetailedPage


export const getServerSideProps: GetServerSideProps = async ({ locale, query }) => {
  let languages = { ...await serverSideTranslations(locale, ['common', 'menu']) }

  let [queryKeyValue] = Object.entries(query)

  let data = await getDataNews("mixdata",null)

  let res = await getNewsSlug(queryKeyValue)

  if (!data || !res) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      ...languages,
      news: data.data,
      newsSlug: res.data
    }
  }

}