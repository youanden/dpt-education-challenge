import React, { useState } from "react"

import {
  studentMenu,
  teacherMenu,
  collegeMenu,
  resourcesMenu,
  menu,
} from "../menu-data"

// TODO: https://www.npmjs.com/package/react-click-outside
const MobileNavigation = () => {
  return (
    <button
      type={"button"}
      className={"block md:hidden btn-menu bg-bl text-white ml-2"}
    >
      Menu
    </button>
  )
}

export default MobileNavigation
