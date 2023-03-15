import {AiFillYoutube, AiFillTwitterSquare, AiFillInstagram, AiFillGithub, AiFillMail} from 'react-icons/ai'
import Helioslogo from './Helioslogo'
import Link from 'next/link'

export default () => {

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
            name: 'Youtube',
            link: 'https://www.youtube.com/@team5009',
            icon: AiFillYoutube
        },
        {
            name: 'Github',
            link: 'https://github.com/team5009',
            icon: AiFillGithub
        },
        {
            name: 'Email',
            link: 'mailto:team5009@centrenord.ab.ca',
            icon: AiFillMail
        }
    ]

    const waveClass = "absolute -top-24 left-0 w-full h-24 bg-[url('/images/general/wave.png')] bg-[length:1000px_100px]"
    return (
        <footer className="relative mt-10">
            <div className="">
                <div className={`${waveClass} opacity-100 bottom-0 z-50 animate-[animateWave_7s_linear_infinite]`}></div>
                <div className={`${waveClass} opacity-50 bottom-1 z-40 animate-[animateWave2_10s_linear_infinite]`}></div>
                <div className={`${waveClass} opacity-20 bottom-2 z-50 animate-[animateWave_13s_linear_infinite]`}></div>
                <div className={`${waveClass} opacity-70 bottom-3 z-40 animate-[animateWave2_16s_linear_infinite]`}></div>
            </div>
            <div className='flex flex-col items-center justify-center w-screen h-32 bg-orange-600'>
                <ul className="relative flex gap-5 z-10 mt-5">
                    {socials.map((social, index) => {
                        return (
                            <li key={social.name} className='transition-all shadow-white hover:drop-shadow-xl hover:-translate-y-1 focus:-translate-y-0.5'>
                                <a href={social.link} target='_blank' className='relative text-white text-3xl '>
                                    <social.icon className=""/>
                                </a>
                            </li>
                        )
                    })}
                </ul>
                {/* <div className="m-auto">
                    <h5 className="font-bold text-white text-l">Find Us</h5>
                    <div className="flex gap-5">
                        <div>
                            <h6>Location</h6>
                            <address>8828 95 St,<br/> Edmonton, AB</address>
                        </div>
                        <div>
                            <h6>Team Meeting</h6>
                            <time>
                                Mondays: 3:30pm - 5:30pm
                            </time>
                            <br/> 
                            <time>
                                Saturdays: 9:00am - 3:00pm
                            </time>
                        </div>

                    </div>
                </div> */}
                <div className="relative z-10 m-auto mb-0 flex items-center justify-center gap-2">
                    <Link href='/'>
                        <Helioslogo color='#fff' height='40' width='30'/>
                    </Link>
                    <span className="text-white text-xs">{new Date().getFullYear()} FTC, Team 5009</span>
                </div>
                <div className='bg-gray-800 pt-5'></div>
            </div>
        </footer>
    )
}