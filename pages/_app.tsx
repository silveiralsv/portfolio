import '../styles/globals.css'
import 'antd/dist/antd.css';
import type { AppProps } from 'next/app'
import { Header, Topbar } from '../components'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return  (
    <>
    <Header/>
    <Topbar/> 
    <Component {...pageProps} />    
    
    </>
  )
}
export default MyApp
