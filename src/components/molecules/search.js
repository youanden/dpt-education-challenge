import React from "react"
import PropTypes from "prop-types"

const Search = ({ id }) => {
  const elId = "search" + (id ? id : "")
  return (
    <div className="max-w-lg w-full lg:max-w-xs">
      <label htmlFor={elId} className="sr-only">
        What are you searching for...
      </label>
      <div className="relative">
        <input
          id={elId}
          className="block w-full pr-10 pl-3 py-2 border-1 border-bl rounded leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:border-blue-300 focus:shadow-outline-blue sm:text-sm transition duration-150 ease-in-out"
          placeholder="What are you searching for..."
          type="search"
        />
        <div className="bg-bl absolute inset-y-0 right-0 px-4 flex items-center pointer-events-none rounded-r-md">
          <svg
            className="h-5 w-5 text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}
Search.propTypes = {
  id: PropTypes.string,
}
Search.defaultProps = {
  id: ``,
}

export default Search
