import {BsMoonStarsFill, BsSunFill} from 'react-icons/bs'
import {useSelector, useDispatch} from 'react-redux'
import { useTheme } from 'next-themes'
import { toggleDarkMode } from '@/utils'

export default () => {
    const distpatch = useDispatch()
    const themeStore = useSelector((state: any) => state.darkMode)
    const { theme, setTheme } = useTheme()

    if (themeStore.darkMode) {
        setTheme('dark')
    } else {
        setTheme('light')
    }

    return (
        <button 
        onClick={() => {
            setTheme(theme === 'dark' ? 'light' : 'dark')
            distpatch(toggleDarkMode())
            console.log(themeStore)
        }}
        className={`
        bg-[#1a202c] text-white dark:bg-white dark:text-black
        hover:bg-[#2d3748] dark:hover:bg-[#f7fafc
        p-5 rounded-full shadow-2xl`}>
            {
                themeStore.darkMode ? <BsSunFill /> : <BsMoonStarsFill />
            }
        </button>
    )
}