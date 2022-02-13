import type { NextPage } from 'next'
import { About } from '../components/about'
import { Footer } from '../components/footer'

import { HomeSection } from '../components/home'
import { Projects } from '../components/projectCard'

const Home: NextPage = () => {
  return (
    <main className='max-h-screen bg-black text-slate-100 scroll-smooth font-sans snap snap-y overflow-y-scroll snap-mandatory'>
      
      <HomeSection />

      
      <About />

      

      


    </main>
  )
}

export default Home
