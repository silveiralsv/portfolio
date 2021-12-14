import type { NextPage } from 'next'
import { About } from '../components/about'
import { Footer } from '../components/footer'

import { HomeSection } from '../components/home'

const Home: NextPage = () => {
  return (
    <main >
      <HomeSection />
      <About />
      <Footer/>
    </main>
  )
}

export default Home
