import IndexLayout from '../../components/index/IndexLayout'
import { Helmet } from 'react-helmet'

function IndexProjects() {
  return (
    <>
      <Helmet>
        <title>NVRVIKIN | Проекты</title>  
      </Helmet>
      <IndexLayout>
          <div className="projects">
            <span>Нет доступных выгруженных проектов</span>
            <code>На воскрешение проектов потребуется время</code>
          </div>
      </IndexLayout>
    </>
  )
}

IndexProjects.propTypes = {}

export default IndexProjects
