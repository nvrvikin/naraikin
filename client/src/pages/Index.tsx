import { Helmet } from 'react-helmet'
import { Routes, Route, useLocation, Link } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import IndexWrapper from '../components/index/IndexWrapper'
import IndexParticles from '../components/index/IndexParticles'
import IndexNavigation from '../components/index/IndexNavigation'
import IndexMain from './Index/IndexMain'
import IndexProjects from './Index/IndexProjects'
import IndexAbout from './Index/IndexAbout'
import LangProvider from '../contexts/LangContext'

function Index() {
  let location = useLocation()

  return (
    <>
        <Helmet>
            <meta charSet="utf-8" />
            <title>NVRVIKIN | Главная</title>
            <link
              href="https://fonts.googleapis.com/css?family=Raleway:100,200,300,400,500,600,700,800,900|Montserrat:400,700"
              rel="stylesheet"/>
            <link
              href="https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700&display=swap&subset=cyrillic"
              rel="stylesheet"/>
        </Helmet>
        <LangProvider>
          <IndexWrapper>
              <IndexParticles />
              <header className='header'>
                <Link to="#"/>
              </header>
              <IndexNavigation />
              <TransitionGroup>
                <CSSTransition
                  classNames="index-layout"
                  timeout={500}
                  key={location.key}>
                  <Routes location={location}>
                    <Route path="/" element={ <IndexMain /> } />
                    <Route path="/about" element={ <IndexAbout /> } />
                    <Route path="/projects" element={ <IndexProjects /> } />
                  </Routes>
                    </CSSTransition>
              </TransitionGroup>
          </IndexWrapper>
        </LangProvider>
    </>
  )
}

Index.propTypes = {}

export default Index
