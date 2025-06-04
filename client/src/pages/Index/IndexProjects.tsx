import IndexLayout from '../../components/index/IndexLayout'
import { Helmet } from 'react-helmet'
import { projectsText, defineLangText } from '../../data/pageText'
import ProjectThumb from '../../components/projects/ProjectThumb';
import projectsList from '../../data/projectsList';
import ProjectView from '../../components/projects/ProjectView';
import ProjectProvider from '../../contexts/ProjectContext';

function IndexProjects() {

  	function ShowWebProjects() {
		return (
			projectsList.map((proj, i) => 
				<ProjectThumb 
					key={ i }
					project={ proj }
				/>
			)
		)
	}
  
  return (
    <>
      	<Helmet>
        	<title>NVRVIKIN | { defineLangText(projectsText.pageTitle) }</title>  
      	</Helmet>
      	<IndexLayout>
		<ProjectProvider>
          	<ProjectView />
            	<div className="index-projects">
              		<div className="index-projects__border index-projects__border_top-left"></div>
              		<div className="index-projects__borders index-projects__border_top-rights"></div>
              		<div className="index-projects__border index-projects__border_bottom-left"></div>
              		<div className="index-projects__border index-projects__border_bottom-right"></div>
					<div className='projects-content'>
              			<div className="projects-side">
              			  	<h1 className="projects__title">{defineLangText(projectsText.pageTitle)}</h1>
              			</div>
              			<div className="projects__wrapper">
              			  	<div className="projects__list">
								<ShowWebProjects />
              			  	</div>
              			</div>
					</div>
            	</div>
			</ProjectProvider>
      	</IndexLayout>
    </>
  )
}

IndexProjects.propTypes = {}

export default IndexProjects
