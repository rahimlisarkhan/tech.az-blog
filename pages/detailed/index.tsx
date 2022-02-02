import { NextPage } from 'next'
import dynamic from 'next/dynamic'
import Layout from '../../components/Layout'

const DetailedContainer = dynamic(()=>import('../../feature/Detailed/DetailedContainer'))


const NewsPage:NextPage = () => (

  <Layout title="Home | Next.js + TypeScript Example">
      <DetailedContainer/>
  </Layout>
)

export default NewsPage
