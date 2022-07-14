// import Script from "next/script"
// import Link from 'next/link';
import Head from 'next/head'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" rel="stylesheet"
        ></link>
      </Head>
      <script
        src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"
       />
      <script
        src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"
         />

      <Component {...pageProps} />
    </>

  )
  
 
}

export default MyApp
