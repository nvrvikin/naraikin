import IconGlobal from '../../../assets/icons/IconGlobal'
import IconGithub from '../../../assets/icons/IconGithub'

interface IProjectViewLinks {
    link: string,
	hasLink: boolean,
	gLink: string,
	hasGLink: boolean,
}

function ProjectViewLinks({ link, hasLink, gLink, hasGLink }: IProjectViewLinks) {

  return (
    <div className="project-view-links">
      { hasLink ?
          <a target="_blank" className="project-view-links__link" href={ link }><IconGlobal className="project-view-links__icon project-view-links__icon_global" /></a>
        :
          <span className="project-view-links__link project-view-links__link_inactive"><IconGlobal className="project-view-links__icon project-view-links__icon_global" /></span>
      }
        { hasGLink ?
            <a target="_blank" className="project-view-links__link" href={ gLink }><IconGithub className="project-view-links__icon project-view-links__icon_github" /></a>
          :
            <span className="project-view-links__link project-view-links__link_inactive"><IconGithub className="project-view-links__icon project-view-links__icon_github" /></span>
        }
    </div>
  )
}

ProjectViewLinks.propTypes = {}

export default ProjectViewLinks
