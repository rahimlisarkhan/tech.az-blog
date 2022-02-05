import React, { Fragment, ReactNode } from 'react'
import Head from 'next/head'
import Container from '@mui/material/Container';
import Main from "../Main"
import Header from "../Header"
import Footer from '../Footer';
import { LayoutContent } from './Layout.styled';
import Image from "../Image"
import { useSelector }from "../../hooks/useSelector"

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'tech.az | blog' }: Props) => {

  let mode = useSelector(state=>state.home.appMode)

  return (

    <Fragment>
      <Head>
        <title>{title}</title>
      </Head>
      <Fragment>
        <LayoutContent mode={mode ? "true" : ""} >
          <Header />
          <Container maxWidth="lg" >
            <Main>
              {children}
            </Main>
          </Container>
          <Footer />
        </LayoutContent>
      </Fragment>
    </Fragment>
  )
}

export default Layout
