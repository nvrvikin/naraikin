import React from 'react'
import PropTypes from 'prop-types'

interface Props {
    className: string
}

function CrossThinIcon({className}: Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46 46" className={className}>
        <path d="M11.53,43.52a.47.47,0,0,1-.3-.1A22.8,22.8,0,0,1,2,25,23,23,0,0,1,35.55,4.55a.51.51,0,0,1,.21.68.5.5,0,0,1-.67.21A21.78,21.78,0,0,0,25,3,22,22,0,0,0,11.83,42.62a.5.5,0,0,1,.1.7A.51.51,0,0,1,11.53,43.52Z" transform="translate(-2 -2)"/>
        <path d="M13.32,44.73a.48.48,0,0,1-.26-.07l-.45-.28a.5.5,0,0,1,.54-.84l.43.27a.49.49,0,0,1,.16.68A.48.48,0,0,1,13.32,44.73Z" transform="translate(-2 -2)"/>
        <path d="M20.77,47.6h-.1a22.77,22.77,0,0,1-6.11-2.09.5.5,0,0,1-.21-.67.49.49,0,0,1,.67-.22,21.94,21.94,0,0,0,5.84,2,.5.5,0,0,1-.09,1Z" transform="translate(-2 -2)"/>
        <path d="M25,48c-.62,0-1.24,0-1.85-.07a.51.51,0,0,1-.46-.54.5.5,0,0,1,.54-.46c.58,0,1.18.07,1.77.07A22,22,0,0,0,39.72,8.65a.5.5,0,0,1,.67-.74A23,23,0,0,1,25,48Z" transform="translate(-2 -2)"/>
        <path d="M38.39,7.42a.57.57,0,0,1-.3-.1c-.4-.3-.81-.59-1.24-.86a.5.5,0,0,1,.54-.84c.44.28.88.58,1.3.89a.5.5,0,0,1,.1.7A.49.49,0,0,1,38.39,7.42Z" transform="translate(-2 -2)"/>
    </svg>
  )
}

CrossThinIcon.propTypes = {}

export default CrossThinIcon