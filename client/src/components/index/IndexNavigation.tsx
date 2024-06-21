import { NavLink } from 'react-router-dom'

function IndexNavigation() {
  return (
    <nav className="index-navigation">
      <NavLink
        className='index-navigation__button'
        to='/'>
         Главная
      </NavLink>
      <NavLink
        className='index-navigation__button'
        to='/about'>
        Обо мне
      </NavLink>
      <NavLink
        className='index-navigation__button'
        to='/projects'>
        Проекты
      </NavLink>
    </nav>
  )
}

IndexNavigation.propTypes = {}

export default IndexNavigation
