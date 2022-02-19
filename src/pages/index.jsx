import { Stack } from '@chakra-ui/react'
import Head from 'next/head'
import Navbar from '../components/nav/index'
import Header from '../components/header/index'
import Portfolio from '../components/portfolio'
import BlogList from '../components/blog/list'
import { useRouter } from 'next/dist/client/router'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
    })
  }, [])
  return (
    <>
      <Head>
        <title>Amilkar - Developer</title>
        <meta
          name='description'
          content='Amilkar Munoz portfolio website build with NextJS to showcase projects.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Stack w='full' bg='#1a1a1a' minH='100vh'>
        <Navbar />
        <Header />
        <Portfolio />
        <BlogList />
      </Stack>
    </>
  )
}
