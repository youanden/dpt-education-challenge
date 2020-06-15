import React from "react"
import { motion } from "framer-motion"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ATallContent from "../components/atoms/a-tall-content"
import twitterIcon from "../images/twitter_small.svg"
import mailIcon from "../images/mail.svg"
import helpIcon from "../images/help.svg"
import phoneIcon from "../images/phone.svg"
import ReturnToTop from "../components/atoms/a-return-to-top"
import PageDivider from "../components/atoms/a-page-divider"

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
    <section className="main-categories container md:max-w-7xl lg:max-w-max-content">
      <motion.div
        className="grid grid-cols-2 lg:grid-cols-4 gap-1"
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
          className={""}
        />
        <ATallContent
          image={`grants_and_programs.jpg`}
          heading={`Grants and programs`}
          body={`Learn more about grant opportunities, applications, and details about
          grants awarded.`}
          link={`#`}
          cta={`Explore`}
          className={""}
        />
        <ATallContent
          image={`laws_and_guidance.jpg`}
          heading={`Laws and guidance`}
          body={`Find federal education legislation, regulations, guidance, and other policy documents.`}
          link={`#`}
          cta={`Explore`}
          className={""}
        />
        <ATallContent
          image={`data_and_research.jpg`}
          heading={`Data and research`}
          body={`Explore and download data and learn about education-related data and research.`}
          link={`#`}
          cta={`Explore`}
          className={""}
        />
      </motion.div>
    </section>
    <div
      className={
        "container flex flex-wrap justify-center px-3 xl:px-0 max-w-7xl py-14 text-gr-dark"
      }
    >
      <span className={"w-full text-sm tracking-wider uppercase"}>Mission</span>
      <p className={"text-lg font-display font-bold mt-2"}>
        Our mission is to promote student achievement and preparation for global
        competitiveness by fostering educational excellence and ensuring equal
        access.
      </p>
    </div>
    <section className="container md:px-3 xl:px-0 max-w-7xl about-highlights grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
      <ATallContent
        image={`about_ed_gov.jpg`}
        heading={`About Department of Education`}
        link={`/a`}
        cta={`Learn more`}
        className={
          "mx-3 md:m-0 h-mbanner md:h-banner rounded-md overflow-hidden"
        }
        additionalInnerClassName={"h-mbanner md:h-banner"}
      />
      <ATallContent
        image={`betsy_devos.jpg`}
        alt={
          "Betsy Devos posing for an official portrait with a bookshelf and Department of Education flag in the background."
        }
        heading={`Betsy DeVos`}
        subtitle={"Secretary of Education"}
        link={`/a`}
        cta={`Learn more`}
        className={
          "mx-3 md:m-0 h-mbanner md:h-banner rounded-md overflow-hidden"
        }
        additionalInnerClassName={"h-mbanner md:h-banner"}
      />
      <ATallContent
        link={`/a`}
        className={"mx-3 md:m-0 bg-bl overflow-hidden rounded-md"}
        innerClassName={"md:h-banner p-4 py-8"}
      >
        <div className="h-full px-4 md:p-0 flex flex-col justify-between">
          <header>
            <svg
              viewBox={twitterIcon.viewBox}
              className={"w-8 m-4 text-black float-left"}
            >
              <use xlinkHref={`#${twitterIcon.id}`} />
            </svg>
            <strong className={"block p-4"}>@BetsyDeVosED</strong>
          </header>
          <p
            className={
              "font-display text-base md:text-base lg:text-md leading-10 tracking-wide p-2"
            }
          >
            While these are challenging times, we must take this opportunity,
            and use these new resources, to transform education to meet the
            needs of all students, of all ages, everywhere. If we do that, we
            will emerge from #COVID19 stronger & better able to serve students
            than ever before.
          </p>
          <span className={"p-2"}>05/01/2020, 5:48pm</span>
        </div>
      </ATallContent>
    </section>
    <section className="container px-3 xl:px-0 max-w-7xl">
      <div className="text-left flex mx-auto flex-wrap mb-8 md:border-b-1">
        <button className="py-3 mr-12 text-sm w-2/3 sm:w-auto sm:justify-start inline-flex items-center leading-none hover:text-gray-900 tracking-wider uppercase border-b border-bl">
          Press Releases
        </button>
        <button className="py-3 mr-12 text-sm w-2/3 sm:w-auto sm:justify-start border-b-2 inline-flex items-center leading-none tracking-wider uppercase border-b border-gr md:border-white">
          Press Briefings
        </button>
        <button className="py-3 mr-12 text-sm w-2/3 sm:w-auto sm:justify-start border-b-2 inline-flex items-center leading-none tracking-wider uppercase border-b border-gr md:border-white">
          Press Kit
        </button>
        <button className="py-3 mr-12 text-sm w-2/3 sm:w-auto sm:justify-start border-b-2 inline-flex items-center leading-none tracking-wider uppercase border-b border-gr md:border-white">
          ED Blog
        </button>
      </div>
      <section className="mb-16">
        <div className="container mx-auto">
          <div className="-my-8 divide-y-1 divide-gr">
            <a href={"#"} className="py-8 flex flex-wrap md:flex-no-wrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="mt-1 text-gray-500 text-sm">Apr 24, 2020</span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-md font-bold text-gr-dark">
                  Massachusetts Becomes First State to Qualify to Test New and
                  Innovative Ways to Assess Student Achievement Next School Year
                </h2>
              </div>
            </a>
            <a href={"#"} className="py-8 flex flex-wrap md:flex-no-wrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="mt-1 text-gray-500 text-sm">Apr 24, 2020</span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-md font-bold text-gr-dark">
                  Secretary DeVos Expands Second Chance Pell Experiment, More
                  than Doubling Opportunities for Incarcerated Students to Gain
                  Job Skills and Earn Postsecondary Credentials
                </h2>
              </div>
            </a>
            <a href={"#"} className="py-8 flex flex-wrap md:flex-no-wrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="mt-1 text-gray-500 text-sm">Apr 23, 2020</span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-md font-bold text-gr-dark">
                  Secretary DeVos Makes Available Over $13 Billion in Emergency
                  Coronavirus Relief to Support Continued Education for K-12
                  Students
                </h2>
              </div>
            </a>
            <a href={"#"} className="py-8 flex flex-wrap md:flex-no-wrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="mt-1 text-gray-500 text-sm">Apr 23, 2020</span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-md font-bold text-gr-dark">
                  Secretary DeVos Calls on Wealthy Institutions to Reject
                  Taxpayer Emergency Funds, Congress to Change Eligibility
                </h2>
              </div>
            </a>
            <a href={"#"} className="py-8 flex flex-wrap md:flex-no-wrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="mt-1 text-gray-500 text-sm">Apr 22, 2020</span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-md font-bold text-gr-dark">
                  Secretary DeVos Delivers $6 Billion in Additional Grant
                  Funding to Support Continued Education at America's Colleges,
                  Universities
                </h2>
              </div>
            </a>
            <a href="#" className="btn-blue font-medium">
              Read more
            </a>
          </div>
        </div>
      </section>
    </section>
    <section className="p-3 container max-w-7xl mt-16 top-articles">
      <div className="md:grid md:grid-cols-3 gap-3 relative">
        <ATallContent
          image={`covid_19.jpg`}
          alt={"Image of Coronavirus"}
          heading={`Coronavirus Information`}
          layout={"square"}
          link={`#`}
          cta={`Learn more`}
          innerClassName={``}
          imageWrapperClassName={`h-mbanner rounded-md`}
          shadowOverlay={false}
          className={"relative mb-8 md:mb-0"}
          additionalInnerClassName={""}
        />
        <ATallContent
          image={`freedom_scholarships.jpg`}
          alt={
            "Image of Betsy DevOs speaking about Education Freedom Scholarships"
          }
          heading={`Education Freedom Scholarships`}
          layout={"square"}
          link={`#`}
          cta={`Learn more`}
          innerClassName={``}
          imageWrapperClassName={`h-mbanner rounded-md`}
          shadowOverlay={false}
          className={"relative mb-8 md:mb-0"}
          additionalInnerClassName={""}
        />
        <ATallContent
          image={`safer_schools.jpg`}
          alt={
            "Accompanying Safer School Image of a young student taking notes"
          }
          heading={`Find Resources to Create a Safer School`}
          layout={"square"}
          link={`#`}
          cta={`Learn more`}
          innerClassName={``}
          imageWrapperClassName={`h-mbanner rounded-md`}
          shadowOverlay={false}
          className={"relative mb-8 md:mb-0"}
          additionalInnerClassName={""}
        />
      </div>
    </section>
    <div className="flex flex-col container items-start">
      <PageDivider />
      <section className="p-3 md:p-0 container lg:grid grid-cols-3 gap-3 max-w-7xl my-8">
        <a
          href="#"
          className="h-26 mb-3 flex items-center bg-bl text-white font-display font-bold text-md px-4 md:px-8 py-2 md:py-6 rounded-md"
        >
          <svg viewBox={mailIcon.viewBox} className={"pr-8 w-16"}>
            <use xlinkHref={`#${mailIcon.id}`} />
          </svg>
          <span className="w-4/5">Subscribe to our email updates</span>
        </a>
        <a
          href="#"
          className="h-26 mb-3 flex items-center bg-bl text-white font-display font-bold text-md px-4 md:px-8 py-2 md:py-6 rounded-md"
        >
          <svg viewBox={helpIcon.viewBox} className={"pr-8 w-16"}>
            <use xlinkHref={`#${helpIcon.id}`} />
          </svg>
          <span className="w-4/5">Frequently asked questions</span>
        </a>
        <a
          href="#"
          className="h-26 mb-3 flex items-center bg-bl text-white font-display font-bold text-md px-4 md:px-8 py-2 md:py-6 rounded-md"
        >
          <svg viewBox={phoneIcon.viewBox} className={"pr-8 w-16"}>
            <use xlinkHref={`#${phoneIcon.id}`} />
          </svg>
          <span className="w-4/5">Contact Department of Education</span>
        </a>
      </section>
      <ReturnToTop />
    </div>
  </Layout>
)

export default IndexPage
