import dynamic from 'next/dynamic'
import Layout from '../components/Layout'
import { getMixNews } from '../services/MixNews'
import { GetServerSideProps, NextPage } from 'next'
import { useEffect } from 'react'
import { useDispatch } from "../hooks/useDispatch"
import { fillMixData } from '../store/slices/home/homeSlices'
import { useSelector } from '../hooks/useSelector'

const NewsContainer = dynamic(() => import('../feature/News/NewsContainer'))

const HomePage: NextPage = ({ news }: any) => {
  let newsData = useSelector(state => state.home.mixNews)
  let dispatch = useDispatch()

  useEffect(() => {
    !newsData.length && dispatch(fillMixData(news))
  }, [])

  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <NewsContainer data={newsData} />
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
      news: news
    }
  }

}