import { useContext } from "react"
import { LangContext } from "../../contexts/LangContext"
import langList from "../../data/langList"
import { ITag, ITagLang } from "../../data/tagsList"

export interface IDefineLangText {
    ru: string | React.ReactNode,
    en: string | React.ReactNode
}

export interface IDefineTagLangText {
    ru: ITag,
    en: ITag
}

export default function defineLangText(text: IDefineLangText) {
    const { lang } = useContext(LangContext)
    let result: string | React.ReactNode = ""

    if(lang === langList.ru.value) {
        result = text.ru
    } else {
        result = text.en
    }

    return result
}


export function defineTagLangText(tag: ITag) {
    const { lang } = useContext(LangContext)
    let result: ITagLang = tag.ru

    if(lang === langList.ru.value) {
        result = tag.ru
    } else {
        result = tag.en
    }

    return result
}
