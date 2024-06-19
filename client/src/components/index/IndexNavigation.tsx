import React from 'react'
import PropTypes from 'prop-types'
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
        to='/projects'>
        Проекты
      </NavLink>
      <NavLink
        className='index-navigation__button'
        to='/stack'>
        Технологии
      </NavLink>
      <NavLink
        className='index-navigation__button'
        to='four'>
        Десятое
      </NavLink>
      <NavLink
        className='index-navigation__button'
        to='/about'>
        Обо мне
      </NavLink>
    </nav>
  )
}

IndexNavigation.propTypes = {}

export default IndexNavigation
