import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Navigation from "./navigation"
import { useStaticImage } from "../../hooks/use-static-image"
import Img from "gatsby-image"

const Header = ({ siteTitle }) => {
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
                    <img src="../../images/favicon-57.png" alt="U.S. flag" />
                    <p>An official website of the United States government</p>
                    <button
                      className="usa-accordion-button usa-banner-button initialized"
                      aria-expanded="false"
                      aria-controls="gov-banner"
                    />
                    <span className="usa-banner-button-text">
                      Here's how you know
                    </span>
                  </div>
                </div>
              </div>
              <div
                className="usa-banner-content usa-grid usa-accordion-content"
                id="gov-banner"
                aria-hidden="true"
              >
                <div className="usa-banner-guidance-gov usa-width-one-half">
                  <img
                    className="usa-banner-icon usa-media_block-img"
                    src="../../images/icon-dot-gov.svg"
                    alt="Dot gov"
                  />
                  <div className="usa-media_block-body">
                    <p>
                      <strong>The .gov means it’s official.</strong>
                      <br />
                      Federal government websites often end in .gov or .mil.
                      Before sharing sensitive information, make sure you're on
                      a federal government site.
                    </p>
                  </div>
                </div>
                <div className="usa-banner-guidance-ssl usa-width-one-half">
                  <img
                    className="usa-banner-icon usa-media_block-img"
                    src="../../images/icon-https.svg"
                    alt="SSL"
                  />
                  <div className="usa-media_block-body">
                    <p>
                      <strong>This site is secure.</strong>
                      <br />
                      The <strong>https://</strong> ensures that you are
                      connecting to the official website and that any
                      information you provide is encrypted and transmitted
                      securely.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="site-switcher-dropdown-content">Sites</div>
        <div className="container mx-auto flex">
          <Link to="/" className="w-1/3">
            <img src={logo.src} />
          </Link>
          <div className="w-2/3 flex-1 flex items-center justify-center lg:ml-6 lg:justify-end">
            <div className="max-w-lg w-full lg:max-w-xs">
              <label htmlFor="search" className="sr-only">
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <input
                  id="search"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:border-blue-300 focus:shadow-outline-blue sm:text-sm transition duration-150 ease-in-out"
                  placeholder="Search"
                  type="search"
                />
              </div>
            </div>
          </div>
        </div>
        <Navigation />
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
