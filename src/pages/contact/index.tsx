import { Language } from '@/utils/enum'
import Link from 'next/link'
import {AiFillInstagram, AiFillTwitterSquare, AiFillYoutube} from 'react-icons/ai'
import { useSelector } from 'react-redux'

export default function Contact() {
    const langStore = useSelector((state: any) => state.language)
    const socials = [
        {
            name: 'Instagram',
            link: 'https://www.instagram.com/ftc_helios5009/',
            icon: AiFillInstagram
        },
        {
            name: 'Twitter',
            link: 'https://twitter.com/team5009',
            icon: AiFillTwitterSquare
        },
        {
            name: 'YouTube',
            link: 'https://www.youtube.com/@team5009',
            icon: AiFillYoutube
        }
    ]
    return (
        <div className="h-screen w-screen flex flex-col items-center justify-center">
            <div>
                <label className="block text-sm font-medium leading-6 text-gray-800 dark:text-white">{
                    langStore.language == Language.FR ? 
                    `Couriel de l'équipe`: 'Team Email'
                }</label>
                <a href="mailto:team5009@centrenord.ab.ca" className="block rounded-sm border-0 py-1.5 px-2.5 ring-1">team5009@centrenord.ab.ca</a>
            </div>
            <div className="flex gap-5">
                {
                    socials.map(social => {
                        let text
                        let svgColor
                        if (social.name === 'Instagram') {
                            text = 'bg-gradient-to-r from-pink-500 to-yellow-500'
                            svgColor = 'text-pink-500'
                        }
                        if (social.name === 'Twitter') {
                            text = 'bg-gradient-to-r from-blue-400 to-blue-600'
                            svgColor = 'text-blue-400'
                        }
                        if (social.name === 'YouTube') {
                            text = 'bg-gradient-to-r from-red-500 to-red-600'
                            svgColor = 'text-red-500'
                        }

                        return (
                            <Link target='_blank' href={social.link} className='transition-all flex my-5 items-center hover:scale-110 focus:scale-105'>
                                <div className={`p-2 aspect-square flex items-center justify-center shadow-lg rounded-md`}>
                                    <social.icon className={`text-2xl font-extrabold ${svgColor}`}/>
                                </div>
                                {/* <span className={`ml-5  tracking-wide font-extrabold text-transparent text-xl bg-clip-text ${text}`}>
                                    {social.name}
                                </span> */}
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}