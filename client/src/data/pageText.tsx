import React, { useContext } from "react"
import FeatureLink from "../components/about/FeatureLink"
import { LangContext } from "../contexts/LangContext"
import langList from "./langList"

export const commonText = {
    websiteTitle: "NVRVIKIN"
}

export const mainText = {
    pageTitle: {
        ru: "Главная",
        en: "Home"
    }
}


export const aboutText = {
    pageTitle: {
        ru: "Обо мне",
        en: "About me"
    },
    title: {
        ru: "Нарайкин Владислав",
        en: "Vladislav Naraikin"
    },
    position: {
        ru: "Junior Frontend-разработчик",
        en: "Junior Frontend Developer"
    },
    description: {
        ru: <>
            <ul>
                <li># Знаком с <FeatureLink link="https://vuejs.org">Vue.js</FeatureLink>. В основном работаю с <FeatureLink link="https://react.dev">React</FeatureLink></li>
                <li># Совместно с <FeatureLink link="https://react.dev">React</FeatureLink> использую следующие фреймворки: <FeatureLink link="https://nextjs.org">Next.js</FeatureLink>, <FeatureLink link="https://redux.js.org">Redux</FeatureLink>.</li>
                <li># Использую в работе <FeatureLink link="https://www.typescriptlang.org">TypeScript</FeatureLink> и <FeatureLink link="https://ecma-international.org/publications-and-standards/standards/ecma-262/">JavaScript</FeatureLink></li>
                <li># В вёрстке использую <FeatureLink link="https://html.spec.whatwg.org/multipage/">HTML</FeatureLink>, <FeatureLink link="https://www.w3.org/Style/CSS/">CSS</FeatureLink>, чаще <FeatureLink link="https://sass-lang.com">SASS(SCSS)</FeatureLink></li>
                <li># Владею <FeatureLink link="https://www.adobe.com/ru/products/photoshop.html">Adobe Photoshop</FeatureLink>, <FeatureLink link="https://www.adobe.com/products/illustrator.html">Adobe Illustrator</FeatureLink>, <FeatureLink link="https://www.adobe.com/products/aftereffects.html">Adobe After Effects</FeatureLink> и <FeatureLink link="https://www.adobe.com/products/premiere.html"> Adobe Premiere Pro</FeatureLink>, знаком с <FeatureLink link="https://www.figma.com">Figma</FeatureLink></li>
                <li># При работе с базами данных использовал <FeatureLink link="https://www.mongodb.com">MongoDB</FeatureLink>, <FeatureLink link="https://firebase.google.com/products/realtime-database">Firebase Realtime Database</FeatureLink> и <FeatureLink link="https://www.postgresql.org">PostgreSQL</FeatureLink></li>
                <li># Имею опыт работы с веб-фреймворками <FeatureLink link="https://nodejs.org">NodeJS</FeatureLink>(<FeatureLink link="https://expressjs.com/ru/">express</FeatureLink>) и <FeatureLink link="https://www.djangoproject.com">Django</FeatureLink>. Могу создать сервер со следующим базовым функционалом: маршрутизация, <FeatureLink link="https://restfulapi.io">REST API</FeatureLink>, простая БД, взаимодействие с <FeatureLink link="https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies">cookies</FeatureLink></li>
                <li># Применял в работе сервисы храниения данных Amazon(<FeatureLink link="https://docs.amazonaws.cn/en_us/AmazonS3/latest/userguide/Welcome.html">AWS S3</FeatureLink>) и <FeatureLink link="https://firebase.google.com/products/storage">Firebase Storage</FeatureLink></li>
                <li># Работаю с <FeatureLink link="https://git-scm.com">Git</FeatureLink> и <FeatureLink link="https://www.docker.com">Docker</FeatureLink></li>
                <li># Читаю документацию на английском</li>
                <li># Знаком с основами <FeatureLink link="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_programming">ООП</FeatureLink>, паттернами проектирования и такими языками программирования как: <FeatureLink link="https://www.java.com">Java</FeatureLink>, <FeatureLink link="https://www.python.org">Python</FeatureLink> и <FeatureLink link="https://dotnet.microsoft.com/en-us/languages/csharp">C#</FeatureLink></li>
            </ul>
        </>,
        en: <>
            <ul>
                <li># Familiar with <FeatureLink link="https://vuejs.org">Vue.js</FeatureLink>. I'm working with <FeatureLink link="https://react.dev">React</FeatureLink>, mostly.</li>
                <li># Combining <FeatureLink link="https://react.dev">React</FeatureLink> with the following frameworks: <FeatureLink link="https://nextjs.org">Next.js</FeatureLink> and <FeatureLink link="https://redux.js.org">Redux</FeatureLink>.</li>
                <li># Using <FeatureLink link="https://www.typescriptlang.org">TypeScript</FeatureLink> and <FeatureLink link="https://ecma-international.org/publications-and-standards/standards/ecma-262/">JavaScript</FeatureLink> at work</li>
                <li># Implementing a website layout, I use <FeatureLink link="https://html.spec.whatwg.org/multipage/">HTML</FeatureLink>, <FeatureLink link="https://www.w3.org/Style/CSS/">CSS</FeatureLink>, more often <FeatureLink link="https://sass-lang.com">SASS(SCSS)</FeatureLink></li>
                <li># I am skilled in <FeatureLink link="https://www.adobe.com/ru/products/photoshop.html">Adobe Photoshop</FeatureLink>, <FeatureLink link="https://www.adobe.com/products/illustrator.html">Adobe Illustrator</FeatureLink>, <FeatureLink link="https://www.adobe.com/products/aftereffects.html">Adobe After Effects</FeatureLink> and <FeatureLink link="https://www.adobe.com/products/premiere.html"> Adobe Premiere Pro</FeatureLink>, familiar with <FeatureLink link="https://www.figma.com">Figma</FeatureLink></li>
                <li># Working with databases, I have been using <FeatureLink link="https://www.mongodb.com">MongoDB</FeatureLink>, <FeatureLink link="https://firebase.google.com/products/realtime-database">Firebase Realtime Database</FeatureLink> and <FeatureLink link="https://www.postgresql.org">PostgreSQL</FeatureLink></li>
                <li># I'm experienced working with such frameworks as <FeatureLink link="https://nodejs.org">NodeJS</FeatureLink>(<FeatureLink link="https://expressjs.com/ru/">express</FeatureLink>) and <FeatureLink link="https://www.djangoproject.com">Django</FeatureLink>. I can implement a server with the following base functionality: routing, <FeatureLink link="https://restfulapi.io">REST API</FeatureLink>, simple DB, interactions with <FeatureLink link="https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies">cookies</FeatureLink></li>
                <li># I've been working with data storage services of Amazon(<FeatureLink link="https://docs.amazonaws.cn/en_us/AmazonS3/latest/userguide/Welcome.html">AWS S3</FeatureLink>) and <FeatureLink link="https://firebase.google.com/products/storage">Firebase Storage</FeatureLink></li>
                <li># I work with <FeatureLink link="https://git-scm.com">Git</FeatureLink> and <FeatureLink link="https://www.docker.com">Docker</FeatureLink></li>
                <li># I can read documentation in English</li>
                <li># Familiar with basics of <FeatureLink link="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_programming">OOP</FeatureLink>, design patterns and such languages as: <FeatureLink link="https://www.java.com">Java</FeatureLink>, <FeatureLink link="https://www.python.org">Python</FeatureLink> and <FeatureLink link="https://dotnet.microsoft.com/en-us/languages/csharp">C#</FeatureLink></li>
            </ul>
        </>
    }
}

export const projectsText = {
    pageTitle: {
        ru: "Проект",
        en: "Projects"
    },
    hint: {
        ru: <>
            <span>В настоящий момент ещё нет доступных выгруженных проектов</span>
            <code>На воскрешение проектов потребуется время</code>
        </>,
        en: <>
            <span>Currently, there are no uploaded projects, yet</span>
            <code>It will take some time to revive the projects</code>
        </>
    }
}

export const navText = {
    mainLink: {
        ru: "Главная",
        en: "Home"
    },
    aboutLink: {
        ru: "Обо мне",
        en: "About"
    },
    projectsLink: {
        ru: "Проекты",
        en: "Projects"
    }
}

interface IDefineLangText {
    ru: string | React.ReactNode,
    en: string | React.ReactNode
}

export function defineLangText(text: IDefineLangText) {
    const { lang } = useContext(LangContext)
    let result: string | React.ReactNode = ""

    if(lang === langList.ru.value) {
        result = text.ru
    } else {
        result = text.en
    }

    return result
}


const pageText = {
    commonText,
    mainText,
    aboutText,
    projectsText,
    navText,
    defineLangText
}

export default pageText