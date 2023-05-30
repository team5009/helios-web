import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import Background from '@/components/Background'
import { useDispatch, useSelector } from 'react-redux'
import { Language } from '@/utils/enum'
import { setDarkMode } from '@/utils'
import { useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const langStore = useSelector((state: any) => state.language)

  const distpatch = useDispatch()
  
  return (
    <>
      {/* <Background/> */}
      <section className='container h-screen mx-auto flex items-center justify-center flex-col md:flex-row'>
        <div className='bg-helios-logo aspect-square h-72 md:h-80 lg:h-96 bg-cover bg-center'></div>
        <div>
          <h2 className='text-3xl hidden md:inline-block dark:text-white'>{langStore.language == Language.FR ? 'Équipe' : 'Team' } 5009:</h2>
          <h1 className='hidden md:block text-9xl font-black bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-orange-400'>{langStore.language == Language.FR ? 'Hélios' : 'Helios' }</h1>
          <p className='text-justify w-72 md:w-96 md:text-base text-sm dark:text-white'>
            {
              langStore.language == Language.FR ? 
              'Offrant aux étudiants la possibilité de participer au FIRST Tech challenge, un programme de robotique, et d’acquérir une expérience directe en STEM.' 
              : 
              'Providing opportunities for students to participate in the FIRST Tech Challenge, a robotics program, and gain first-hand STEM experience.'
            }
          </p>
        </div>
      </section>
      {/*  */}
          
      <div className='relative'>
      </div>
    </>

  )
}
