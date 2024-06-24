import { useContext } from "react";
import langList from "../../data/langList";
import { LangContext } from "../../contexts/LangContext";

function LangButton() {
    const { lang, updateLang } = useContext(LangContext)

    const isDark = false;

    return (
        <div className={`lang-button ${isDark ? 'lang-button_dark' : ''}`}>
            <div className='lang-button__wrapper'>
                <span className='lang-button__current-value'>{lang}</span>
                <ul className='lang-button__list'>
                    <li className='lang-button__list-item' onClick={() => { updateLang!(langList.ru.value) }}>{langList.ru.value}</li>
                    <li className='lang-button__list-item' onClick={() => { updateLang!(langList.en.value) }}>{langList.en.value}</li>
                </ul>
            </div>
        </div>
    )
}

LangButton.propTypes = {}

export default LangButton