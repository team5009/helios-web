import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import Background from '@/components/Background'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
  return (
    <>
      {/* <Background/> */}
      <section className='container h-screen mx-auto flex items-center justify-center flex-col md:flex-row'>
        <div className='bg-helios-logo aspect-square h-72 md:h-80 lg:h-96 bg-cover bg-center'></div>
        <div>
          <h2 className='text-3xl hidden md:inline-block dark:text-white'>Team 5009:</h2>
          <h1 className='hidden md:block text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-orange-400'>Helios</h1>
          <p className='w-96 dark:text-white'>
          Providing opportunities for students to participate in the FIRST Tech Challenge, a robotics program, and gain first-hand STEM experience.
          </p>
        </div>
      </section>
      {/*  */}
          
      <div className='relative'>
      </div>
    </>

  )
}
