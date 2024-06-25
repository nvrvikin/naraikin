import IndexLayout from '../../components/index/IndexLayout'
import { Helmet } from 'react-helmet'
import { projectsText, defineLangText } from '../../data/pageText'

function IndexProjects() {
  return (
    <>
      <Helmet>
        <title>NVRVIKIN | {defineLangText(projectsText.pageTitle)}</title>  
      </Helmet>
      <IndexLayout>
          <div className="projects">
            { defineLangText(projectsText.hint) }
          </div>
      </IndexLayout>
    </>
  )
}

IndexProjects.propTypes = {}

export default IndexProjects
