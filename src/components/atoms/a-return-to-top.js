import React from "react"
import PropTypes from "prop-types"

const ReturnToTop = props => {
  return (
    <div className={"p-3 md:p-0 container " + props.additionalClassName}>
      <a
        href={"#"}
        className={"inline-block text-link py-6 underline"}
        onClick={e => {
          e.preventDefault()
          window.scrollTo({ top: 0, behavior: "smooth" })
        }}
      >
        Return to top
      </a>
    </div>
  )
}

ReturnToTop.propTypes = {
  additionalClassName: PropTypes.string,
}

ReturnToTop.defaultProps = {
  additionalClassName: `max-w-7xl`,
}

export default ReturnToTop
