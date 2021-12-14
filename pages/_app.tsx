import type { AppProps } from 'next/app'
import '../styles/globals.css'
import { NavHeader } from '../components/navheader';

function MyApp({ Component, pageProps }: AppProps) {
  return  (
    <>
    <NavHeader />
    <Component {...pageProps} />    
    </>
  )
}
export default MyApp
