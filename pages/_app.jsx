import { Fab, Action } from 'react-tiny-fab'

import Head from 'next/head'
import Layout from 'components/Layout'

import { WA_LINK } from 'data/product'

import 'antd/dist/antd.css'
import '/styles/utility.min.css'
import 'react-tiny-fab/dist/styles.css'
import 'slick-carousel/slick/slick.css'
import '/styles/fontawesome/css/all.min.css'
import 'antd-button-color/dist/css/style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'slick-carousel/slick/slick-theme.css'

const emailStyle = { backgroundColor: "#1890ff" }
const waStyle = { backgroundColor: "#25D366" }
const phoneStyle = { backgroundColor: "#f39c12" }

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
        <link rel="icon" href="/images/ico.png" />
      </Head>

      <Layout>
        <Component {...pageProps} />

        <Fab
          alwaysShowTitle={false}
          icon={<i className="far fa-comments fa-lg" />}
          style={{ bottom: 0, right: 0 }}
          event="hover"
        >
          <Action text="Email" style={emailStyle}>
            <a
              rel="noreferrer"
              href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
              target="_blank"
              className="text-decoration-none text-reset"
            >
              <i className="far fa-envelope" />
            </a>
          </Action>
          <Action text="WhatsApp" style={waStyle}>
            <a
              rel="noreferrer"
              href={WA_LINK}
              target="_blank"
              className="text-decoration-none text-reset"
            >
              <i className="fab fa-lg fa-whatsapp" />
            </a>
          </Action>
          <Action text="Telepon" style={phoneStyle}>
            <a
              rel="noreferrer"
              href={`tel:${process.env.NEXT_PUBLIC_TELEPON}`}
              target="_blank"
              className="text-decoration-none text-reset"
            >
              <i className="far fa-phone-alt" />
            </a>
          </Action>
        </Fab>

      </Layout>

      <style jsx global>{`
      body {
        font-size: 14px;
        padding-top: 79px;
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
      blockquote {
        border-left: 5px solid #ebebeb;
        margin: 1.5em 0px;
        padding: 0.5em 20px;
      }
      blockquote p::before {
        content: open-quote;
      }
      blockquote p::after {
        content: close-quote;
      }
      blockquote p {
        display: inline;
        font-size: 100%;
      }
      .border-type-1 {
        border: 1px solid rgb(0 0 0 / 4%);
      }
      .bor-rad-10px {
        border-radius: 10px;
      }
      .truncate-3 {
        -webkit-line-clamp: 3;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
      }
      .truncate-4 {
        -webkit-line-clamp: 4;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
      }

      .rtf.open .rtf--mb > * {
        transform: rotate(0deg) !important;
      }

      /*SLICK-SLIDE*/
      .slick-prev,
      .slick-next {
        font-size: 15px !important;
      }
      .slick-prev:before,
      .slick-next:before {
        content: "" !important;
      }
      .slick-slider > i.arrow-slick:before,
      i.arrow-slick:before {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      /*SLICK-SLIDE*/
      @media only screen and (max-width: 991px) {
        section {
          padding: 30px 0;
        }
      }
      `}</style>
    </>
  )
}

export default App
