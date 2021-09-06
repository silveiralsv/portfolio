import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { NavBar, Header } from '../components'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return  (
    <>
    <Header/>
    <NavBar> 
    <Component {...pageProps} />    
    </NavBar>
    </>
  )
}
export default MyApp
