import React from "react"

const ReturnToTop = () => {
  return (
    <div className={"container max-w-7xl"}>
      <button
        className={"text-bl-link py-6 underline"}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        Return to top
      </button>
    </div>
  )
}

export default ReturnToTop
