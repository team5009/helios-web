import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import Background from '@/components/Background'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const time = new Date()
  const startTime = new Date('2011-09-01T00:00:00.000Z')
  return (
    <>
      {/* <Background/> */}
      <section className='container h-screen mx-auto flex items-center justify-center flex-col md:flex-row'>
        <div className='bg-helios-logo h-96 w-96 bg-cover bg-center'></div>
        <div>
          <h2 className='text-3xl hidden md:inline-block dark:text-white'>Team 5009:</h2>
          <h1 className='hidden md:block text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-orange-400'>Helios</h1>
          <p className='w-96 dark:text-white'>
          Providing opportunities for students to participate in the FIRST Tech Challenge, a robotics program, and gain first-hand STEM experience.
          </p>
        </div>
      </section>
      {/* <section className='relative top-0'>
        <div className=' m-0 z-10 bg-orange-400'>
          <h2 className='mx-48 text-2xl'>
            About Helios!
          </h2>
          <div className='box-border w-screen z-10 top-48 '>
            <p className='px-48'>
            FTC Team Helios 5009 started {time.getFullYear() - startTime.getFullYear()} years ago, in 2011, when a group of former FLL members outgrew the program. 
            When these members graduated from Middle School, they decided to start a <a href="https://www.firstinspires.org/" target='_blank' className='text-blue-600'>FIRST</a> Tech Challenge team at their new High School.
            The team started as an elective class held during school hours and grew into an after-school club available to all students. 
            The team has made it to the world championship every year since 2011, coming to a total of 9 years in a row, and has won the Inspire Award six times at the Canadian/Alberta Championship.
            That being said, the team has had the opportunity to travel to both St. Louis, Missouri and Houston, Texas for the <a href="https://www.firstinspires.org/" target='_blank' className='text-blue-600'>FIRST</a> World Championship.
            </p>
            <br/>
          </div>
          <div className='h-24'/>
        </div>
      </section> */}
          
      <div className='relative'>
      </div>
    </>

  )
}
