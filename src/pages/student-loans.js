import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../css/loans.css"

const StudentLoans = () => (
  <Layout>
    <SEO title="Student loans, forgiveness" />
    <div className={"container mx-auto"}>
      <nav
        className={"hidden sm:flex items-center leading-5 font-sm mt-2 mb-10"}
      >
        <a
          href="/"
          className={
            "text-sm text-gr-light hover:text-gr-dark transition duration-150 ease-in-out"
          }
        >
          Home
        </a>
        <span className={"text-sm mx-2 text-gr-light"}>/</span>
        <span
          className={
            "text-sm text-gr-light transition duration-150 ease-in-out"
          }
        >
          Student loans, forgiveness
        </span>
      </nav>
      <div className={"flex row"}>
        <div className={"w-4/5 pr-20 text-gr-light"}>
          <section className={"pb-15 border-b border-gr-lighter"}>
            <h1 className={"text-h1 font-bold mb-8"}>
              Student loans, forgiveness
            </h1>
            <p className={"text-base"}>
              The US Department of Education provides college and university
              students with low-interest federal student loans and other aid. To
              see if you qualify for a Pell grant, direct loan, Parent PLUS
              loan, or other federal aid, follow the steps below:
            </p>
          </section>
          <section className={"py-15 border-b border-gr-lighter"}>
            <h2 className={"text-h2 mb-8 font-bold"}>
              Review helpful information
            </h2>
            <p className={"text-base"}>
              Click the video to learn how to receive student loans, grants, and
              other federal aid.
            </p>
            <a href="#" className={"text-bl text-link underline block"}>
              Eligibility requirements
            </a>
            <a href="#" className={"text-bl text-link underline block"}>
              Funding your education
            </a>
            <a href="#" className={"text-bl text-link underline block"}>
              Estimates of aid
            </a>
          </section>
          <section className={"py-15 mb-15 border-b border-gr-lighter"}>
            <h2 className={"text-h2 mb-8 font-bold"}>
              Manage your student loans
            </h2>
            <div className={"grid gap-8 mt-10 md:mt-0 order-1 xl:order-none"}>
              <div className={"md:grid md:grid-cols-2 md:gap-8"}>
                <article>
                  <h3 className={"text-h3 font-bold"}>Article Title</h3>
                  <p className={"text-gr-light text-base my-2"}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Accusamus ad, alias consequatur cum dolores et expedita hic
                    illo ipsum laudantium neque nesciunt, nihil nulla
                    perspiciatis quidem quod quos ratione sunt!
                  </p>
                  <a href="#" className={"text-bl text-link underline"}>
                    Article Link
                  </a>
                </article>
                <article>
                  <h3 className={"text-h3 font-bold"}>Article Title</h3>
                  <p className={"text-gr-light text-base my-2"}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Accusamus ad, alias consequatur cum dolores et expedita hic
                    illo ipsum laudantium neque nesciunt, nihil nulla
                    perspiciatis quidem quod quos ratione sunt!
                  </p>
                  <a href="#" className={"text-bl text-link underline"}>
                    Article Link
                  </a>
                </article>
                <article>
                  <h3 className={"text-h3 font-bold"}>Article Title</h3>
                  <p className={"text-gr-light text-base my-2"}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Accusamus ad, alias consequatur cum dolores et expedita hic
                    illo ipsum laudantium neque nesciunt, nihil nulla
                    perspiciatis quidem quod quos ratione sunt!
                  </p>
                  <a href="#" className={"text-bl text-link underline"}>
                    Article Link
                  </a>
                </article>
                <article>
                  <h3 className={"text-h3 font-bold"}>Article Title</h3>
                  <p className={"text-gr-light text-base my-2"}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Accusamus ad, alias consequatur cum dolores et expedita hic
                    illo ipsum laudantium neque nesciunt, nihil nulla
                    perspiciatis quidem quod quos ratione sunt!
                  </p>
                  <a href="#" className={"text-bl text-link underline"}>
                    Article Link
                  </a>
                </article>
                <article>
                  <h3 className={"text-h3 font-bold"}>Article Title</h3>
                  <p className={"text-gr-light text-base my-2"}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Accusamus ad, alias consequatur cum dolores et expedita hic
                    illo ipsum laudantium neque nesciunt, nihil nulla
                    perspiciatis quidem quod quos ratione sunt!
                  </p>
                  <a href="#" className={"text-bl text-link underline"}>
                    Article Link
                  </a>
                </article>
              </div>
            </div>
          </section>
        </div>

        <div className={"in-this-section w-1/5"}>
          <h5
            className={
              "uppercase text-h5 font-semibold font-body border-b border-gr-lighter py-1"
            }
          >
            In this section
          </h5>
          <nav>
            <li
              className={
                "group active flex items-center pr-2 py-1 text-link leading-5 font-bold text-bl hover:font-bold focus:font-bold focus:outline-none transition ease-in-out duration-150"
              }
              aria-current="page"
            >
              <a href={"#"} className={"truncate text-bl text-link"}>
                Student loans, forgiveness
              </a>
            </li>
            <li
              className={
                "mt-1 group flex items-center pr-2 py-1 text-link leading-5 font-normal text-bl hover:font-bold focus:outline-none focus:font-bold transition ease-in-out duration-150"
              }
            >
              <a href={"#"} className={"truncate text-bl text-link"}>
                My Federal Student Aid login
              </a>
            </li>
            <li
              className={
                "mt-1 group flex items-center pr-2 py-1 text-link leading-5 font-normal text-bl hover:font-bold focus:outline-none focus:font-bold transition ease-in-out duration-150"
              }
            >
              <a href={"#"} className={"truncate text-bl text-link"}>
                FSA ID login
              </a>
            </li>
            <li
              className={
                "mt-1 group flex items-center pr-2 py-1 text-link leading-5 font-normal text-bl hover:font-bold focus:outline-none focus:font-bold transition ease-in-out duration-150"
              }
            >
              <a href={"#"} className={"truncate text-bl text-link"}>
                Directory of loan servicers
              </a>
            </li>
            <li
              className={
                "mt-1 group flex items-center pr-2 py-1 text-link leading-5 font-normal text-bl hover:font-bold focus:outline-none focus:font-bold transition ease-in-out duration-150"
              }
            >
              <a href={"#"} className={"truncate text-bl text-link"}>
                Repaying your loans
              </a>
            </li>
            <li
              className={
                "mt-1 group flex items-center pr-2 py-1 text-link leading-5 font-normal text-bl hover:font-bold focus:outline-none focus:font-bold transition ease-in-out duration-150"
              }
            >
              <a href={"#"} className={"truncate text-bl text-link"}>
                Income-driven repayment
              </a>
            </li>
            <li
              className={
                "mt-1 group flex items-center pr-2 py-1 text-link leading-5 font-normal text-bl hover:font-bold focus:outline-none focus:font-bold transition ease-in-out duration-150"
              }
            >
              <a href={"#"} className={"truncate text-bl text-link"}>
                Loan consolidation
              </a>
            </li>
            <li
              className={
                "mt-1 group flex items-center pr-2 py-1 text-link leading-5 font-normal text-bl hover:font-bold focus:outline-none focus:font-bold transition ease-in-out duration-150"
              }
            >
              <a href={"#"} className={"truncate text-bl text-link"}>
                Defaulted student loans
              </a>
            </li>
            <li
              className={
                "mt-1 group flex items-center pr-2 py-1 text-link leading-5 font-normal text-bl hover:font-bold focus:outline-none focus:font-bold transition ease-in-out duration-150"
              }
            >
              <a href={"#"} className={"truncate text-bl text-link"}>
                Defer student loans
              </a>
            </li>
            <li
              className={
                "mt-1 group flex items-center pr-2 py-1 text-link leading-5 font-normal text-bl hover:font-bold focus:outline-none focus:font-bold transition ease-in-out duration-150"
              }
            >
              <a href={"#"} className={"truncate text-bl text-link"}>
                Cancel student loans
              </a>
            </li>
            <li
              className={
                "mt-1 group flex items-center pr-2 py-1 text-link leading-5 font-normal text-bl hover:font-bold focus:outline-none focus:font-bold transition ease-in-out duration-150"
              }
            >
              <a href={"#"} className={"truncate text-bl text-link"}>
                Student loan forgiveness
              </a>
            </li>
            <li
              className={
                "mt-1 group flex items-center pr-2 py-1 text-link leading-5 font-normal text-bl hover:font-bold focus:outline-none focus:font-bold transition ease-in-out duration-150"
              }
            >
              <a href={"#"} className={"truncate text-bl text-link"}>
                FAFSA
              </a>
            </li>
            <li
              className={
                "mt-1 group flex items-center pr-2 py-1 text-link leading-5 font-normal text-bl hover:font-bold focus:outline-none focus:font-bold transition ease-in-out duration-150"
              }
            >
              <a href={"#"} className={"truncate text-bl text-link"}>
                FERPA
              </a>
            </li>
            <li
              className={
                "mt-1 group flex items-center pr-2 py-1 text-link leading-5 font-normal text-bl hover:font-bold focus:outline-none focus:font-bold transition ease-in-out duration-150"
              }
            >
              <a href={"#"} className={"truncate text-bl text-link"}>
                Tax forms, 1098
              </a>
            </li>
            <li
              className={
                "mt-1 group flex items-center pr-2 py-1 text-link leading-5 font-normal text-bl hover:font-bold focus:outline-none focus:font-bold transition ease-in-out duration-150"
              }
            >
              <a href={"#"} className={"truncate text-bl text-link"}>
                ESSA (Every Student Succeeds Act)
              </a>
            </li>
          </nav>
        </div>
      </div>
    </div>
  </Layout>
)

export default StudentLoans
