import React, { ReactNode } from 'react'
import PropTypes from 'prop-types'

interface Props {
    children: ReactNode
}

function IndexLayout({children}: Props) {
  return (
    <main className='index-layout'>
        { children }
    </main>
  )
}

IndexLayout.propTypes = {}

export default IndexLayout
