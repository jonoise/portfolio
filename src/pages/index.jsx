import { Stack } from '@chakra-ui/react'
import Head from 'next/head'
import Navbar from '../components/nav/index'

export default function Home() {
  return (
    <>
      <Head>
        <title>Amilkar - Developer</title>
        <meta
          name="description"
          content="Amilkar Munoz portfolio website build with NextJS to showcase projects."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stack w="full" bg="#1a1a1a" minH="100vh">
        <Navbar />
      </Stack>
    </>
  )
}
