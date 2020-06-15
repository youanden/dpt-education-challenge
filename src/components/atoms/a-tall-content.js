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
          alt={props.alt}
          className={"block absolute inset-0 " + props.imageWrapperClassName}
          style={{
            position: "absolute",
          }}
        />
      ) : null}
      <div
        className={"inset-0 absolute " + (props.shadowOverlay ? "" : "hidden")}
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0) 35%, rgba(0,0,0,0.4) 100%)",
        }}
      ></div>
      {props.layout === "overlay" ? (
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
      ) : null}
      {props.layout === "square" ? (
        <>
          <div className="spacer h-mbanner"></div>
          <h2 className="mt-4 text-lg font-display font-bold title-font">
            {props.heading}
          </h2>
          <button type="button" className="underline text-bl-link">
            {props.cta}
          </button>
        </>
      ) : null}
    </>
  )

  return (
    <>
      <motion.div
        className={
          props.className + (props.layout === "overlay" ? " text-white" : "")
        }
        variants={item}
      >
        <Link to={props.link} className={"block"}>
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
  image: PropTypes.string,
  alt: PropTypes.string,
  heading: PropTypes.string,
  body: PropTypes.string,
  subtitle: PropTypes.string,
  link: PropTypes.string,
  cta: PropTypes.string,
  className: PropTypes.string,
  innerClassName: PropTypes.string,
  additionalInnerClassName: PropTypes.string,
  imageWrapperClassName: PropTypes.string,
  layout: PropTypes.string,
  shadowOverlay: PropTypes.bool,
}

ATallContent.defaultProps = {
  image: ``,
  alt: ``,
  heading: `Test Heading`,
  body: ``,
  subtitle: ``,
  link: ``,
  cta: `Explore`,
  className: `text-white bg-gray-100`,
  innerClassName: `flex items-end w-full p-4 md:p-10 relative h-64 md:h-banner`,
  additionalInnerClassName: ``,
  imageWrapperClassName: ``,
  layout: `overlay`,
  shadowOverlay: true,
}

export default ATallContent
