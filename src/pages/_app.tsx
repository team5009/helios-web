import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { setDarkMode, store } from '@/utils'
import { Provider, useDispatch, useSelector } from 'react-redux'
import ThemeSwitcher from '@/components/ThemeSwitcher'
import { ThemeProvider } from 'next-themes'
import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import { useEffect } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  
  return (
    <Provider store={store}>
      <ThemeProvider attribute='class'>

        <div className='fixed bottom-5 right-5 z-[9999999999]'>
          <ThemeSwitcher/>
        </div>
        <NavBar/>
        <Component {...pageProps}/>
        <Footer/>
      </ThemeProvider>
    </Provider>
  )
}
