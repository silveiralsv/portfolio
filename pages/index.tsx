import type { NextPage } from 'next'
import { About } from '../components/about'
import { HomeSection } from '../components/home'

const Home: NextPage = () => {
  return (
    <main className='mb:h-screen mb:max-h-screen scroll-smooth bg-black text-slate-100 font-sans snap snap-y overflow-y-scroll overflow-x-hidden snap-mandatory'>
      <div className="snap-center h-screen">
        <HomeSection />
      </div>
      <div className="snap-center h-screen">
        <About />
      </div>
    </main>
  )
}

export default Home
