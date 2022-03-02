import { NextPage } from 'next'
import Layout from '../../shared/components/Layout'
import dynamic from 'next/dynamic'

const JoinContainer = dynamic(() => import('../../feature/join/JoinContainer'))



const JoinPage:NextPage = () => {
    return(
    <Layout title="Bizə qoşul | tech.az">
        <JoinContainer/>
    </Layout>
    )
}

export default JoinPage