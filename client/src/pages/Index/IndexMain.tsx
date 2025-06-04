import IndexLayout from '../../components/index/IndexLayout'
import LogoIcon from '../../components/Icons/LogoIcon'
import { Helmet } from 'react-helmet'
import { defineLangText, mainText } from '../../data/pageText'
import IconGithub from '../../assets/icons/IconGithub'
import IconTelegram from '../../assets/icons/IconTelegram'
import IconHH from '../../assets/icons/IconHH'

function IndexMain() {
  return (
    <>
		<Helmet>
			<title>NVRVIKIN | { defineLangText(mainText.pageTitle) }</title>
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
    		  	  	<IconGithub className='icon-link__smaller' />
    		  	  	<IconGithub className='icon-link__larger' />
    		  	</a>
    		  	<a
    		  	  	className="icon-link icon-link_tg"
    		  	  	href="https://t.me/nvrvikin/"
    		  	  	target="_blank"
    		  	  	rel="noopener noreferrer">
    		  		<IconTelegram className='icon-link__smaller' />
    		  		<IconTelegram className='icon-link__larger'/>
    		  	</a>
				<a
    		  	  	className="icon-link icon-link_hh"
    		  	  	href="https://barnaul.hh.ru/resume/d649729cff0e08e3730039ed1f5a6350555045"
    		  	  	target="_blank"
    		  	  	rel="noopener noreferrer">
    		  		<IconHH className='icon-link__smaller' />
    		  		<IconHH className='icon-link__larger'/>
    		  	</a>
    		</div>
      </IndexLayout>
    </>
  )
}

IndexMain.propTypes = {}

export default IndexMain
