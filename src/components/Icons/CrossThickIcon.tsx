import React from 'react'
import PropTypes from 'prop-types'

interface Props {
    className: string
}

function CrossThickIcon({ className }: Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36.82 36.82" className={className}>
            <path d="M28.54,25,42.68,10.86a2.5,2.5,0,0,0-3.54-3.54L25,21.46,10.86,7.32a2.5,2.5,0,0,0-3.54,3.54L21.46,25,7.32,39.14a2.5,2.5,0,0,0,3.54,3.54L25,28.54,39.14,42.68a2.5,2.5,0,0,0,3.54-3.54Z" transform="translate(-6.59 -6.59)"/>
    </svg>
  )
}

CrossThickIcon.propTypes = {}

export default CrossThickIcon
