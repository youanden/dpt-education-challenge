import React from "react"
const easeInCubic = function (t) {
  return t * t * t
}

const ReturnToTop = () => {
  return (
    <button
      class={"text-bl-link py-6 underline"}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      Return to top
    </button>
  )
}

export default ReturnToTop
