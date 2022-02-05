import { GetServerSideProps, NextPage } from 'next'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Layout from '../../components/Layout'
import { useDispatch } from '../../hooks/useDispatch'
import { useSelector } from '../../hooks/useSelector'
import { getMixNews, getMixNewsSlug } from '../../services/MixNews'
import { fillMixData, fillNewsSlug } from '../../store/slices/home/homeSlices'

const DetailedContainer = dynamic(() => import('../../feature/Detailed/DetailedContainer'))


const DetailedPage: NextPage = ({ news,newsSlug }: any) => {
  let newsData = useSelector(state => state.home.mixNews)
  let dispatch = useDispatch()

  let { query: { slug } } = useRouter()


  useEffect(() => {
    dispatch(fillNewsSlug(newsSlug))
    !newsData.length && dispatch(fillMixData(news))

  }, [])

  return (
    <Layout title={`${slug}`}>
      <DetailedContainer />
    </Layout>
  )
}

export default DetailedPage


export const getServerSideProps: GetServerSideProps = async ({query:{slug}}) => {
  
  let { data: { result: { news } } } = await getMixNews()
  let { data: { result} } = await getMixNewsSlug(slug)

  if (!news) {
    return {
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