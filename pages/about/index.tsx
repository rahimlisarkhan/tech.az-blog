import { NextPage } from 'next'
import dynamic from 'next/dynamic'
import Layout from '../../components/Layout'

const AboutContainer = dynamic(() => import('../../feature/About/AboutContainer'))

const AboutPage: NextPage = () => {

  return (
    <Layout title="Haqqımızda | tech.az">
      <AboutContainer />
    </Layout>
  )
}

export default AboutPage
