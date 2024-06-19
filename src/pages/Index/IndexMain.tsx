import React from 'react'
import PropTypes from 'prop-types'
import IndexLayout from '../../components/index/IndexLayout'
import LogoIcon from '../../components/Icons/LogoIcon'
import { Helmet } from 'react-helmet'

function IndexMain() {
  return (
    <>
		<Helmet>
			<title>NVRVIKIN | Главная</title>
		</Helmet>
		<IndexLayout>
			<LogoIcon className='logo' />
    		<p className="logo-under">Это я!</p>
    		<div className="social-links">
    		  	<div className='social-links__markup social-links__markup_outer-top' />
    		  	<div className='social-links__markup social-links__markup_outer-bottom' />
    		  	<div className='social-links__markup social-links__markup_outer-left' />
    		  	<div className='social-links__markup social-links__markup_outer-right' />
    		  	<div className='social-links__markup social-links__markup_inner-top' />
    		  	<div className='social-links__markup social-links__markup_inner-bottom' />
    		  	<div className='social-links__markup social-links__markup_inner-left' />
    		  	<div className='social-links__markup social-links__markup_inner-right' />
    		  	<a
    		  	  	className="icon-link icon-link_git"
    		  	  	href="https://github.com/nvrvikin"
    		  	  	target="_blank"
    		  	  	rel="noopener noreferrer">
    		  	  	&nbsp; GitHub
    		  	</a>
    		  	|
    		  	<a
    		  	  	className="icon-link icon-link_vk"
    		  	  	href="https://vk.com/nvrvikin"
    		  	  	target="_blank"
    		  	  	rel="noopener noreferrer">
    		  	  	&nbsp; VK
    		  	</a>
    		  	|
    		  	<a
    		  	  	className="icon-link icon-link_tg"
    		  	  	href="https://t.me/nvrvikin/"
    		  	  	target="_blank"
    		  	  	rel="noopener noreferrer">
    		  	  	&nbsp; Instagram
    		  	</a>
    		</div>
      </IndexLayout>
    </>
  )
}

IndexMain.propTypes = {}

export default IndexMain
