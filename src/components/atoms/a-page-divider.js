import React from "react"
import divider from "../../images/divider.svg"

const PageDivider = () => {
  return (
    <div
      className={
        "container max-w-7xl flex items-center justify-center relative text-center m-auto my-8"
      }
    >
      <div className="border-b absolute inset-x-0 top-2"></div>
      <svg
        viewBox={divider.viewBox}
        className={"w-24 relative z-10 bg-white px-4"}
      >
        <use xlinkHref={`#${divider.id}`} />
      </svg>
    </div>
  )
}

export default PageDivider
