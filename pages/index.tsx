import type { NextPage } from 'next'
import Head from 'next/head'

import {PrimaryButton} from '../components'

const Home: NextPage = () => {
  return (
    <>
    <Head>
      <title>About me</title>
    </Head>
    <body>
      <h1>
        Teste
      </h1>
      <PrimaryButton>Primary Test</PrimaryButton>
    </body>
    </>
  )
}

export default Home
