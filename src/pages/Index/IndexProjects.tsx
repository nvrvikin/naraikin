import React from 'react'
import PropTypes from 'prop-types'
import IndexLayout from '../../components/index/IndexLayout'
import { Helmet } from 'react-helmet'

function IndexProjects() {
  return (
    <>
      <Helmet>
        <title>NVRVIKIN | Проекты</title>  
      </Helmet>
      <IndexLayout>
          <div>Тут будут проекты</div>
      </IndexLayout>
    </>
  )
}

IndexProjects.propTypes = {}

export default IndexProjects
