import React, { useEffect, useRef, useState, useContext } from 'react'
import { LangContext } from '../../contexts/LangContext';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import langList from '../../data/langList';

interface ProjectThumpProps {

}

function ProjectThumb() {
    const tagsUlRef = useRef(null);
    const containerRef = useRef(null);
    const titleBoxRef = useRef(null);
    const titleRef = useRef(null);

    const { lang, updateLang } = useContext(LangContext)

    const [title, setTitle] = useState('...');
    const [description, setDescription] = useState('...');
    const [link, setLink] = useState('#');
    const [isExternalLink, setIsExternalLink] = useState(false);
    const [image, setImage] = useState(null);
    const [tags, setTags] = useState([]);

    const [isHidden, setIsHidden] = useState(false);

    const [showImage, setShowImage] = useState(false);
    
    const [showInfo, setShowInfo] = useState(false);
    const [currentInfo, setCurrentInfo] = useState('');

    const [shortTitle, setShortTitle] = useState('...');
    const [currentTitle, setCurrentTitle] = useState('...');

    const [offsetTitle, setOffsetTitle] = useState(0);
    const [isOver, setIsOver] = useState(false);
    const [canMoveTitle, setCanMoveTitle] = useState(false);
    
    const [canForth, setCanForth] = useState(true);
    const [canBack, setCanBack] = useState(true);
    const [offsetTags, setOffsetTags] = useState(0);
    const [ulWidth, setUlWidth] = useState(0);
    const [containerWidth, setContainerWidth] = useState(0);

    const [offsetStep, setOffsetStep] = useState(150);

    function handleMouseEnter () {
        setIsOver(true);
        if(canMoveTitle){
            setOffsetTitle(50);
        }
    }

    function handleMouseLeave () {
        setIsOver(false);
        if(canMoveTitle) {
            setOffsetTitle(0);
        }
    }

    function handleTransitionEnd () {
        if(canMoveTitle) {
            if(isOver){
                setOffsetTitle(offsetTitle + 50);
                console.log('transition ended ' + title)
            }
        }
    }

    function tagsForth() {
        if(canForth){
            if(offsetTags + offsetStep < ulWidth - containerWidth) {
                setOffsetTags(offsetTags + offsetStep);
            } else {
                setOffsetTags(ulWidth - containerWidth);
            }
        }
    }

    function tagsBack() {
        if(offsetTags - offsetStep >= 0) setOffsetTags(offsetTags - offsetStep);
        else setOffsetTags(0);
    }

    function showTags() {

        if(tags) {
            return tags.map((tag, idx) => {
                let tagLang;
                switch(lang) {
                    case langList.ru:
                        tagLang = tag.ru
                        break;
                    case langList.eng:
                        tagLang = tag.eng
                        break;
                    default:
                        tagLang = tag.eng
                        break;
                }
                return (
                    <li key={idx}
                        className='project-thumb__tag'
                        //onMouseEnter={ () => handleTagMouseEnter(tagLang.info) }
                        //onMouseLeave={ handleTagMouseLeave }
                        > {tagLang.value}
                    </li>
                )
            });
        }
    }

    useEffect(() => {

    }, [])

    return (
        <div className={`project-thumb ${ isHidden ? 'project-thumb_hidden' : '' }`}
            onMouseEnter={ handleMouseEnter }
            onMouseLeave={ handleMouseLeave }
            onTransitionEnd={ handleTransitionEnd }>
            <div className='project-thumb__top'>
                <div className={`project-thumb__link-popup ${showImage ? 'project-thumb__link-popup_show' : ''}`} style={{ backgroundImage: `url('${image}')`}} />
                <div className="project-thumb__main-content">
                    <div className="project-thumb__info-wrapper">
                        <div ref={ titleBoxRef } className='project-thumb__title-box'>
                            {
                                !isExternalLink ?
                                (<Link ref={ titleRef }
                                    className="project-thumb__title"
                                    to={link}
                                    style={{ transform: (`translate(-${offsetTitle}px, 0px)`) }} 
                                    onMouseEnter={() => setShowImage(true)}
                                    onMouseLeave={() => setShowImage(false)}>
                                    {currentTitle}
                                </Link>)
                                :
                                (<a ref={ titleRef }
                                    className="project-thumb__title"
                                    href={link}
                                    style={{ transform: (`translate(-${offsetTitle}px, 0px)`) }}
                                    onMouseEnter={() => setShowImage(true)}
                                    onMouseLeave={() => setShowImage(false)}>
                                    {currentTitle}
                                </a>)
                            }
                        </div>
                        <p className="project-thumb__description">{description}</p>
                    </div>
                    
                </div>
                <div className='project-thumb__side' onClick={ () => alert('click')/*showView*/ }>
                    <div className='project-thumb__side-bar' />
                </div>
            </div>
            <div className="project-thumb__tags-wrapper">
                <div onClick={tagsForth} className={'project-thumb__tags-arrow project-thumb__tags-arrow_forth' + (!canForth ? ' project-thumb__tags-arrow_disabled' : '')}>
                   <div className="project-thumb__tags-arrow-bar project-thumb__tags-arrow-bar_first"></div>
                    <div className="project-thumb__tags-arrow-bar project-thumb__tags-arrow-bar_second"></div>
                </div>
                <div onClick={tagsBack} className={'project-thumb__tags-arrow project-thumb__tags-arrow_back' + (!canBack ? ' project-thumb__tags-arrow_disabled' : '')}>
                    <div className="project-thumb__tags-arrow-bar project-thumb__tags-arrow-bar_first"></div>
                    <div className="project-thumb__tags-arrow-bar project-thumb__tags-arrow-bar_second"></div>
                </div>
                <div ref={containerRef} className="project-thumb__tags-container">
                    <ul ref={tagsUlRef} className="project-thumb__tags-list" style={{ transform: (`translate(-${offsetTags}px, 0px)`) }}>
                        {showTags()}
                    </ul>
                </div>
            </div>
            <div className={`project-thumb__tag-info ${showInfo ? 'project-thumb__tag-info_show' : ''}`}>{ currentInfo }</div>
        </div>
    )
}

ProjectThumb.propTypes = {}

export default ProjectThumb
