import React from "react"
import {Link} from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import ATallContent from "../components/atoms/a-tall-content";

const IndexPage = () => (
  <Layout>
    <SEO title="Home"/>
    <section className="main-categories text-white">
      <div className="flex flex-wrap h-64 container mx-auto divide-x divide-white">
        <ATallContent
          image={`student_loans.jpg`}
          heading={`Student loans`}
          body={`Get all the info you need to apply for or manage repayment of your federal student loans.`}
          link={`/loans`}
          cta={`Explore`}
        />
        <ATallContent
          image={`grants_and_programs.jpg`}
          heading={`Grants and programs`}
          body={`Learn more about grant opportunities, applications, and details about
          grants awarded.`}
          link={`/grants`}
          cta={`Explore`}
        />
        <ATallContent
          image={`laws_and_guidance.jpg`}
          heading={`Laws and guidance`}
          body={`Find federal education legislation, regulations, guidance, and other policy documents.`}
          link={`/grants`}
          cta={`Explore`}
        />
        <ATallContent
          image={`data_and_research.jpg`}
          heading={`Data and research`}
          body={`Explore and download data and learn about education-related data and research.`}
          link={`/a`}
          cta={`Explore`}
        />
      </div>
    </section>
  </Layout>
)

export default IndexPage
