import React from 'react'
import PropTypes from 'prop-types'
import IndexLayout from '../../components/index/IndexLayout'
import { Helmet } from 'react-helmet'
import CrossThickIcon from '../../components/Icons/CrossThickIcon'
import CrossThinIcon from '../../components/Icons/CrossThinIcon'

import MyPhotoOriginalImg from "/img/meph3.jpg";
import MyPhotoOverdrivenImg from "/img/meph2.jpg";
import CircleIcon from '../../components/Icons/CircleIcon'

function IndexAbout() {
  return (
    <>
        <Helmet>
            <title>NVRVIKIN | Обо мне</title>
        </Helmet>
        <IndexLayout>
            <div className="about">
                <div className="about__my-photo-container">
                    <CrossThickIcon className="about-my-photo__cross about-my-photo__cross_delayed_first" />
                    <CrossThickIcon className="about-my-photo__cross about-my-photo__cross_delayed_second" />
                    <CrossThickIcon className="about-my-photo__cross" />
                    <CrossThinIcon className="about-my-photo__circle" />
                    <div
                        className="about__my-photo"
                        style={{ backgroundImage: `url('${MyPhotoOriginalImg}')` }}
                        />
                    <div
                        className="about__my-photo about__my-photo_overlay"
                        style={{ backgroundImage: `url('${MyPhotoOverdrivenImg}')` }}
                        />
                </div>
                <div className="about__text-wrapper">
		        	<CircleIcon className='about-text__circle' />
		        	<CircleIcon className='about-text__circle about-text__circle_first' />
		        	<CircleIcon className='about-text__circle about-text__circle_second' />
                    <h1 className="about__title">
                        Обо мне
                    </h1>
                    <p className="about__info">
                        Привет! Я не дурак!
                    </p>
                    <span className="about__hint">
                        Возьмите работать
                    </span>
                </div>
            </div>
        </IndexLayout>
    </>
  )
}

IndexAbout.propTypes = {}

export default IndexAbout