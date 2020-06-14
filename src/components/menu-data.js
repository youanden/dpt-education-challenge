import classNames from "classnames"
import React from "react"

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
const teacherMenu = [
  {
    label: "Teachers",
    key: 0,
    items: (
      <ul className={ulClass}>
        <li>
          <a href="#" className={anchorClass}>
            Teaching resources
          </a>
        </li>
        <li>
          <a href="#" className={anchorClass}>
            Become a teacher
          </a>
        </li>
        <li>
          <a href="#" className={anchorClass}>
            Teaching jobs
          </a>
        </li>
        <li>
          <a href="#" className={anchorClass}>
            ED Resources
          </a>
        </li>
        <li>
          <a href="#" className={anchorClass}>
            TEACH.org
          </a>
        </li>
      </ul>
    ),
  },
  {
    label: "Administrators",
    key: 1,
    items: (
      <ul className={ulClass}>
        <li>
          <a href="#" className={anchorClass}>
            Research and statistics
          </a>
        </li>
        <li>
          <a href="#" className={anchorClass}>
            Facts and figures
          </a>
        </li>
        <li>
          <a href="#" className={anchorClass}>
            School district demographics
          </a>
        </li>
        <li>
          <a href="#" className={anchorClass}>
            Evidence-based education
          </a>
        </li>
        <li>
          <a href="#" className={anchorClass}>
            Supplemental ed services
          </a>
        </li>
      </ul>
    ),
  },
]
const collegeMenu = [
  {
    label: "Get a student loan",
    key: 0,
    items: (
      <ul className={ulClass}>
        <li>
          <a href="#" className={anchorClass}>
            My Federal Student Aid login
          </a>
        </li>
        <li>
          <a href="#" className={anchorClass}>
            FSA ID login
          </a>
        </li>
        <li>
          <a href="#" className={anchorClass}>
            FAFSA
          </a>
        </li>
        <li>
          <a href="#" className={anchorClass}>
            Eligibility requirements
          </a>
        </li>
        <li>
          <a href="#" className={anchorClass}>
            Funding your education
          </a>
        </li>
        <li>
          <a href="#" className={anchorClass}>
            Estimates of aid
          </a>
        </li>
      </ul>
    ),
  },
  {
    label: "Manage your student loan",
    key: 1,
    items: (
      <ul className={ulClass}>
        <li>
          <a href="#" className={anchorClass}>
            Directory of loan servicers
          </a>
        </li>
        <li>
          <a href="#" className={anchorClass}>
            Repaying loans
          </a>
        </li>
        <li>
          <a href="#" className={anchorClass}>
            Income-driven repayment
          </a>
        </li>
        <li>
          <a href="#" className={anchorClass}>
            Loan consolidation
          </a>
        </li>
        <li>
          <a href="#" className={anchorClass}>
            Defaulted student loans
          </a>
        </li>
        <li>
          <a href="#" className={anchorClass}>
            Defer student loans
          </a>
        </li>
        <li>
          <a href="#" className={anchorClass}>
            Cancel student loans
          </a>
        </li>
        <li>
          <a href="#" className={anchorClass}>
            Student loan forgiveness
          </a>
        </li>
      </ul>
    ),
  },
  {
    label: "Grants",
    key: 2,
    items: (
      <ul className={ulClass}>
        <li>
          <a href="#" className={anchorClass}>
            Federal Work-Study program
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
            Accreditation
          </a>
        </li>
        <li>
          <a href="#" className={anchorClass}>
            Campus security
          </a>
        </li>
        <li>
          <a href="#" className={anchorClass}>
            Job placement statistics
          </a>
        </li>
        <li>
          <a href="#" className={anchorClass}>
            Choosing your major
          </a>
        </li>
      </ul>
    ),
  },
]
const resourcesMenu = [
  {
    label: "Non-profit organizations",
    key: 0,
    items: <ul className={ulClass}></ul>,
  },
  {
    label: "Contractors",
    key: 1,
    items: (
      <ul className={ulClass}>
        <li>
          <a href="#" className={anchorClass}>
            Guide to becoming an ED contractor
          </a>
        </li>
        <li>
          <a href="#" className={anchorClass}>
            Find contracts to bid on
          </a>
        </li>
        <li>
          <a href="#" className={anchorClass}>
            Contractor policy and regulations
          </a>
        </li>
      </ul>
    ),
  },
  {
    label: "News and press organizations",
    key: 2,
    items: (
      <ul className={ulClass}>
        <li>
          <a href="#" className={anchorClass}>
            Press releases
          </a>
        </li>
        <li>
          <a href="#" className={anchorClass}>
            Press briefings
          </a>
        </li>
        <li>
          <a href="#" className={anchorClass}>
            Press kit
          </a>
        </li>
        <li>
          <a href="#" className={anchorClass}>
            ED blog
          </a>
        </li>
      </ul>
    ),
  },
  {
    label: "Community advocates",
    key: 3,
    items: (
      <ul className={ulClass}>
        <li>
          <a href="#" className={anchorClass}>
            Local chapter directory
          </a>
        </li>
        <li>
          <a href="#" className={anchorClass}>
            Local resources for K-5
          </a>
        </li>
        <li>
          <a href="#" className={anchorClass}>
            Volunteer
          </a>
        </li>
        <li>
          <a href="#" className={anchorClass}>
            Tutoring groups guide
          </a>
        </li>
        <li>
          <a href="#" className={anchorClass}>
            Training for parents
          </a>
        </li>
      </ul>
    ),
  },
  {
    label: "Technical training",
    key: 4,
    items: (
      <ul className={ulClass}>
        <li>
          <a href="#" className={anchorClass}>
            Directory of technical training schools
          </a>
        </li>
        <li>
          <a href="#" className={anchorClass}>
            Training grants
          </a>
        </li>
        <li>
          <a href="#" className={anchorClass}>
            Guide for foremen
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
    items: teacherMenu,
    isOpen: false,
    menuProps: {
      className: "",
    },
  },
  {
    label: "College students",
    items: collegeMenu,
    isOpen: false,
    menuProps: {
      className: "",
    },
  },
  {
    label: "State and local officials",
    items: [],
    isOpen: false,
    menuProps: {
      className: "",
    },
  },
  {
    label: "Specific resources",
    items: resourcesMenu,
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

export { studentMenu, teacherMenu, collegeMenu, resourcesMenu, menu }
