import { GetServerSideProps, NextPage } from 'next'
import dynamic from 'next/dynamic'
import Layout from '../../components/Layout'
import { getMixNews } from '../../services/MixNews'

const NewsContainer = dynamic(() => import('../../feature/News/NewsContainer'))


const ArticlePage: NextPage = ({ news }:any) => (
  
  <Layout title="Məqalə | tech.az">
    <NewsContainer newsData={news} />
  </Layout>
)

export default ArticlePage

export const getServerSideProps: GetServerSideProps = async () => {

  let { data: { result: { news } } } = await getMixNews()

  if (!news) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      news: news
    }
  }

}