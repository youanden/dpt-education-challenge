import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import Navigation from "./navigation"
import Search from "./search"
import { useStaticImage } from "../../hooks/use-static-image"
import Img from "gatsby-image"
import Transition from "../transition"
import building from "../../images/building.svg"
import lock from "../../images/lock.svg"
import MobileNavigation from "./mobile-navigation"

const Header = ({ siteTitle }) => {
  const images = useStaticImage()
  const logoSmall = images["edtiny.png"]
  const logo = images["logo.png"]
  const usflag = images["usflag.png"]
  const siteNcesKids = images["site_nces_kids.png"]
  const siteEric = images["site_eric.png"]
  const siteSchoolSafety = images["site_school_safety.png"]
  const siteDapip = images["site_dapip.png"]
  const [isMultisitePanelOpen, setMultisitePanelOpen] = useState(false)
  const [isAuthorityPanelOpen, setAuthorityPanelOpen] = useState(false)
  const [isLanguageMenuOpen, setLanguageMenuOpen] = useState(false)

  return (
    <header className="w-full bg-white">
      <section className="bg-bl-lightest">
        <div className="container flex flex-wrap">
          <button
            className={[
              "w-32 py-2 md:pl-2 hidden md:block",
              isMultisitePanelOpen ? "bg-bl text-white" : "bg-white",
            ].join(" ")}
            onClick={() => setMultisitePanelOpen(!isMultisitePanelOpen)}
          >
            <img
              className={"inline -mt-1 mr-2"}
              src={logoSmall.src}
              alt="U.S. Department of Education Logo - Site Switcher"
            />
            <span>ED.gov</span>
            <svg
              className={[
                "inline ml-2 h-5 w-5 transition ease-in-out duration-150 transform",
                isMultisitePanelOpen ? "-rotate-180" : "text-gray-400",
              ].join(" ")}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <div className="inline py-2 pl-4 max-w-md lg:max-w-max-content">
            <img
              className={"inline mr-2 relative -mt-1"}
              src={usflag.src}
              alt="U.S. flag"
            />
            <span>An official website of the United States government</span>
            <button
              className="ml-4 text-bl-link"
              onClick={() => setAuthorityPanelOpen(!isAuthorityPanelOpen)}
              aria-expanded={isAuthorityPanelOpen}
              aria-controls={"gov-banner"}
            >
              <span>Here's how you know</span>
              <svg
                className={[
                  "inline ml-2 h-5 w-5 transition ease-in-out duration-150 transform",
                  isAuthorityPanelOpen ? "-rotate-180" : "",
                ].join(" ")}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div className="flex-1 text-right relative py-2 hidden md:flex justify-end items-center">
            <a href="#">Sitemap (A-Z)</a>
            <button
              id="language-menu"
              aria-haspopup="true"
              aria-expanded={isLanguageMenuOpen}
              className="ml-4"
              onClick={() => setLanguageMenuOpen(!isLanguageMenuOpen)}
            >
              <span>English</span>
              <svg
                className={[
                  "inline ml-2 h-5 w-5 transition ease-in-out duration-150 transform",
                  isLanguageMenuOpen ? "-rotate-180" : "text-gray-400",
                ].join(" ")}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <Transition
              show={isLanguageMenuOpen}
              enter="transition ease-out duration-100 transform"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="transition ease-in duration-75 transform"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="z-10 origin-top-right absolute right-0 mt-2 w-24 rounded-md shadow-lg">
                <div className="rounded-md bg-white shadow-xs">
                  <div
                    className="py-1"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="language-menu"
                  >
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                      role="menuitem"
                    >
                      English
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                      role="menuitem"
                    >
                      Spanish
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                      role="menuitem"
                    >
                      Creole
                    </a>
                  </div>
                </div>
              </div>
            </Transition>
          </div>
        </div>
        <div
          className={["bg-bl", isMultisitePanelOpen ? "" : "hidden"].join(" ")}
          id="multisite-banner"
          aria-hidden={!isMultisitePanelOpen}
        >
          <div className="container py-8 font-display font-bold text-md">
            <ul className={"flex"}>
              <li className={"mr-12"}>
                <a href="#" className={"text-white"}>
                  <img
                    className={"inline mr-2"}
                    src={siteNcesKids.src}
                    alt="NCES Kid's Zone"
                  />
                  <span>NCES Kid's Zone</span>
                </a>
              </li>
              <li className={"mr-12"}>
                <a href="#" className={"text-white"}>
                  <img
                    className={"inline mr-2"}
                    src={siteEric.src}
                    alt="ERIC"
                  />
                  <span>ERIC</span>
                </a>
              </li>
              <li className={"mr-12"}>
                <a href="#" className={"text-white"}>
                  <img
                    className={"inline mr-2"}
                    src={siteSchoolSafety.src}
                    alt="SchoolSafety.gov"
                  />
                  <span>SchoolSafety.gov</span>
                </a>
              </li>
              <li className={"mr-12"}>
                <a href="#" className={"text-white"}>
                  <img
                    className={"inline mr-2"}
                    src={siteDapip.src}
                    alt="DAPIP"
                  />
                  <span>DAPIP</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div
          className={["bg-gray-100", isAuthorityPanelOpen ? "" : "hidden"].join(
            " "
          )}
          id="gov-banner"
          aria-hidden={!isAuthorityPanelOpen}
        >
          <div className="container flex flex-wrap p-4">
            <div className="w-full md:w-1/2 items-center flex max-w-xl">
              <svg
                viewBox={building.viewBox}
                className={"w-1/3 xl:w-24 hidden sm:block sm:m-4 xl:m-4"}
              >
                <use xlinkHref={`#${building.id}`} />
              </svg>
              <p>
                <strong>The .gov means it’s official.</strong>
                <br />
                Federal government websites often end in .gov or .mil. Before
                sharing sensitive information, make sure you're on a federal
                government site.
              </p>
            </div>
            <div className="w-full mt-4 md:mt-0 md:w-1/2 items-center flex max-w-xl">
              <svg
                viewBox={lock.viewBox}
                className={"w-1/3 xl:w-24 hidden sm:block sm:m-4 xl:m-4"}
              >
                <use xlinkHref={`#${lock.id}`} />
              </svg>
              <p>
                <strong>This site is secure.</strong>
                <br />
                The <strong>https://</strong> ensures that you are connecting to
                the official website and that any information you provide is
                encrypted and transmitted securely.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white md:h-32 flex items-center p-4 md:p-0 justify-end">
          <div className="container flex justify-between">
            <Link to="/" className="w-2/3 md:w-1/3">
              <img src={logo.src} alt={"U.S. Department of Education Logo"} />
            </Link>
            <div className="hidden sm:flex w-2/3 md:w-2/5 items-center justify-center lg:ml-6 lg:justify-end">
              <Search />
            </div>
            <MobileNavigation />
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
