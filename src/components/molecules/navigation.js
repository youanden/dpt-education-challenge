import React, { useState } from "react"
import Transition from "../transition"
import ReactMegaMenu from "../mega-menu"
import classNames from "classnames"

import "../../css/navigation.css"

const ulClass = classNames("mt-14 mb-8 ml-8 h-56 flex flex-col flex-wrap")
const anchorClass = classNames("block p-2 mr-4")
const studentMenu = [
  {
    label: "Elementary School",
    key: 0,
    items: (
      <ul className={ulClass}>
        <li>
          <a href="#" className={anchorClass}>
            Afterschool care guide
          </a>
        </li>
        <li>
          <a href="#" className={anchorClass}>
            Early learning
          </a>
        </li>
        <li>
          <a href="#" className={anchorClass}>
            Homework help guide
          </a>
        </li>
        <li>
          <a href="#" className={anchorClass}>
            Tips for K-5 parents
          </a>
        </li>
        <li>
          <a href="#" className={anchorClass}>
            Games for home learning
          </a>
        </li>
      </ul>
    ),
  },
  {
    label: "Middle School",
    key: 1,
    items: (
      <ul className={ulClass}>
        <li>
          <a href="#" className={anchorClass}>
            Transitioning to middle school guide
          </a>
        </li>
        <li>
          <a href="#" className={anchorClass}>
            Prevent and address bullying guide
          </a>
        </li>
        <li>
          <a href="#" className={anchorClass}>
            Homework help guide
          </a>
        </li>
        <li>
          <a href="#" className={anchorClass}>
            School-recreation balance for pre-teens
          </a>
        </li>
        <li>
          <a href="#" className={anchorClass}>
            Drug abuse prevention for pre-teens
          </a>
        </li>
        <li>
          <a href="#" className={anchorClass}>
            Sex education for pre-teens
          </a>
        </li>
      </ul>
    ),
  },
  {
    label: "High School",
    key: 2,
    items: (
      <ul className={ulClass}>
        <li>
          <a href="#" className={anchorClass}>
            Transitioning to high school guide
          </a>
        </li>
        <li>
          <a href="#" className={anchorClass}>
            Choosing electives
          </a>
        </li>
        <li>
          <a href="#" className={anchorClass}>
            School-life balance for teens
          </a>
        </li>
        <li>
          <a href="#" className={anchorClass}>
            Sex education for teens
          </a>
        </li>
        <li>
          <a href="#" className={anchorClass}>
            Drug abuse prevention for teens
          </a>
        </li>
        <li>
          <a href="#" className={anchorClass}>
            Magnet schools guide
          </a>
        </li>
        <li>
          <a href="#" className={anchorClass}>
            Driving and road safety
          </a>
        </li>
        <li>
          <a href="#" className={anchorClass}>
            Bullying and cyber-bulling
          </a>
        </li>
      </ul>
    ),
  },
  {
    label: "General",
    key: 3,
    items: (
      <ul className={ulClass}>
        <li>
          <a href="#" className={anchorClass}>
            Report cards and progress reports
          </a>
        </li>
        <li>
          <a href="#" className={anchorClass}>
            PTSA participation
          </a>
        </li>
        <li>
          <a href="#" className={anchorClass}>
            School lunch programs
          </a>
        </li>
        <li>
          <a href="#" className={anchorClass}>
            Enroll undocumented children
          </a>
        </li>
        <li>
          <a href="#" className={anchorClass}>
            Khan Academy
          </a>
        </li>
        <li>
          <a href="#" className={anchorClass}>
            Codecademy
          </a>
        </li>
        <li>
          <a href="#" className={anchorClass}>
            Udacity
          </a>
        </li>
      </ul>
    ),
  },
]
const menu = [
  {
    label: "Students and parents",
    items: studentMenu,
    isOpen: false,
    menuProps: {
      className: "",
    },
  },
  {
    label: "Teachers and administrators",
    items: studentMenu,
    isOpen: false,
    menuProps: {
      className: "",
    },
  },
  {
    label: "College students",
    items: studentMenu,
    isOpen: false,
    menuProps: {
      className: "",
    },
  },
  {
    label: "State and local officials",
    items: studentMenu,
    isOpen: false,
    menuProps: {
      className: "",
    },
  },
  {
    label: "Specific resources",
    items: studentMenu,
    isOpen: false,
    menuProps: {
      className: "",
    },
  },
  {
    label: "ED Offices",
    items: [],
    isOpen: false,
    menuProps: {
      className: "",
    },
  },
]

