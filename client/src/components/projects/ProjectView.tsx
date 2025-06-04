import { ReactNode, useContext, useEffect, useState } from "react"
import { ProjectContext } from "../../contexts/ProjectContext"
import { ITag } from "../../data/tagsList"
import ProjectViewLinks from "./ProjectView/ProjectViewLinks"

function ProjectView({ /*project, isShown, closeView*/ }) {
    const { project, isViewShown, hideView } = useContext(ProjectContext)

    const [title, setTitle] = useState('...')
    const [desc, setDesc] = useState<string | ReactNode>('...')
    const [features, setFeatures] = useState<string[]>([])
    const [tags, setTags] = useState<ITag[]>([])
    const [link, setLink] = useState<string>('')
    const [hasLink, setHasLink] = useState<boolean>(false)
    const [gLink, setGLink] = useState<string>('')
    const [hasGLink, setHasGLink] = useState<boolean>(false)
    const [image, setImage] = useState<string>('')

    function FeaturesBlock() {
        if(!features.length) {
            return <></>
        } else {
            let listItems = features.map(feat => <li key={feat} className='project-view-features-list__item'>{ feat }</li>)
            return <div className='project-view-features'>
                <h3 className='project-view-features__title'>Планируемый функционал</h3>
                <ul className="project-view-features__list">
                    { listItems }
                </ul>
        </div>
        }
    }
    function TagsBlock() {
        if(!tags.length) {
            return <></>
        } else {
            let listItems = tags.map(tag => <span key={tag.ru.value} className="project-view-tags__item">{ tag.ru.value }</span>)
            return <div className="project-view-tags">
                    { listItems }
            </div>
        }
    }

    useEffect(() => {
        if(project?.title) {
            setTitle(project.title)
        }
        if(project?.description) {
            setDesc(project.description)
        }
        if(project?.features) {
            setFeatures(project.features)
        }
        if(project?.tags) {
            setTags(project.tags)
        }
        if(project?.link) {
            setLink(project.link)
        }
        if(project?.hasLink) {
            setHasLink(project.hasLink)
        }
        if(project?.gLink) {
            setGLink(project.gLink)
        }
        if(project?.hasGLink) {
            setHasGLink(project.hasGLink)
        }

        if(project?.image) {
            setImage(project.image)
        }
    }, [project])
    
    return (
        <div className={`project-view ${ isViewShown ? 'project-view_show' : '' }`}>
            <div className="project-view__overlay" onClick={ hideView }></div>
            <div className='project-view__box'>
                <div className='project-view-side' onClick={ hideView }>
                    <div className="project-view-side__bar" />
                </div>
                <div className="project-view-box-content">
                    <div className="project-view-box-content__top">
                    <div className="project-view-box-content-top__info">
                        <div className="project-view-heading">
                            <h2 className='project-view__title'>{ title }</h2>
                            <ProjectViewLinks link={ link } hasLink={ hasLink } gLink={ gLink } hasGLink={ hasGLink } />
                        </div>
                        <p className='project-view__description'>{ desc }</p>    
                    </div>
                        <div className="project-view-display">
                            <div className="project-view-display__image" style={{backgroundImage: `url(${image})`}} />
                            <div className="project-view-display__info">
                                <span className="project-view-display-info__item">Не закончен</span>
                                <span className="project-view-display-info__item">Частично адаптирован</span>
                            </div>
                        </div>
                    </div>
                    <FeaturesBlock />
                    <TagsBlock />
                </div>
            </div>
        </div>
    )
}

export default ProjectView
