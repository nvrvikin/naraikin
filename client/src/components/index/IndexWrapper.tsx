import React, { ReactNode } from 'react'
import PropTypes from 'prop-types'

interface Props {
  children: ReactNode
}

function IndexWrapper({children}: Props) {
  //TODO: IsDark

  return (
    <div className='index-wrapper'>
      { children }
    </div>
  )
}

IndexWrapper.propTypes = {
    
}

export default IndexWrapper
