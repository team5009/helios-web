import { Swiper, SwiperSlide } from 'swiper/react'

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { Navigation, Pagination } from 'swiper';
import { useSelector } from 'react-redux';
import { Language } from '@/utils/enum';

import TeamJson from '../../utils/extra/team.json'

export interface Team {
    name: string
    year: number
    awards?: Award[]
}

export interface Award {
    id: 'inspire' | 'think' | 'connect' | 'innovate' | 'design' | 'motivate' | 'control' | 'championship' | 'judge', 
    name: string
    position?: string
    place?: string
}

export default function Team() {
    const langStore = useSelector((state: any) => state.language)
    const time = new Date()

    const startTime = new Date('2011-09-01T00:00:00.000Z')
    time.setMonth(8)
    const currentSeasonYear = startTime.getFullYear() + (time.getFullYear() - startTime.getFullYear())

    const englishText = () => (
        <>
        Team Helios 5009 is a francophone robotics club established at the <a href="https://ml.centrenord.ab.ca/" target='_blank' className="text-yellow-500 hover:bg-yellow-300 hover:bg-opacity-5 hover:p-0.5 rounded-md">Maurice-Lavallée</a> School in Edmonton, Alberta.
        Since 2011, we have participated in the FIRST Tech Challenge competition, with great success, after a group of former FLL members outgrew the program and decided to form team Helios.
        As one of Alberta's veteran, yet still very active, teams, we have qualified for several provincial championships as well as for the <a href="https://www.firstinspires.org/" target='_blank' className='text-blue-600'>FIRST</a> World Championship 9 times in a row, allowing us to travel to both St. Louis, Missouri and Houston, Texas, to compete with teams from all over the world! 
        Since its creation, our team has been comprised of many talented, bright students from varied backgrounds, as well as an exceptional group of helpful mentors, <a href="https://www.firstinspires.org/" target='_blank' className='text-blue-600'>FIRST</a> alumni, teachers, and parents. 
        This program has benefited our members in acquiring skills not only in the field of robotics, such as manufacturing and programming, but also in leadership, cooperation, problem-solving, and creativity.
        </>
    )

    const frenchText = () => (
        <>
        L'équipe Hélios 5009 est un club de robotique francophone fondé à l'école <a href="https://ml.centrenord.ab.ca/" target='_blank' className="text-yellow-500 hover:bg-yellow-300 hover:bg-opacity-5 hover:p-0.5 rounded-md">Maurice-Lavallée</a> à Edmonton, en Alberta.
        Depuis 2011, nous participons avec grand succès à la compétition FIRST Tech Challenge, après qu'un groupe d'anciens membres de la FLL a dépassé le programme et a donc décidé de former l'équipe Hélios.
        En tant qu'une des équipes vétérans de l'Alberta, bien que toujours très active, nous nous sommes qualifiés à plusieurs reprises pour les championnats provinciaux ainsi que pour le championnat du monde <a href="https://www.firstinspires.org/" target='_blank' className='text-blue-600'>FIRST</a>. 
        Cela nous a permis de voyager à St. Louis, au Missouri, et à Houston, au Texas, pour participer avec des équipes du monde entier! 
        Depuis sa création, notre équipe a été composée de nombreux étudiants talentueux et brillants de diverses origines, ainsi que d'un groupe exceptionnel de mentors, d'anciens participants de <a href="https://www.firstinspires.org/" target='_blank' className='text-blue-600'>FIRST</a>, d'enseignants et de parents. 
        Ce programme a permis à nos membres d'acquérir des compétences non seulement dans le domaine de la robotique, telles que la fabrication et la programmation, mais aussi dans le leadership, la coopération, la résolution de problèmes et la créativité.
        </>
    )

    return (
       <>   
            {/* <div className='mt-10'/> */}
            <div className='relative top-28 w-screen flex flex-col justify-center items-center'>
                <h1 className='text-lg font-bold'>{}</h1>
                <div className='aspect-video h-[40vw] bg-no-repeat bg-cover rounded-xl shadow-2xl' style={{
                    backgroundImage: `url(/images/years/${currentSeasonYear}.png)`,
                }}/>
                <h2 className='mt-10 mx-10 md:mx-20 lg:mx-48 text-2xl font-bold'>
                    { langStore.language == Language.FR ?
                    `A propos l'équipe!` : 'About the team!'}
                </h2>
                <div className='box-border w-screen z-10 top-48 '>
                    <p className='px-10 md:px-20 lg:px-48'>
                        { langStore.language == Language.FR ? 
                        frenchText() : englishText()}
                    </p>
                    <br/>
                </div>
            </div>
            <section className='relative top-0 m-0'>
                <div className=' m-0 z-10'>
                    <div className='h-10'/>
                    <div className='h-10'/>

                </div>

            </section>
            <div className='p-16'/>
            <div className='flex items-center justify-center'>
                <Swiper
                grabCursor={true}
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                slidesPerView={1}
                pagination={
                    {
                        clickable: true,
                    }
                }
                
                navigation={true}
                modules={[Navigation, Pagination]}
                className=''
                >
                    {
                        TeamJson.map((team, index) => {
                            // const year = team.year.toString()
                            let imageBg = `/images/years/${team.year}.png`
                            {
                                if (team.year == 2013 || team.year == 2021 || team.year == 2012) {
                                    imageBg = '/images/fullscreen-helios.png'
                                }
                            }
                                
                            const teamName = 'text-2xl md:text-3xl lg:text-4xl font-bold bg-clip-text text-transparent drop-shadow-2xl'

                            return (
                                <SwiperSlide key={index} className='w-[400px] h-[500px]'>
                                    <div className="flex md:flex-row flex-col md:mx-24 mx-5 gap-5">
                                        <div className={" aspect-video lg:h-64 md:h-56 min-w-[290px] h-40 bg-cover bg-center flex flex-col items-center justify-end rounded-xl"} style={{background: `url('${imageBg}') center center`, backgroundSize: 'cover'}}>
                                            <div className='px-5 py-2 backdrop-blur-sm rounded-lg font-semibold mb-5'>
                                                {team.year - 1} - {team.year} 
                                            </div>
                                        </div>
                                        <div className='flex flex-col gap-3'>
                                            <div>
                                                <span className='drop-shadow-2xl lg:text-2xl md:text-md'>Team 5009:</span>
                                                {
                                                    team.name == 'Les Coureur des Bois' ?
                                                    <h3 className={teamName + " bg-gradient-to-r from-amber-800 to-amber-600"}>{team.name}</h3>
                                                    : team.name == 'Les Touristes' ?
                                                    <h3 className={teamName + " bg-gradient-to-r from-gray-400 to-gray-500"}>{team.name}</h3>
                                                    : team.name == 'Net Zero' ?
                                                    <h3 className={teamName + " bg-gradient-to-r from-green-600 to-green-400"}>{team.name}</h3>
                                                    : <h3 className={teamName + " bg-gradient-to-r from-red-600 to-orange-400"}>{team.name}</h3>
                                                }
                                            </div>
                                            <div className='flex gap-2 flex-wrap'>
                                            {
                                                    team.awards?.map((award, index) => {
                                                        let awardBg
                                                        const awardText: String[] = []
                                                        {
                                                            if (award.id == 'championship') {
                                                                awardBg = 'bg-amber-500'
                                                            } else if (award.id == 'inspire') {
                                                                awardBg = 'bg-orange-500'
                                                            } else if (award.id == 'motivate') {
                                                                awardBg = 'bg-green-500'
                                                            } else if (award.id == 'control') {
                                                                awardBg = 'bg-blue-500'
                                                            } else if (award.id == 'judge') {
                                                                awardBg = 'bg-red-500'
                                                            } else if (award.id == 'design') {
                                                                awardBg = 'bg-yellow-500'
                                                            } else if (award.id == 'innovate') {
                                                                awardBg = 'bg-purple-500'
                                                            } else if (award.id == 'connect') {
                                                                awardBg = 'bg-gray-500'
                                                            }
                                                        }
                                                        
                                                        awardText.push(award.name)
                                                        
                                                        if (award.position != undefined) {
                                                            awardText.push(`- ${award.position}`)
                                                        }
                                                        if (award.place != undefined) {
                                                            awardText.push(`[${award.place}]`)
                                                        }

                                                    
                                                        return (
                                                            <span key={index} className={awardBg + " px-2 py-1  rounded-md text-2xs md:text-xs flex"}>{awardText.join(' ')}</span>
                                                        )

                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>

                                    <div className='grid grid-rows-3 grid-flow-col gap-4'>
                                        <div className='row-span-3'>
                                        </div>
                                        <div className='col-span-2'>
                                            
                                        </div>
                                        <div className='row-span-2 gap-5'>
                                            <div className={"w-full h-full flex flex-wrap"}>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
            <div className='p-14'/>
            
       </>
    )
}