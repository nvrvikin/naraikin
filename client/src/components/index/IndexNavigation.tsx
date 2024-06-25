import { NavLink } from 'react-router-dom'
import { defineLangText, navText } from '../../data/pageText'

function IndexNavigation() {
  return (
    <nav className="index-navigation">
      <NavLink
        className='index-navigation__button'
        to='/'>
         { defineLangText(navText.mainLink) }
      </NavLink>
      <NavLink
        className='index-navigation__button'
        to='/about'>
        { defineLangText(navText.aboutLink ) }
      </NavLink>
      <NavLink
        className='index-navigation__button'
        to='/projects'>
        { defineLangText(navText.projectsLink) }
      </NavLink>
    </nav>
  )
}

IndexNavigation.propTypes = {}

export default IndexNavigation
