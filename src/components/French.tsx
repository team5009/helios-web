import { changeLang } from "@/utils"
import { Language } from "@/utils/enum"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

export default () => {
    const distpatch = useDispatch()
    const langStore = useSelector((state: any) => state.language)

    useEffect(() => {
        if (localStorage.getItem('language') == Language.FR) {
            distpatch(changeLang(Language.FR))
        } else if (localStorage.getItem('language') == Language.EN) {
            distpatch(changeLang(Language.EN))
        }
    }, [])

    const onClickEvent = () => {
        if (langStore.language == Language.FR) {
            distpatch(changeLang(Language.EN))
            localStorage.setItem('language', Language.EN)
        } else if (langStore.language == Language.EN) {
            distpatch(changeLang(Language.FR))
            localStorage.setItem('language', Language.FR)
        }
    }

    return (
        <button 
            onClick={onClickEvent}
            className="transition-all w-10 h-10 duration-200 hover:bg-orange-400 hover:font-semibold rounded-md shadow-md dark:text-white"
        >
            {
                langStore.language == Language.FR ? 'FR' : 'EN'
            }
        </button>
    )
}