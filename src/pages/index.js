import React from "react"
import { Link } from "gatsby"
import { motion } from "framer-motion"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import ATallContent from "../components/atoms/a-tall-content"
import twitterSmall from "../images/twitter_small.svg"

const container = {
  hidden: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      y: { stiffness: 1000, velocity: -100 },
    },
  },
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="main-categories">
      <motion.div
        className="flex flex-wrap container mx-auto divide-x divide-white"
        variants={container}
        animate={"show"}
        initial={"hidden"}
      >
        <ATallContent
          image={`student_loans.jpg`}
          heading={`Student loans`}
          body={`Get all the info you need to apply for or manage repayment of your federal student loans.`}
          link={`/student-loans`}
          cta={`Explore`}
          className={"w-full sm:w-1/2 lg:w-1/4"}
        />
        <ATallContent
          image={`grants_and_programs.jpg`}
          heading={`Grants and programs`}
          body={`Learn more about grant opportunities, applications, and details about
          grants awarded.`}
          link={`/grants`}
          cta={`Explore`}
          className={"w-full sm:w-1/2 lg:w-1/4"}
        />
        <ATallContent
          image={`laws_and_guidance.jpg`}
          heading={`Laws and guidance`}
          body={`Find federal education legislation, regulations, guidance, and other policy documents.`}
          link={`/grants`}
          cta={`Explore`}
          className={"w-full sm:w-1/2 lg:w-1/4"}
        />
        <ATallContent
          image={`data_and_research.jpg`}
          heading={`Data and research`}
          body={`Explore and download data and learn about education-related data and research.`}
          link={`/a`}
          cta={`Explore`}
          className={"w-full sm:w-1/2 lg:w-1/4"}
        />
      </motion.div>
    </section>
    <div className={"container max-w-7xl py-14 text-gr-dark"}>
      <span className={"text-sm uppercase"}>Mission</span>
      <p className={"text-lg font-display font-bold mt-4"}>
        Our mission is to promote student achievement and preparation for global
        competitiveness by fostering educational excellence and ensuring equal
        access.
      </p>
    </div>
    <section className="container max-w-7xl about-highlights grid grid-cols-3 gap-3 mb-8">
      <ATallContent
        image={`about_ed_gov.jpg`}
        heading={`About Department of Education`}
        link={`/a`}
        cta={`Learn more`}
        className={"rounded-md overflow-hidden"}
      />
      <ATallContent
        image={`betsy_devos.jpg`}
        heading={`Betsy DeVos`}
        subtitle={"Secretary of Education"}
        link={`/a`}
        cta={`Learn more`}
        className={"rounded-md overflow-hidden"}
      />
      <ATallContent
        heading={`Betsy DeVos`}
        subtitle={"Secretary of Education"}
        link={`/a`}
        cta={`Learn more`}
        className={"bg-bl"}
        innerClassName={"p-4 py-8"}
      >
        <header>
          <svg
            viewBox={twitterSmall.viewBox}
            className={"w-8 m-4 text-black float-left"}
          >
            <use xlinkHref={`#${twitterSmall.id}`} />
          </svg>
          <strong className={"block p-4"}>@BetsyDeVosED</strong>
        </header>
        <p className={"font-display text-md leading-10 tracking-wide p-4"}>
          While these are challenging times, we must take this opportunity, and
          use these new resources, to transform education to meet the needs of
          all students, of all ages, everywhere. If we do that, we will emerge
          from #COVID19 stronger & better able to serve students than ever
          before.
        </p>
      </ATallContent>
    </section>
  </Layout>
)

export default IndexPage
