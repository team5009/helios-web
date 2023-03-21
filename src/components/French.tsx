import { changeLang } from "@/utils"
import { Language } from "@/utils/enum"
import { useDispatch, useSelector } from "react-redux"

export default () => {
    const distpatch = useDispatch()
    const langStore = useSelector((state: any) => state.language)

    const onClickEvent = () => {
        console.log(langStore.lang)
        if (langStore.language == Language.FR) {
            distpatch(changeLang(Language.EN))
        } else if (langStore.language == Language.EN) {
            distpatch(changeLang(Language.FR))
        }
        console.log(langStore.language)
    }

    return (
        <button 
            onClick={onClickEvent}
            className="transition-all duration-200 p-2 hover:bg-orange-400 focus:bg-orange-500 hover:font-semibold rounded-md shadow-md dark:text-white w-full"
        >
            {
                langStore.language == Language.FR ? 'EN' : 'FR'
            }
        </button>
    )
}