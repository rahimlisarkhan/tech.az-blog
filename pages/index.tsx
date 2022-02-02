import dynamic from 'next/dynamic'
import Layout from '../components/Layout'
import { getMixNews } from '../services/News'
import { GetServerSideProps, NextPage } from 'next'
import { useEffect } from 'react'
import { useDispatch } from "../hooks/useDispatch"
import { fillMixData } from '../store/slices/home/homeSlices'
const NewsContainer = dynamic(() => import('../feature/News/NewsContainer'))

const HomePage: NextPage = ({ news }: any) => {

  let dispatch = useDispatch()

  useEffect(() => {
    dispatch(fillMixData(news))
  }, [])

  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <NewsContainer data={news}  />
    </Layout>
  )
}

export default HomePage


export const getServerSideProps: GetServerSideProps = async (context) => {

  let { data: { result: { news } } } = await getMixNews()

  if (!news) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      news
    }
  }

}