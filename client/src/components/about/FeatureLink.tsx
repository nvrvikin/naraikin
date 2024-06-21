import { Link } from "react-router-dom"

interface IFeatureLink {
    link?: string,
    classMod?: string,
    children: React.ReactNode
}

function FeatureLink({ link="#", classMod="", children }: IFeatureLink) {
  return (
    <Link className={ "about-feature-link " + (classMod ? "about-feature-link_" + classMod : "") } to={ link }>{ children }</Link>
  )
}

FeatureLink.propTypes = {}

export default FeatureLink
