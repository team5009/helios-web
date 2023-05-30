import { Html, Head, Main, NextScript } from 'next/document'
import { useSelector } from 'react-redux'

export default function Document() {
  
  return (
    <Html lang="en">
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon/favicon-16x16.png"/>
        <link rel="manifest" href="/images/favicon/site.webmanifest"/>
        <link rel="mask-icon" href="/images/favicon/safari-pinned-tab.svg" color="#5bbad5"/>
        <link rel="shortcut icon" href="/images/favicon/favicon.ico"/>
        <meta name="msapplication-TileColor" content="#da532c"/>
        <meta name="msapplication-TileImage" content="/images/favicon/mstile-144x144.png"/>
        <meta name="msapplication-config" content="/images/favicon/browserconfig.xml"/>
        <meta name="theme-color" content="#ffffff"/>
        <title>Team 5009: Helios</title>

        <link href="https://fonts.cdnfonts.com/css/monument-extended" rel="stylesheet"/>
      </Head>
      <body className='m-0 bg-white dark:bg-gray-800'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )

}