
import React, { createContext, useState, useEffect } from 'react'

import langList from '../data/langList'


export interface ILangContext {
    lang?: string,
    updateLang?: (newTheme: string) => void,
}


const STORAGE_KEY = 'lang'

export const LangContext = createContext<ILangContext>({})

function LangProvider({ children }: { children: React.ReactNode }) {
    const [lang, setLang] = useState<string>('RU')

    useEffect(() => {
        const currentLang = localStorage.getItem(STORAGE_KEY)

        if(!currentLang) {
            localStorage.setItem(STORAGE_KEY, 'RU')
        } else {
            setLang(currentLang)
        }
    }, [])

    useEffect(() => {
        document.documentElement.setAttribute('lang', lang);
        if(lang === langList.ru.value) {
            //setHomeImage(c.home_image)
        }
        else {

        }
    }, [lang])

    const updateLang = (newLang: string) => {
        setLang(newLang)
        localStorage.setItem(STORAGE_KEY, newLang)
    }

    return (
        <LangContext.Provider value={{lang, updateLang}}>
            { children }
        </LangContext.Provider>
    )
}

export default LangProvider
