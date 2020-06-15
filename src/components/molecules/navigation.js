import React, { useState } from "react"
import Transition from "../transition"
import ReactMegaMenu from "../mega-menu"
import classNames from "classnames"

import {
  studentMenu,
  teacherMenu,
  collegeMenu,
  resourcesMenu,
  menu,
} from "../menu-data"

import "../../css/navigation.css"

// TODO: https://www.npmjs.com/package/react-click-outside
const Navigation = () => {
  const [nav, setNav] = useState(menu)
  return (
    <nav className="hidden md:flex bg-white font-body border-t-1 border-b-1 border-gr">
      <div className="container mx-auto relative z-10">
        <div className="flex justify-between h-16 relative">
          <div className="flex">
            <div className="hidden sm:flex">
              {nav.map((item, index) => {
                return (
                  <div className={"flex"} key={index}>
                    <button
                      key={item.label}
                      type="button"
                      className={[
                        "px-4 group space-x-2 inline-flex items-center text-base leading-4 font-bold cursor-pointer focus:outline-none focus:border-blue-300 focus:shadow-outline-blue",
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
                      /* make sure to change tabIndex when going into mega menu */
                      // tabIndex={item.isOpen ? 0 : isMenuOpen ? -1 : 0}
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
                        <div className="mt-16 font-body font-bold absolute inset-x-0 transform shadow-lg text-white bg-bl">
                          <ReactMegaMenu
                            onExit={activeLabel => {
                              const openMenus = Object.values(nav).filter(
                                i => i.isOpen
                              )
                              const hasOpenMenu = openMenus.length
                              if (!hasOpenMenu) return
                              const eventMatchesActiveMegaMenu =
                                openMenus[0]["label"] === activeLabel
                              // Menu that is open must match the id of the current firing event
                              if (!eventMatchesActiveMegaMenu) return
                              setNav(prevNav =>
                                prevNav.map(i => ({ ...i, isOpen: false }))
                              )
                              document
                                .querySelector(
                                  `[aria-controls='megamenu-${index}']`
                                )
                                .focus()
                            }}
                            label={item.label}
                            styleConfig={{
                              contentProps: {
                                className: "font-medium",
                                id: `megamenu-content-${index}`,
                                role: "tabpanel",
                              },
                              menuProps: {
                                className:
                                  "py-12 ml-6 w-1/5 border-r-1 border-gray-500",
                                role: "tablist",
                              },
                              menuItemProps: {
                                className: "p-4 cursor-default relative group",
                                "aria-selected": false,
                                role: "tab",
                                "aria-controls": `megamenu-content-`,
                                tabIndex: 0,
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
                                className:
                                  "p-4 bg-bl-highlight cursor-default relative group",
                              },
                              containerProps: {
                                className: "w-full",
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
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
