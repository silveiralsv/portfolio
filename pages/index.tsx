import type { NextPage } from 'next'
import { About } from '../components/about'
import { HomeSection } from '../components/home'

const Home: NextPage = () => {
  return (
    <main className='h-screen max-h-screen scroll-smooth bg-black text-slate-100 font-sans snap snap-y overflow-y-scroll overflow-x-hidden snap-mandatory'>
      <div className=" absolute inset-0 snap-start h-screen">
        <HomeSection />
      </div>
      <div className="absolute inset-0 snap-start h-screen">
        <About />
      </div>
    </main>
  )
}

export default Home
