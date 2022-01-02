import type { NextPage } from 'next'
import { About } from '../components/about'
import { Footer } from '../components/footer'

import { HomeSection } from '../components/home'
import { Projects } from '../components/projectCard'

const Home: NextPage = () => {
  return (
    <main >
      <HomeSection />
      <About />
      <Projects/>
      <Footer/>
    </main>
  )
}

export default Home
