/* eslint-disable react/display-name */
import Document, {Html, Head, Main, NextScript} from 'next/document'


export default class MyDocument extends Document{
 
  
  render() {
    return (
      <Html >
      <Head>
      <link 
        rel="shortcut icon" 
        href="favicon.png" 
        type="image/png"
      />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
      </Html>
    )
  }
}