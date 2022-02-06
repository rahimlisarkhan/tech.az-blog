import { GetServerSideProps, NextPage } from 'next'
import dynamic from 'next/dynamic'
import Layout from '../../components/Layout'
import { getMixNews, getMixNewsSlug } from '../../services/MixNews'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const DetailedContainer = dynamic(() => import('../../feature/Detailed/DetailedContainer'))


const DetailedPage: NextPage = ({ news,newsSlug }: any) => {

  

  return (
    <Layout title={`${newsSlug.title}`}>
      <DetailedContainer newsSlug={newsSlug} newsData={news} />
    </Layout>
  )
}

export default DetailedPage


export const getServerSideProps: GetServerSideProps = async ({locale,query:{slug}}) => {
  let languages = { ...await serverSideTranslations(locale, ['common', 'menu']) }
  
  let { data: { result: { news } } } = await getMixNews()
  let { data: { result} } = await getMixNewsSlug(slug)

  if (!news) {
    return {
      ...languages,
      notFound: true
    }
  }

  return {
    props: {
      newsSlug:result,
      news: news
    }
  }

}