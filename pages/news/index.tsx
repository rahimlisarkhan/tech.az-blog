import { GetServerSideProps, NextPage } from 'next'
import dynamic from 'next/dynamic'
import Layout from '../../components/Layout'
import { getMixNews } from '../../services/MixNews'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

const NewsContainer = dynamic(() => import('../../feature/News/NewsContainer'))


const NewsPage: NextPage = ({ news }: any) => {
  const { t } = useTranslation("menu");

  console.log(news);

  return (
    <Layout title={`${t("news")} | tech.az`}>
      {/* <NewsContainer newsData={news} /> */}
    </Layout>
  )
}



export default NewsPage

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  let languages = { ...await serverSideTranslations(locale, ['common', 'menu']) }

  // let { data: { result: { news } } } = await getMixNews()
  let data = await getMixNews()

  // if (!news) {
  //   return {
  //     notFound: true
  //   }
  // }

  return {
    props: {
      ...languages,
      news: data
    }
  }

}