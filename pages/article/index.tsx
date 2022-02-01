import { NextPage } from 'next'
import dynamic from 'next/dynamic'
import Layout from '../../components/Layout'

const NewsContainer = dynamic(()=>import('../../feature/News/NewsContainer'))


const ArticlePage:NextPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
      <NewsContainer/>
  </Layout>
)

export default ArticlePage
