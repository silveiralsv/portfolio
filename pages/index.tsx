import type { NextPage } from 'next'
import { useEffect } from 'react'
import { About } from '../components/about'
import { HomeSection } from '../components/home'

const Home: NextPage = () => {


  useEffect(() => {
    window.addEventListener('resize', () => {
      // We execute the same script as before
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    });

  }, [])

  return (
    <main className='max-h-screen scroll-smooth bg-black text-slate-100 font-sans snap snap-y overflow-y-scroll overflow-x-hidden snap-mandatory'>
      <div className="snap-start inset-0 h-screen">
        <HomeSection />
      </div>
      <div className="snap-start inset-0 h-screen">
        <About />
      </div>
    </main>
  )
}

export default Home
