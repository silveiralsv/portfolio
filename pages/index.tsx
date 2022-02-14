import type { NextPage } from 'next'
import { About } from '../components/about'
import { HomeSection } from '../components/home'

const Home: NextPage = () => {
  return (
    <main className='absolute inset-0 max-h-screen scroll-smooth bg-black text-slate-100 font-sans snap snap-y overflow-y-scroll overflow-x-hidden snap-mandatory'>
      <div className="snap-start h-full">
        <HomeSection />
      </div>
      <div className="snap-start h-full">
        <About />
      </div>
    </main>
  )
}

export default Home
