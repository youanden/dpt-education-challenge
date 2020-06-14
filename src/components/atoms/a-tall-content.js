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
  return (
    <>
      <motion.div className="w-full sm:w-1/2 lg:w-1/4" variants={item}>
        <Link to={props.link}>
          <div className="flex items-end w-full bg-gray-100 sm:py-12 py-16 sm:px-12 px-6 relative h-banner">
            {image ? (
              <Img
                fluid={image}
                className={
                  "w-full object-cover h-full object-center block absolute inset-0"
                }
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
              <h2 className="text-lg font-display font-medium title-font mb-2">
                {props.heading}
              </h2>
              <p className="text-base pb-6">{props.body}</p>
              <span className="inline-flex rounded-md">
                <button type="button" className="btn btn-ghost">
                  {props.cta}
                </button>
              </span>
            </div>
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
  link: PropTypes.string,
  cta: PropTypes.string,
}

ATallContent.defaultProps = {
  image: ``,
  heading: `Test Heading`,
  body: ``,
  link: ``,
  cta: `Explore`,
}

export default ATallContent
