import { NextPage } from 'next'
import dynamic from 'next/dynamic'
import Layout from '../../components/Layout'

const NotFoundContainer = dynamic(() => import('../../feature/404/NotFoundContainer'))

const NotFoundPage: NextPage = () => {

  return (
    <Layout title="Səhifə tapılmadı | tech.az">
      <NotFoundContainer />
    </Layout>
  )
}

export default NotFoundPage
