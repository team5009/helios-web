import { Html, Head, Main, NextScript } from 'next/document'
import { useSelector } from 'react-redux'

export default function Document() {
  
  return (
    <Html lang="en">
      <Head />
      <body className='m-0 bg-white dark:bg-gray-800'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
