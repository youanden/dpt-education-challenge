import {Link} from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Navigation from "./navigation";
import { useStaticImage } from "../../hooks/use-static-image"
import Img from "gatsby-image"

const Header = ({siteTitle}) => {

  const images = useStaticImage()
  const logo = images["logo.png"]

  return (
    <header className="bg-grey-300">
      <section className="top-toolbar">
        <div className="w-full">
          <button className="site-switcher-dropdown">
            ED.gov
            {/* current site */}
          </button>
          <div className="topline">
            <div className="usa-banner">
              <div className="usa-accordion">
                <div className="usa-banner-header">
                  <div id="bner" className="usa-grid usa-banner-inner">
                    <img src="../../images/favicon-57.png" alt="U.S. flag"/>
                    <p>
                      An official website of the United States government
                    </p>
                    <button className="usa-accordion-button usa-banner-button initialized" aria-expanded="false"
                            aria-controls="gov-banner"/>
                    <span className="usa-banner-button-text">

                    Here's how you know
                  </span>
                  </div>
                </div>
              </div>
              <div className="usa-banner-content usa-grid usa-accordion-content" id="gov-banner" aria-hidden="true">
                <div className="usa-banner-guidance-gov usa-width-one-half">
                  <img className="usa-banner-icon usa-media_block-img" src="../../images/icon-dot-gov.svg"
                       alt="Dot gov"/>
                  <div className="usa-media_block-body">
                    <p>
                      <strong>The .gov means it’s official.</strong>
                      <br />
                      Federal government websites often end in .gov or .mil. Before sharing sensitive information,
                      make sure you're on a federal government site.
                    </p>
                  </div>
                </div>
                <div className="usa-banner-guidance-ssl usa-width-one-half">
                  <img className="usa-banner-icon usa-media_block-img" src="../../images/icon-https.svg" alt="SSL"/>
                  <div className="usa-media_block-body">
                    <p>
                      <strong>This site is secure.</strong>
                      <br/>
                      The <strong>https://</strong> ensures that you are connecting to the official website and that
                      any information you provide is encrypted and transmitted securely.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="site-switcher-dropdown-content">
          Sites
        </div>
        <div className="container mx-auto flex">
          <Link to="/" className="w-1/3">
            <img src={logo.src} />
          </Link>
          <div className="w-2/3">
            <label>
              Search
              <input type="text"/>
            </label>
          </div>
        </div>
        <Navigation/>
      </section>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
