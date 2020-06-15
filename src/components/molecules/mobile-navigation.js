import React, { useState } from "react"

import { menu } from "../menu-data"

import "../../css/mobilenav.css"
import { useCycle } from "framer-motion"
import Search from "./search"
import { useStaticImage } from "../../hooks/use-static-image"

const MobileNavigation = () => {
  const images = useStaticImage()
  const logoSmall = images["edtiny.png"]
  const siteNcesKids = images["site_nces_kids.png"]
  const siteEric = images["site_eric.png"]
  const siteSchoolSafety = images["site_school_safety.png"]
  const siteDapip = images["site_dapip.png"]
  const [isOpen, toggleOpen] = useCycle(false, true)
  const [isMultisiteOpen, toggleMultisiteOpen] = useCycle(false, true)
  const [isLangOpen, toggleLangOpen] = useCycle(false, true)
  const [nav, setNav] = useState(menu)
  return (
    <div className={"md:hidden"}>
      <button
        type={"button"}
        aria-controls={"mobile-nav"}
        className={"block md:hidden btn-menu bg-bl text-white ml-2"}
        onClick={() => toggleOpen()}
      >
        Menu
      </button>

      <div
        className={" drawer js-drawer" + (isOpen ? " drawer--is-visible" : "")}
        id="mobile-nav"
      >
        <div
          className="relative drawer__content"
          role="alertdialog"
          aria-labelledby="mobileNavTitle"
        >
          <button
            className={"text-black absolute top-0 right-0 p-5"}
            onClick={() => toggleOpen()}
          >
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.2"
              className="w-5 h-5 text-gray-500"
              viewBox="0 0 24 24"
            >
              <path d="M18 6L6 18M6 6l12 12"></path>
            </svg>
          </button>
          <div className="drawer__body js-drawer__body">
            <div className="px-4 mt-14 mb-4">
              <Search id={"mobile"} />
            </div>
            <div>
              <h4 id="mobileNavTitle" className={"sr-only"}>
                ED.GOV Navigation Menu
              </h4>

              <div className="divide-y-1 divide-gr-lighter border-t-1 border-b-1 border-gr-lighter">
                {nav.map((item, index) => (
                  <div key={index}>
                    <button
                      className="p-4 font-bold text-left w-full flex justify-between items-start"
                      onClick={() => {
                        setNav(prevNav => {
                          return [
                            ...prevNav
                              .slice(0, index)
                              .map(i => ({ ...i, isOpen: false })),
                            { ...item, isOpen: !item.isOpen },
                            ...prevNav
                              .slice(index + 1)
                              .map(i => ({ ...i, isOpen: false })),
                          ]
                        })
                      }}
                    >
                      <span>{item.label}</span>
                      {item.items.length ? (
                        <span className="ml-6 flex items-center">
                          <svg
                            className={[
                              "inline ml-2 h-5 w-5 transition ease-in-out duration-150 transform",
                              item.isOpen ? "-rotate-180" : "",
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
                        </span>
                      ) : null}
                    </button>
                    {item.items ? (
                      <ul
                        className={[
                          "w-full font-medium font-body py-2",
                          item.isOpen ? "" : "hidden",
                        ].join(" ")}
                      >
                        {item.items.map((item, index) => (
                          <li key={index}>
                            <a
                              href="#"
                              className="text-base leading-10 px-4 block"
                            >
                              {item.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                ))}
                {/*  End Dynamic Menu*/}

                <button
                  className="p-4 font-bold text-left w-full flex justify-between items-center"
                  onClick={() => toggleMultisiteOpen()}
                >
                  <img
                    className={"inline  mr-2"}
                    src={logoSmall.src}
                    alt="U.S. Department of Education Logo - Site Switcher"
                  />
                  <span className={"flex-grow"}>ED.gov</span>
                  <span className="ml-6 flex items-center">
                    <svg
                      className={
                        "inline ml-2 h-5 w-5 transition ease-in-out duration-150 transform " +
                        (isMultisiteOpen ? "-rotate-180" : "")
                      }
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </button>
                {isMultisiteOpen ? (
                  <ul className={"flex flex-col p-4"}>
                    <li className={"mb-4"}>
                      <a href="#" className={""}>
                        <img
                          className={"inline mr-2"}
                          src={siteNcesKids.src}
                          alt="NCES Kid's Zone"
                        />
                        <span>NCES Kid's Zone</span>
                      </a>
                    </li>
                    <li className={"mb-4"}>
                      <a href="#" className={""}>
                        <img
                          className={"inline mr-2"}
                          src={siteEric.src}
                          alt="ERIC"
                        />
                        <span>ERIC</span>
                      </a>
                    </li>
                    <li className={"mb-4"}>
                      <a href="#" className={""}>
                        <img
                          className={"inline mr-2"}
                          src={siteSchoolSafety.src}
                          alt="SchoolSafety.gov"
                        />
                        <span>SchoolSafety.gov</span>
                      </a>
                    </li>
                    <li className={"mb-4"}>
                      <a href="#" className={""}>
                        <img
                          className={"inline mr-2"}
                          src={siteDapip.src}
                          alt="DAPIP"
                        />
                        <span>DAPIP</span>
                      </a>
                    </li>
                  </ul>
                ) : null}
                {/* End multisite  */}
                <button className="p-4 font-bold text-left w-full flex justify-between items-start">
                  Sitemap (A-Z)
                </button>

                <button
                  className="p-4 font-bold text-left w-full flex justify-between items-center"
                  onClick={() => toggleLangOpen()}
                >
                  <span>English</span>
                  <span className="ml-6 flex items-center">
                    <svg
                      className={
                        "inline ml-2 h-5 w-5 transition ease-in-out duration-150 transform " +
                        (isLangOpen ? "-rotate-180" : "")
                      }
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </button>
                {isLangOpen ? (
                  <ul className={"flex flex-col p-4"}>
                    <li className={"mb-4"}>
                      <a href="#" className={""}>
                        <span>English</span>
                      </a>
                    </li>
                    <li className={"mb-4"}>
                      <a href="#" className={""}>
                        <span>Spanish</span>
                      </a>
                    </li>
                    <li className={"mb-4"}>
                      <a href="#" className={""}>
                        <span>French</span>
                      </a>
                    </li>
                  </ul>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileNavigation
