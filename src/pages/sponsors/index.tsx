import { Language } from "@/utils/enum"
import Link from "next/link"
import { useSelector } from "react-redux"

export default () => {
    const langStore = useSelector((state: any) => state.language)
    const sponsors = [
        {
            name: "Fast Gas",
            image: "/images/logos/fast-gas.png",
            link: "https://ml.centrenord.ab.ca/",
        },
        {
            name: "Graham",
            image: "/images/logos/Graham_Full_Colour.png",
            link: ""
        }, 
        {
            name: "Exegen",
            image: "/images/logos/exegen_logo.svg",
            link: ""
        }, 
        {
            name: "Vagabond Robotics",
            image: "/images/logos/vagabond_robotics.svg",
            link: "https://instagram.com/vagabond_robotics?igshid=MGU3ZTQzNzY=",
        },
        {
            name: "École Maurice-Lavallée",
            image: "/images/logos/Logo_ML_petit.png",
            link: "https://ml.centrenord.ab.ca/",
        },
    ]
    return (
        <>
        <div className="h-12"/>
        <div className="h-screen w-screen flex flex-col justify-center items-center m-0">
            <h1 className="font-bold text-lg md:text-2xl mb-5 mt-10">{langStore.language === Language.FR ? 'Merci à tous nos sponsors et supporters!' : 'Thanks to all our sponsors & supporters!'}</h1>
            <div className="flex gap-10 flex-col md:flex-row items-center justify-center flex-wrap w-full box-border px-96">
                {
                    sponsors.map((sponsor, index) => {
                        return (
                            <Link href={sponsor.link} key={index} target="_blank">
                                <img src={sponsor.image} />
                            </Link>
                        )
                    })
                }
            </div>
        </div>
        <div className="h-24 w-full"/>
        </>
    )
}