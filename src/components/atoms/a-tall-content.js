import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { motion } from "framer-motion"
import PropTypes from "prop-types"
import Header from "../molecules/header"
import Img from "gatsby-image"
import { useStaticImage } from "../../hooks/use-static-image"
const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
}
const ATallContent = props => {
  const images = useStaticImage()
  const image = images[props.image]
  const { children } = props
  const content = children ? (
    children
  ) : (
    <>
      {image ? (
        <Img
          fluid={image}
          className={"block absolute inset-0"}
          style={{
            position: "absolute",
          }}
        />
      ) : null}
      <div
        className="inset-0 absolute"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0) 35%, rgba(0,0,0,0.4) 100%)",
        }}
      ></div>
      <div className="relative z-10 w-full ">
        {props.subtitle ? (
          <span
            className={
              "block text-sm font-medium tracking-wider uppercase mb-2"
            }
          >
            {props.subtitle}
          </span>
        ) : null}
        <h2 className="text-lg font-display font-bold title-font md:mb-4">
          {props.heading}
        </h2>
        {props.body ? (
          <p className="hidden md:block text-base pb-6">{props.body}</p>
        ) : null}
        <span className="hidden md:inline-flex rounded-md">
          <button type="button" className="btn btn-ghost">
            {props.cta}
          </button>
        </span>
      </div>
    </>
  )
  return (
    <>
      <motion.div
        className={["text-white", props.className].join(" ")}
        variants={item}
      >
        <Link to={props.link}>
          <div
            className={[
              props.innerClassName,
              props.additionalInnerClassName,
            ].join(" ")}
          >
            {content}
          </div>
        </Link>
      </motion.div>
    </>
  )
}

ATallContent.propTypes = {
  src: PropTypes.string,
  heading: PropTypes.string,
  body: PropTypes.string,
  subtitle: PropTypes.string,
  link: PropTypes.string,
  cta: PropTypes.string,
  className: PropTypes.string,
  innerClassName: PropTypes.string,
  additionalInnerClassName: PropTypes.string,
}

ATallContent.defaultProps = {
  image: ``,
  heading: `Test Heading`,
  body: ``,
  subtitle: ``,
  link: ``,
  cta: `Explore`,
  className: `bg-gray-100`,
  innerClassName: `flex items-end w-full p-4 md:p-10 relative h-64 md:h-banner`,
  additionalInnerClassName: ``,
}

export default ATallContent
