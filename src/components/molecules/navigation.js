import React, {useState} from "react"
import Transition from "../transition"
import ReactMegaMenu from "react-mega-menu"
import classNames from "classnames"

import "../../css/navigation.css"

const studentMenu = [
  {
    label: 'Elementary School',
    key: 0,
    items: (
      <div>
        Content 0
      </div>
    )
  },
  {
    label: 'Middle School',
    key: 1,
    items: (
      <div>
        Content 1
      </div>
    )
  },
  {
    label: 'High School',
    key: 2,
    items: (
      <div>
        Content 2
      </div>
    )
  },
  {
    label: 'General',
    key: 3,
    items: (
      <div>
        Content 3
      </div>
    )
  },
]



const Navigation = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [isStudentMenuOpen, setIsStudentMenuOpen] = useState(false)
  const studentMenuClass = classNames('px-4 group inline-flex items-center space-x-2 text-base leading-6 font-bold focus:outline-none transition ease-in-out duration-150', {
    'bg-blue-800 text-white': isStudentMenuOpen,
    'text-gray-500': !isStudentMenuOpen
  })
  const studentMenuCaretClass = classNames('h-5 w-5 transition ease-in-out duration-150 transform', {
    '-rotate-180 text-white': isStudentMenuOpen,
    'text-gray-400': !isStudentMenuOpen
  })
  return (
    <nav className="bg-white font-body">
      <div className="container mx-auto relative z-10">
        <div className="flex justify-between h-16 relative">
          <div className="flex">
            <div className="hidden sm:ml-6 sm:flex">
              <button type="button" className={studentMenuClass} onClick={() => setIsStudentMenuOpen(!isStudentMenuOpen)}>
                <span>Students and parents</span>
                {/* Item active: "text-gray-600", Item inactive: "text-gray-400" */}
                <svg className={studentMenuCaretClass} viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
          {/*Student menu*/}
          <div className="-mr-2 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out" aria-label="Main menu" aria-expanded="false" onTouchEnd={() => setIsMobileOpen(!isMobileOpen)}>
              {/* Icon when menu is closed. */}
              {!isMobileOpen ? <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg> : null}
              {/* Icon when menu is open. */}
              {isMobileOpen ? <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg> : null}
            </button>
          </div>
        </div>

        <Transition
          show={isStudentMenuOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="font-body font-bold absolute inset-x-0 transform shadow-lg text-white bg-blue-800 h-menu">
            <ReactMegaMenu
               styleConfig={{
                 menuProps: {
                   className: 'py-12 ml-6 w-1/6 border-r-1 border-gray-500'
                 },
                 contentProps: {
                    className: 'p-4'
                 },
                 menuItemProps: {
                   className: 'p-4 hover:bg-blue-500 cursor-default'

                 },
                 menuItemSelectedProps: {

                 },
                 containerProps: {
                   className: 'w-full'
                 }
               }}   // defaults to an empty object. not recommended to be left blank.
               // onExit={()=>{...}}  // a function to be called when a mouse leaves the container
               data={studentMenu}        // array of data to be rendered
             />
          </div>
        </Transition>
      </div>
      {/*
        Mobile menu, toggle classes based on menu state.

        Menu open: "block", Menu closed: "hidden"
      */}
      <div className={`${isMobileOpen ? 'block' : 'hidden sm:hidden'}`}>
        <div className="pt-2 pb-3">
          <a href="#" className="block pl-3 pr-4 py-2 border-l-4 border-indigo-500 text-base font-medium text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 transition duration-150 ease-in-out">Students and parents
          </a>
          <a href="#" className="mt-1 block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out">Team
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navigation