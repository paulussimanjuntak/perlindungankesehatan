import Head from 'next/head'

import 'antd/dist/antd.css'
import '/styles/utility.min.css'
import '/styles/fontawesome/css/all.min.css'
import 'antd-button-color/dist/css/style.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = ({ Component, pageProps }) => {
  return (
    <> 
      <Head>
        <meta charSet="UTF-8" />
        <title>Perlindungan Kesehatan</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="description" content="Perlindungan Kesehatan" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={process.env.NEXT_PUBLIC_DOMAIN} />
        {/* <link rel="icon" href="/static/images/ico.png" /> */}
      </Head>
      <Component {...pageProps} />

      <style jsx global>{`
      body {
        font-size: 14px;
        padding-top: 64px;
      }
      section {
        padding: 60px 0;
      }
      .hover-pointer:hover {
        cursor: pointer;
      }
      .fw-500 {
        font-weight: 500 !important;
      }
      .text-danger-2 {
        color: #cf1322;
      }
      `}</style>
    </>
  )
}

export default App
