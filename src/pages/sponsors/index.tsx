import Link from "next/link"

export default () => {
    const sponsors = [
        {
            name: "École Maurice-Lavallée",
            image: "/images/logos/Logo_ML_petit.png",
            link: "https://ml.centrenord.ab.ca/",
        },
        {
            name: "Conseil scolaire Centre-Nord",
            image: "/images/logos/Conseil_scolaire_Centre-Nord_Logo.svg",
            link: "https://centrenord.ab.ca/",
        },
        {
            name: "Vagabond Robotics",
            image: "/images/logos/vagabond_robotics.svg",
            link: "https://instagram.com/vagabond_robotics?igshid=MGU3ZTQzNzY=",
        },
        {
            name: "Exegen",
            image: "/images/logos/exegen_logo.svg",
            link: ""
        }
    ]
    return (
        <>
        <div className="h-12 md:hidden"/>
        <div className="h-screen w-screen flex flex-col justify-center items-center m-0">
            <h1 className="font-bold text-lg md:text-2xl mb-5 mt-10">Thanks to all our sponsors & supporters!</h1>
            <div className="flex gap-10 flex-col md:flex-row items-center justify-center flex-wrap w-full box-border px-20">
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
        <div className="h-24 w-full md:hidden"/>
        </>
    )
}