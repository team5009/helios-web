import {BsMoonStarsFill, BsSunFill} from 'react-icons/bs'
import {useSelector, useDispatch} from 'react-redux'
import { useTheme } from 'next-themes'
import { setDarkMode, toggleDarkMode } from '@/utils'
import { useEffect } from 'react'

export default () => {
    const distpatch = useDispatch()
    const themeStore = useSelector((state: any) => state.darkMode)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        if (localStorage.getItem('darkMode') === 'true') {
            distpatch(setDarkMode(true))
        } else if (localStorage.getItem('darkMode') === 'false') {
            distpatch(setDarkMode(false))
        }
    }, [])
    
    return (
        <button 
        onClick={() => {
            setTheme(theme === 'dark' ? 'light' : 'dark')
            if (theme === 'dark') {
                distpatch(setDarkMode(true))
            } else {
                distpatch(setDarkMode(!true))
            }
            // localStorage.setItem('darkMode', themeStore.darkMode)
        }}
        className={`
        bg-[#1a202c] text-white dark:bg-white dark:text-black
        hover:bg-[#2d3748] dark:hover:bg-[#f7fafc
        p-5 rounded-full shadow-2xl`}>
            {
                themeStore.darkMode ?  <BsMoonStarsFill /> : <BsSunFill />
            }
        </button>
    )
}