const Navigation = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [nav, setNav] = useState(menu)
  const isMenuOpen = Object.values(nav).some(v => v.isOpen)
  return (
    <nav className="bg-white font-body">
      <div className="container mx-auto relative z-10">
        <div className="flex justify-between h-16 relative">
          <div className="flex">
            <div className="hidden sm:flex">
              {nav.map((item, index) => {
                return (
                  <>
                    <button
                      key={item.label}
                      type="button"
                      className={[
                        "px-4 group inline-flex items-center space-x-2 text-base leading-6 font-bold cursor-pointer",
                        item.isOpen ? "bg-bl text-white" : "text-gray-500",
                      ].join(" ")}
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
                      /* make sure to change tabindex when going into mega menu */
                      tabindex={item.isOpen ? 0 : isMenuOpen ? -1 : 0}
                      aria-controls={`megamenu-${index}`}
                      aria-expanded={item.isOpen}
                    >
                      <span>{item.label}</span>
                      {/* Item active: "text-gray-600", Item inactive: "text-gray-400" */}
                      {item.items.length ? (
                        <svg
                          className={[
                            "h-5 w-5 transition ease-in-out duration-150 transform",
                            item.isOpen
                              ? "-rotate-180 text-white"
                              : "text-gray-400",
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
                      ) : null}
                    </button>
                    {item.items.length ? (
                      <div className={classNames({ hidden: !item.isOpen })}>
                        <div className="mt-16 font-body font-bold absolute inset-x-0 transform shadow-lg text-white bg-bl h-menu">
                          <ReactMegaMenu
                            styleConfig={{
                              contentProps: {
                                className: "font-medium",
                                id: `megamenu-content-${index}`,
                                role: "tabpanel",
                              },
                              menuProps: {
                                className:
                                  "py-12 ml-6 w-1/6 border-r-1 border-gray-500",
                                role: "tablist",
                              },
                              menuItemProps: {
                                className:
                                  "p-4 hover:bg-bl-highlight cursor-default relative group",
                                "aria-selected": false,
                                role: "tab",
                                "aria-controls": `megamenu-content-${index}`,
                                tabindex: 0,
                              },
                              menuItemAfter: (
                                <svg
                                  className="flex-shrink-0 m-1 w-5 h-5 text-gray-300 group-hover:text-white align-middle float-right"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              ),
                              menuItemSelectedProps: {
                                "aria-selected": true,
                              },
                              containerProps: {
                                className: "w-full border-t-1 border-gray-500",
                                id: "megamenu-" + index,
                                "aria-hidden": !item.isOpen,
                              },
                            }} // defaults to an empty object. not recommended to be left blank.
                            // onExit={()=>{...}}  // a function to be called when a mouse leaves the container
                            data={item.items}
                          />
                        </div>
                      </div>
                    ) : null}
                  </>
                )
              })}
            </div>
          </div>
          {/*Student menu*/}
          <div className="-mr-2 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
              aria-label="Main menu"
              aria-expanded="false"
              onTouchEnd={() => setIsMobileOpen(!isMobileOpen)}
            >
              {/* Icon when menu is closed. */}
              {!isMobileOpen ? (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : null}
              {/* Icon when menu is open. */}
              {isMobileOpen ? (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : null}
            </button>
          </div>
        </div>
        {[].map((item, index) =>
          item.items.length ? (
            <div className={classNames({ hidden: !item.isOpen })}>
              <div className="font-body font-bold absolute inset-x-0 transform shadow-lg text-white bg-bl h-menu">
                <ReactMegaMenu
                  styleConfig={{
                    menuProps: {
                      className: "py-12 ml-6 w-1/6 border-r-1 border-gray-500",
                      role: "tablist",
                    },
                    contentProps: {
                      className: "",
                      id: `megamenu-content-${index}`,
                      role: "tabpanel",
                    },
                    menuItemProps: {
                      className: "p-4 hover:bg-bl-highlight cursor-default",
                      "aria-selected": false,
                      role: "tab",
                      "aria-controls": `megamenu-content-${index}`,
                      tabindex: 0,
                    },
                    menuItemSelectedProps: {
                      "aria-selected": true,
                    },
                    containerProps: {
                      className: "w-full border-t-1 border-gray-500",
                      id: "megamenu-" + index,
                      "aria-hidden": !item.isOpen,
                    },
                  }} // defaults to an empty object. not recommended to be left blank.
                  // onExit={()=>{...}}  // a function to be called when a mouse leaves the container
                  data={item.items}
                />
              </div>
            </div>
          ) : null
        )}
      </div>
      {/*
        Mobile menu, toggle classes based on menu state.

        Menu open: "block", Menu closed: "hidden"
      */}
      <div className={`${isMobileOpen ? "block" : "hidden sm:hidden"}`}>
        <div className="pt-2 pb-3">
          <a
            href="#"
            className="block pl-3 pr-4 py-2 border-l-4 border-indigo-500 text-base font-medium text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 transition duration-150 ease-in-out"
          >
            Students and parents
          </a>
          <a
            href="#"
            className="mt-1 block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out"
          >
            Team
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
