import React, { Fragment, ReactNode } from 'react'
import Head from 'next/head'
import Container from '@mui/material/Container';
import Main from "../Main"
import Header from "../Header"

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'tech.az | blog' }: Props) => (
  <Fragment>
    <Head>
      <title>{title}</title>
    </Head>
    <Fragment>
            <Container maxWidth="lg" >
                <Header />
                <Main>
                    {children}
                </Main>
            </Container>
        </Fragment>
  </Fragment>
)

export default Layout
