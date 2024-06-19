
import React, { createContext, useState, useEffect } from 'react'

import langList from '../data/langList'


export interface ILangContext {
    lang?: (newTheme: string) => void,
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
        langList.forEach(c => {
            if(lang === c.value) {
                //setHomeImage(c.home_image)
            }
        })
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
