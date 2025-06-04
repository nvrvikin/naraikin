import { useContext, useEffect, useRef, useState, /*useContext*/ } from 'react'
//import { LangContext } from '../../contexts/LangContext';
//import { Link } from 'react-router-dom';
//import langList from '../../data/langList';

import { IProject } from '../../data/projectsList';
import { ITag } from '../../data/tagsList';
import { ProjectContext } from '../../contexts/ProjectContext';
import { defineTagLangText } from '../helpers/defineLangText';


interface IProjectThumpProps {
    project: IProject
}


function ProjectThumb({ project }: IProjectThumpProps)  {
    const tagsUlRef = useRef(null);
    const containerRef = useRef(null);
    const titleBoxRef = useRef(null);
    const titleRef = useRef(null);

    const { setCurrentProject } = useContext(ProjectContext)

    /*const { lang, updateLang } = useContext(LangContext)*/

    const [title, setTitle] = useState('...');
    const [description, setDescription] = useState<string | React.ReactNode>('...');
    const [/*link*/, setLink] = useState('#');
    //const [isExternalLink, /*setIsExternalLink*/] = useState(false);
    const [/*image*/, setImage] = useState('');
    const [tags, setTags] = useState<ITag[]>([]);

    const [isHidden, /*setIsHidden*/] = useState(false);

    const [/*showImage*/, setShowImage] = useState(false);
    
    const [showInfo, /*setShowInfo*/] = useState(false);
    const [currentInfo, /*setCurrentInfo*/] = useState('');

    const [shortTitle, setShortTitle] = useState('...');
    const [/*currentTitle*/, /*setCurrentTitle*/] = useState('...');

    const [offsetTitle, setOffsetTitle] = useState(0);
    const [isOver, setIsOver] = useState(false);
    const [canMoveTitle, /*setCanMoveTitle*/] = useState(false);
    
    //const [canForth, /*setCanForth*/] = useState(true);
    const [/*canBack*/, /*setCanBack*/] = useState(true);
    const [offsetTags, /*setOffsetTags*/] = useState(0);
    //const [ulWidth, /*setUlWidth*/] = useState(0);
    //const [containerWidth, /*setContainerWidth*/] = useState(0);

    //const [offsetStep, /*setOffsetStep*/] = useState(150);

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
/*
    function tagsForth() {
        if(canForth){
            if(offsetTags + offsetStep < ulWidth - containerWidth) {
                setOffsetTags(offsetTags + offsetStep);
            } else {
                setOffsetTags(ulWidth - containerWidth);
            }
        }
    }
*/
/*
    function tagsBack() {
        if(offsetTags - offsetStep >= 0) setOffsetTags(offsetTags - offsetStep);
        else setOffsetTags(0);
    }
*/
    function showTags() {

        if(tags) {
            return tags.map((tag, idx) => {

                return (
                    <li key={idx}
                        className='project-thumb__tag'
                        //onMouseEnter={ () => handleTagMouseEnter(tagLang.info) }
                        //onMouseLeave={ handleTagMouseLeave }
                        > 
                        { defineTagLangText(tag).value }
                    </li>
                )
            });
        }
    }

    function openProject() {
        console.log("open project")
        if(project && setCurrentProject) {
            setCurrentProject(project.id)
        }
    }

    useEffect(() => {
        if(project) {
            setTitle(project.title)
            setShortTitle(project.title)
            setDescription(project.description)
            setLink(project.link)
            setImage(project.image)
            setTags(project.tags)
        }
    }, [project])

    return (
        <div className={`project-thumb ${ isHidden ? 'project-thumb_hidden' : '' }`}
            onMouseEnter={ handleMouseEnter }
            onMouseLeave={ handleMouseLeave }
            onTransitionEnd={ handleTransitionEnd }>
                <div className='project-thumb__side' onClick={ openProject }>
                    <div className='project-thumb__side-bar' />
                </div>
            <div className='project-thumb__top'>
                <div className="project-thumb__main-content">
                    <div className="project-thumb__info-wrapper">
                        <div ref={ titleBoxRef } className='project-thumb__title-box' onClick={ openProject }>
                            <span ref={ titleRef }
                                className="project-thumb__title"
                                onMouseEnter={() => setShowImage(true)}
                                onMouseLeave={() => setShowImage(false)}>
                                {shortTitle}
                            </span>
                        </div>
                        <p className="project-thumb__description">{description}</p>
                    </div>
                    
                </div>
            
                <div className="project-thumb__tags-wrapper">
                    <div ref={containerRef} className="project-thumb__tags-container">
                        <ul ref={tagsUlRef} className="project-thumb__tags-list" style={{ transform: (`translate(-${offsetTags}px, 0px)`) }}>
                            {showTags()}
                        </ul>
                    </div>
                </div>
            </div>
            <div className={`project-thumb__tag-info ${showInfo ? 'project-thumb__tag-info_show' : ''}`}>{ currentInfo }</div>
        </div>
    )
}

ProjectThumb.propTypes = {}

export default ProjectThumb
