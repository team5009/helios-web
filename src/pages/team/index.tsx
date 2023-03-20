import { Swiper, SwiperSlide } from 'swiper/react'

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { Navigation, Pagination } from 'swiper';

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
    const time = new Date()
    const manseauTime = new Date('2014-09-01T00:00:00.000Z')
    const steveTime = new Date('2012-09-01T00:00:00.000Z')
    const stephaneTime = new Date('2019-09-01T00:00:00.000Z')

    const startTime = new Date('2011-09-01T00:00:00.000Z')
    time.setMonth(8)
    const currentSeasonYear = startTime.getFullYear() + (time.getFullYear() - startTime.getFullYear())

    const HeliosTeam: Team[] = [
        {
            name: 'Les Coureur des Bois',
            year: 2012,
            awards: [
                {
                    id: 'inspire',
                    name: 'Inspire Award Winner',
                },
                {
                    id: 'championship',
                    name: 'Championship Winning Alliance',
                }
            ]
        },
        {
            name: 'Les Touristes',
            year: 2013,
            awards: [
                {
                    id: 'inspire',
                    name: 'Inspire Award',
                    position: '2nd',
                },
                {
                    id: 'design',
                    name: 'PTC Design Award',
                    position: '1st',
                },
                {
                    id: 'championship',
                    name: 'Championship Winning Alliance',
                }
            ]
        },
        {
            name: 'Net Zero',
            year: 2014,
            awards: [
                {
                    id: 'inspire',
                    name: 'Inspire Award Winner',
                },
                {
                    id: 'championship',
                    name: 'Championship Finalist Alliance',
                }
            ]
        },
        {
            name: 'Helios',
            year: 2015,
            awards: [
                {
                    id: 'inspire',
                    name: 'Inspire Award Winner',
                },
                {
                    id: 'championship',
                    name: 'Championship Winning Alliance',
                }
            ]
        },
        {
            name: 'Helios',
            year: 2016,
            awards: [
                {
                    id: 'inspire',
                    name: 'Inspire Award Winner',
                },
                {
                    id: 'championship',
                    name: 'Championship Finalist Alliance',
                }
            ]
        },
        {
            name: 'Helios',
            year: 2017,
            awards: [
                {
                    id: 'inspire',
                    name: 'Inspire Award',
                    position: '2nd',
                },
                {
                    id: 'innovate',
                    name: 'Rockwell Collins Innovate Award',
                    position: '1st',
                },
                {
                    id: 'inspire',
                    name: 'Inspire Award',
                    position: '3rd',
                    place: 'BC Championship'
                },
                {
                    id: 'design',
                    name: 'PTC Design Award',
                    position: '1st',
                    place: 'BC Championship'
                },
                {
                    id: 'championship',
                    name: 'Championship Finalist Alliance',
                    place: 'BC Championship'
                }
            ]
        },
        {
            name: 'Helios',
            year: 2018,
            awards: [
                {
                    id: 'inspire',
                    name: 'Inspire Award Winner',
                },
                {
                    id: 'control',
                    name: 'Control Award',
                    position: '1st',
                },
                {
                    id: 'championship',
                    name: 'Championship Winning Alliance',
                },
                {
                    id: 'judge',
                    name: 'Judges Award',
                    place: 'World Championship'
                }
            ]
        },
        {
            name: 'Helios',
            year: 2019,
            awards: [
                {
                    id: "championship",
                    name: "Highest Ranked Team",
                    place: "Second Round Edmonton"
                },
                {
                    id: 'inspire',
                    name: 'Inspire Award Winner',
                },
                {
                    id: 'championship',
                    name: 'Championship Winning Alliance',
                },
                {
                    id: 'championship',
                    name: 'Ranked 6th - Jemison Division',
                    place: 'World Championship'
                },
            ]
        },
        {
            name: 'Helios',
            year: 2020,
            awards: [
                {
                    id: 'championship',
                    name: 'Highest Ranked Team',
                    place: 'First Round Edmonton'
                },
                {
                    id: 'championship',
                    name: 'Highest Ranked Team',
                    place: 'Northern Alberta League'
                },
                {
                    id: 'motivate',
                    name: 'Motivate Award',
                    position: '1st',
                },
                {
                    id: 'control',
                    name: 'Control Award',
                    position: '1st',
                },
                {
                    id: 'inspire',
                    name: 'Inspire Award',
                    position: '3rd',
                },
            ]
        },
        {
            name: 'Helios (COVID Edition)',
            year: 2021,
            awards: [
                {
                    id: 'inspire',
                    name: 'Inspire Award Winner',
                    place: 'Remote'
                },
                {
                    id: 'championship',
                    name: 'Top Ranked Team',
                    position: '4th',
                    place: 'Remote'
                },
                {
                    id: 'connect',
                    name: 'Connect Award',
                    position: '2nd',
                    place: 'Remote'
                },
                {
                    id: 'innovate',
                    name: 'Collins Aerospace Innovate Award',
                    position: '3rd',
                    place: 'Remote'
                },
                {
                    id: 'control',
                    name: 'Control Award',
                    position: '1st',
                    place: 'Remote'
                },
                {
                    id: 'motivate',
                    name: 'Motivate Award',
                    position: '3rd',
                    place: 'Remote'
                },
                {
                    id: 'design',
                    name: 'Design Award',
                    position: '3rd',
                    place: 'Remote'
                }
            ]
        },
        {
            name: 'Helios (COVID Edition)',
            year: 2022,
            awards: [
                {
                    id: 'connect',
                    name: 'Compass Award',
                    place: 'Remote'
                }
            ]
        },
        {
            name: 'Helios',
            year: 2023,
            awards: [
                {
                    id: 'control',
                    name: 'Control Award',
                    position: '2nd',
                },
                {
                    id: 'design',
                    name: 'Design Award',
                    position: '1st',
                },
                {
                    id: 'innovate',
                    name: 'Innovate Award',
                    position: '1st',
                },
                {
                    id: 'championship',
                    name: 'Championship Finalist Alliance',
                    position: 'Captain'
                },
                
            ]
        }
    ]

    console.log(currentSeasonYear)

    return (
       <>   
            {/* <div className='mt-10'/> */}
            <div className='h-screen w-screen flex flex-col justify-center items-center'>
                <h1 className='text-lg font-bold'>Our Current Team</h1>
                <div className='aspect-video h-56 md:h-80 lg:h-96 bg-no-repeat bg-cover rounded-xl shadow-2xl' style={{
                    backgroundImage: `url(/images/years/${currentSeasonYear}.png)`,
                }}/>
            </div>
            <section className='relative top-0 m-0'>
                <div className=' m-0 z-10 bg-orange-400'>
                    <div className='h-10'/>
                    <h2 className='mx-10 md:mx-20 lg:mx-48 text-2xl'>
                        About Helios!
                    </h2>
                    <div className='box-border w-screen z-10 top-48 '>
                        <p className='px-10 md:px-20 lg:px-48'>
                        FTC Team Helios 5009 started {time.getFullYear() - startTime.getFullYear()} years ago, in 2011, when a group of former FLL members outgrew the program. 
                        When these members graduated from middle school, they decided to start a <a href="https://www.firstinspires.org/" target='_blank' className='text-blue-600'>FIRST</a> Tech Challenge team at their new High School.
                        The team started as an elective class held during school hours and grew into an after-school club available to all students. 
                        The team has qualified for the world tournament each year since 2011, making it there a total of nine times, and has taken home the Inspire Award six times at the Canadian/Alberta Championship.
                        Having said that, the group has had the chance to visit Houston, Texas, as well as St. Louis, Missouri, for the <a href="https://www.firstinspires.org/" target='_blank' className='text-blue-600'>FIRST</a> World Championship.
                        </p>
                        <br/>
                    </div>
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
                        HeliosTeam.map((team, index) => {
                            // const year = team.year.toString()
                            let imageBg = `/images/years/${team.year}.png`
                            {
                                if (team.year == 2013 || team.year == 2021 || team.year == 2012) {
                                    imageBg = '/images/fullscreen-helios.png'
                                    console.log(team.year)
                                }
                            }
                                
                            const teamName = 'text-2xl md:text-3xl lg:text-4xl font-bold bg-clip-text text-transparent drop-shadow-2xl'

                            return (
                                <SwiperSlide key={index} className='w-[400px] h-[500px]'>
                                    <div className="flex md:flex-row flex-col mx-24 gap-5">
                                        <div className={" aspect-video lg:h-64 md:h-56 h-40 bg-cover bg-center flex flex-col items-center justify-end rounded-xl"} style={{background: `url('${imageBg}') center center`, backgroundSize: 'cover'}}>
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