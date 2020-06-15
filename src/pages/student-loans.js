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
        <div className={"w-4/5 xl:w-3/5 pr-20 text-gr-light"}>
          <section className={"border-b-1 border-gr-lighter pb-15"}>
            <h1 className={"text-h1 font-bold mb-8"}>
              Student loans, forgiveness
            </h1>
            <p class={"text-base leading-8 max-w-2xl"}>
              The US Department of Education provides college and university
              students with low-interest federal student loans and other aid. To
              see if you qualify for a Pell grant, direct loan, Parent PLUS
              loan, or other federal aid, follow the steps below:
            </p>
            <div className={"grid gap-8 mt-10 md:mt-0 order-1 xl:order-none"}>
              <div className={"md:grid md:grid-cols-3 md:gap-4"}>
                <div className={"bg-bl-lightest mt-6 p-8 rounded"}>
                  <div
                    className={
                      "w-12 h-12 leading-8 flex justify-center items-center bg-green rounded-full text-white text-link font-display text-center"
                    }
                  >
                    1
                  </div>
                  <h4
                    className={"text-md text-gr-dark font-bold mt-6 mb-5 h-16"}
                  >
                    Determine if you are Eligible
                  </h4>
                  <button
                    className={"button bg-bl text-white px-5 py-3 rounded"}
                  >
                    Determine
                  </button>
                </div>
                <div className={"bg-bl-lightest mt-6 p-8 rounded"}>
                  <div
                    className={
                      "w-12 h-12 leading-8 flex justify-center items-center bg-green rounded-full text-white text-link font-display text-center"
                    }
                  >
                    2
                  </div>
                  <h4
                    className={"text-md text-gr-dark font-bold mt-6 mb-5 h-16"}
                  >
                    Create your FSA ID
                  </h4>
                  <button
                    className={"button bg-bl text-white px-5 py-3 rounded"}
                  >
                    Create ID
                  </button>
                </div>
                <div className={"bg-bl-lightest mt-6 p-8 rounded"}>
                  <div
                    className={
                      "w-12 h-12 leading-8 flex justify-center items-center bg-green rounded-full text-white text-link font-display text-center"
                    }
                  >
                    3
                  </div>
                  <h4
                    className={"text-md text-gr-dark font-bold mt-6 mb-5 h-16"}
                  >
                    Complete the FAFSA Form
                  </h4>
                  <button
                    className={"button bg-bl text-white px-5 py-3 rounded"}
                  >
                    Complete
                  </button>
                </div>
              </div>
            </div>
          </section>
          <section className={"border-b-1 border-gr-lighter py-15"}>
            <h2 className={"text-gr-dark text-h2 mb-8 font-bold"}>
              Review helpful information
            </h2>
            <p>
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

        <div className={"in-this-section w-1/5 xl:ml-auto"}>
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
                "group active flex items-center pr-2 py-1 text-link leading-5 font-bold text-bl hover:border-0 hover:font-bold focus:font-bold focus:outline-none transition ease-in-out duration-150"
              }
              aria-current="page"
            >
              <a href={"#"} className={"truncate text-bl text-link block"}>
                Student loans, forgiveness
              </a>
            </li>
            <li
              className={
                "mt-1 group flex items-center pr-2 py-1 text-link leading-5 font-normal text-bl hover:border-0 hover:font-bold focus:outline-none focus:font-bold transition ease-in-out duration-150"
              }
            >
              <a href={"#"} className={"truncate text-bl text-link block"}>
                My Federal Student Aid login
              </a>
            </li>
            <li
              className={
                "mt-1 group flex items-center pr-2 py-1 text-link leading-5 font-normal text-bl hover:border-0 hover:font-bold focus:outline-none focus:font-bold transition ease-in-out duration-150"
              }
            >
              <a href={"#"} className={"truncate text-bl text-link block"}>
                FSA ID login
              </a>
            </li>
            <li
              className={
                "mt-1 group flex items-center pr-2 py-1 text-link leading-5 font-normal text-bl hover:border-0 hover:font-bold focus:outline-none focus:font-bold transition ease-in-out duration-150"
              }
            >
              <a href={"#"} className={"truncate text-bl text-link block"}>
                Directory of loan servicers
              </a>
            </li>
            <li
              className={
                "mt-1 group flex items-center pr-2 py-1 text-link leading-5 font-normal text-bl hover:border-0 hover:font-bold focus:outline-none focus:font-bold transition ease-in-out duration-150"
              }
            >
              <a href={"#"} className={"truncate text-bl text-link block"}>
                Repaying your loans
              </a>
            </li>
            <li
              className={
                "mt-1 group flex items-center pr-2 py-1 text-link leading-5 font-normal text-bl hover:border-0 hover:font-bold focus:outline-none focus:font-bold transition ease-in-out duration-150"
              }
            >
              <a href={"#"} className={"truncate text-bl text-link block"}>
                Income-driven repayment
              </a>
            </li>
            <li
              className={
                "mt-1 group flex items-center pr-2 py-1 text-link leading-5 font-normal text-bl hover:border-0 hover:font-bold focus:outline-none focus:font-bold transition ease-in-out duration-150"
              }
            >
              <a href={"#"} className={"truncate text-bl text-link block"}>
                Loan consolidation
              </a>
            </li>
            <li
              className={
                "mt-1 group flex items-center pr-2 py-1 text-link leading-5 font-normal text-bl hover:border-0 hover:font-bold focus:outline-none focus:font-bold transition ease-in-out duration-150"
              }
            >
              <a href={"#"} className={"truncate text-bl text-link block"}>
                Defaulted student loans
              </a>
            </li>
            <li
              className={
                "mt-1 group flex items-center pr-2 py-1 text-link leading-5 font-normal text-bl hover:border-0 hover:font-bold focus:outline-none focus:font-bold transition ease-in-out duration-150"
              }
            >
              <a href={"#"} className={"truncate text-bl text-link block"}>
                Defer student loans
              </a>
            </li>
            <li
              className={
                "mt-1 group flex items-center pr-2 py-1 text-link leading-5 font-normal text-bl hover:border-0 hover:font-bold focus:outline-none focus:font-bold transition ease-in-out duration-150"
              }
            >
              <a href={"#"} className={"truncate text-bl text-link block"}>
                Cancel student loans
              </a>
            </li>
            <li
              className={
                "mt-1 group flex items-center pr-2 py-1 text-link leading-5 font-normal text-bl hover:border-0 hover:font-bold focus:outline-none focus:font-bold transition ease-in-out duration-150"
              }
            >
              <a href={"#"} className={"truncate text-bl text-link block"}>
                Student loan forgiveness
              </a>
            </li>
            <li
              className={
                "mt-1 group flex items-center pr-2 py-1 text-link leading-5 font-normal text-bl hover:border-0 hover:font-bold focus:outline-none focus:font-bold transition ease-in-out duration-150"
              }
            >
              <a href={"#"} className={"truncate text-bl text-link block"}>
                FAFSA
              </a>
            </li>
            <li
              className={
                "mt-1 group flex items-center pr-2 py-1 text-link leading-5 font-normal text-bl hover:border-0 hover:font-bold focus:outline-none focus:font-bold transition ease-in-out duration-150"
              }
            >
              <a href={"#"} className={"truncate text-bl text-link block"}>
                FERPA
              </a>
            </li>
            <li
              className={
                "mt-1 group flex items-center pr-2 py-1 text-link leading-5 font-normal text-bl hover:border-0 hover:font-bold focus:outline-none focus:font-bold transition ease-in-out duration-150"
              }
            >
              <a href={"#"} className={"truncate text-bl text-link block"}>
                Tax forms, 1098
              </a>
            </li>
            <li
              className={
                "mt-1 group flex items-center pr-2 py-1 text-link leading-5 font-normal text-bl hover:border-0 hover:font-bold focus:outline-none focus:font-bold transition ease-in-out duration-150"
              }
            >
              <a href={"#"} className={"truncate text-bl text-link block"}>
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
