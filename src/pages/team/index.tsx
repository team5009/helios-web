import { Swiper, SwiperSlide } from 'swiper/react'

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from 'swiper';

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
        }
    ]

    return (
       <>   
            <div className='pt-24'/>
            <Swiper
            effect='coverflow'
            grabCursor={true}
            centeredSlides={true}
            slidesPerView='auto'
            coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className=''
            >
                {
                    HeliosTeam.map((team, index) => {
                        const year = team.year.toString()

                        // const image = team.year < 2014 || team.year == 2021 ? 
                        // `bg-full-helios`
                        // : 
                        // `bg-year-${year}`

                        let image = 'bg-full-helios'
                        if (team.year == 2014) {
                            image = 'bg-year-2014'
                        } else if (team.year == 2015) {
                            image = 'bg-year-2015'
                        } else if (team.year == 2016) {
                            image = 'bg-year-2016'
                        } else if (team.year == 2017) {
                            image = 'bg-year-2017'
                        } else if (team.year == 2018) {
                            image = 'bg-year-2018'
                        } else if (team.year == 2019) {
                            image = 'bg-year-2019'
                        } else if (team.year == 2020) {
                            image = 'bg-year-2020'
                        } else if (team.year == 2022) {
                            image = 'bg-year-2022'
                        } else if (team.year == 2023) {
                            image = 'bg-year-2023'
                        } else if (team.year == 2024) {
                            image = 'bg-year-2024'
                        } else if (team.year == 2025) {
                            image = 'bg-year-2025'
                        } else if (team.year == 2026) {
                            image = 'bg-year-2026'
                        } else if (team.year == 2027) {
                            image = 'bg-year-2027'
                        } else if (team.year == 2028) {
                            image = 'bg-year-2028'
                        } else if (team.year == 2029) {
                            image = 'bg-year-2029'
                        } else if (team.year == 2030) {
                            image = 'bg-year-2030'
                        } else if (team.year == 2031) {
                            image = 'bg-year-2031'
                        } else if (team.year == 2032) {
                            image = 'bg-year-2032'
                        } else if (team.year == 2033) {
                            image = 'bg-year-2033'
                        } else if (team.year == 2034) {
                            image = 'bg-year-2034'
                        } else if (team.year == 2035) {
                            image = 'bg-year-2035'
                        }
                            

                        const teamName = 'text-3xl font-bold bg-clip-text text-transparent drop-shadow-2xl'

                        
                        return (
                            <SwiperSlide key={index} className='w-[400px] h-[500px]'>
                                <div className="relative bg-gray-400 h-[500px] w-[400px] m-[0_auto] rounded-md">
                                    <div className={image + " aspect-video w-full bg-cover bg-center flex flex-col items-center justify-center"}>
                                        <span className='drop-shadow-2xl'>Team 5009:</span>
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
                                    <div className="relative w-full flex flex-col items-center">
                                        <span>{team.year - 1}-{team.year}</span>
                                    </div>
                                    <div className="flex gap-2 flex-wrap p-[3px] box-border">
                                        {
                                            team.awards?.map((award, index) => {
                                                return (
                                                    <span key={index} className="px-2 py-1 bg-blue-400 rounded-md text-sm">{award.name}</span>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
            <div className='pt-24'/>
       </>
    )
}