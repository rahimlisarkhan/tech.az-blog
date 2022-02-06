import { NextPage } from 'next'
import dynamic from 'next/dynamic'
import Layout from '../../components/Layout'

const NewsContainer = dynamic(()=>import('../../feature/News/NewsContainer'))

const ArticlePage:NextPage = () => (
  <Layout title="Haqqımızda | tech.az">
      <NewsContainer/>
  </Layout>
)

export default ArticlePage
