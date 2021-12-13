import type { NextPage } from 'next'
import { About } from '../components/about'

import { HomeSection } from '../components/home'

const Home: NextPage = () => {
  return (
    <main >
      <div style={{height: '100vh', overflow: 'auto'}}>

      <HomeSection />
      <About />
      </div>
    </main>
  )
}

export default Home
