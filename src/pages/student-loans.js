import React, { useState } from "react"
import classNames from "classnames"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

import "../css/loans.css"
import PageFeedback from "../components/molecules/page-feedback"
import ReturnToTop from "../components/atoms/a-return-to-top"
import { useStaticImage } from "../hooks/use-static-image"

const StudentLoans = () => {
  const images = useStaticImage()
  const image = images["applying_for_student_loans_placeholder@2x.png"]
  const [isMobileOpen, setMobileOpen] = useState(false)
  const sidebarMenuClasses = classNames(
    "px-4 md:p-0 order-first w-full md:order-last in-this-section sm:w-1/5 xl:ml-auto",
    isMobileOpen ? "" : "hidden md:block"
  )
  return (
    <Layout>
      <SEO title="Student loans, forgiveness" />
      <div className={"container mx-auto font-body"}>
        <nav
          className={"hidden sm:flex items-center leading-5 font-sm mt-4 mb-10"}
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
        <div className={"flex flex-wrap row"}>
          <div className={"p-2 md:p-0 md:pr-5 w-full sm:w-4/5 xl:w-3/5"}>
            <section className={"border-b-1 border-gr-lighter pb-15"}>
              <h1 className={"text-gr-dark text-h1 leading-10 font-bold mb-8"}>
                Student loans, forgiveness
              </h1>
              <p className={"text-gr-light text-16 leading-8 max-w-2xl"}>
                The US Department of Education provides college and university
                students with low-interest federal student loans and other aid.
                To see if you qualify for a Pell grant, direct loan, Parent PLUS
                loan, or other federal aid, follow the steps below:
              </p>
              <div className={"grid gap-8 order-1 xl:order-none"}>
                <div className={"md:grid md:grid-cols-3 md:gap-4"}>
                  <div
                    className={
                      "flex items-center justify-between bg-bl-lightest mt-6 p-2 md:p-6 md:flex-col justify-center md:items-start rounded"
                    }
                  >
                    <div className="">
                      <div
                        className={
                          "mr-2 w-12 h-12 leading-8 flex justify-center items-center bg-green rounded-full text-white text-link font-display text-center"
                        }
                      >
                        1
                      </div>
                    </div>
                    <span
                      className={
                        "w-full pr-2 font-display text-md text-gr-dark font-bold mt-6 mb-5"
                      }
                    >
                      Determine if you are Eligible
                    </span>
                    <button className={"btn-blue"}>Determine</button>
                  </div>
                  <div
                    className={
                      "flex items-center justify-between bg-bl-lightest mt-6 p-2 md:p-6 md:flex-col justify-center md:items-start rounded"
                    }
                  >
                    <div className="">
                      <div
                        className={
                          "mr-2 w-12 h-12 leading-8 flex justify-center items-center bg-green rounded-full text-white text-link font-display text-center"
                        }
                      >
                        2
                      </div>
                    </div>
                    <span
                      className={
                        "w-full text-md font-display pr-3 text-gr-dark font-bold mt-6 mb-5"
                      }
                    >
                      Create your FSA ID
                    </span>
                    <button className={"btn-blue"}>Create ID</button>
                  </div>
                  <div
                    className={
                      "flex items-center justify-between bg-bl-lightest mt-6 p-2 md:p-6 md:flex-col justify-center md:items-start rounded"
                    }
                  >
                    <div className="">
                      <div
                        className={
                          "mr-2 w-12 h-12 leading-8 flex justify-center items-center bg-green rounded-full text-white text-link font-display text-center"
                        }
                      >
                        3
                      </div>
                    </div>
                    <span
                      className={
                        "w-full pr-2 font-display text-md text-gr-dark font-bold mt-6 mb-5"
                      }
                    >
                      Complete the FAFSA Form
                    </span>
                    <button className={"btn-blue"}>Complete</button>
                  </div>
                </div>
              </div>
            </section>
            <section className={"border-b-1 border-gr-lighter py-15"}>
              <h2 className={"text-gr-dark text-h2 mb-8 font-bold"}>
                Review helpful information
              </h2>
              <p className={"text-gr-light text-16 leading-8 mb-4"}>
                Click the video to learn how to receive student loans, grants,
                and other federal aid.
              </p>
              <img
                className={"rounded-md"}
                src={image.src}
                alt="Video Thumbnail - Click to Play - Applying for student loans"
              />
              <br />
              <small className={"float-left block uppercase mr-2 relative"}>
                Share:
              </small>
              <div className="inline-flex text-bl">
                <a href="#" className="hover:text-gr-dark">
                  <span className="sr-only">Facebook</span>
                  <svg
                    className="h-5 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="ml-3 hover:text-gr-dark">
                  <span className="sr-only">Instagram</span>
                  <svg
                    className="h-5 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="ml-3 hover:text-gr-dark">
                  <span className="sr-only">Twitter</span>
                  <svg
                    className="h-5 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
              <div className="mt-16">
                <a href="#" className={"text-bl text-link underline block"}>
                  Eligibility requirements
                </a>
                <a href="#" className={"text-bl text-link underline block"}>
                  Funding your education
                </a>
                <a href="#" className={"text-bl text-link underline block"}>
                  Estimates of aid
                </a>
              </div>
            </section>
            <section className={"py-15 mb-15 border-b border-gr-lighter"}>
              <h2 className={"text-h2 mb-8 font-bold"}>
                Manage your student loans
              </h2>
              <div className={"grid gap-8 mt-10 md:mt-0 order-1 xl:order-none"}>
                <div className={"md:grid md:grid-cols-2 md:gap-8"}>
                  <div>
                    <h3 className={"text-h3 font-bold mb-2"}>
                      Directory of loan servicers
                    </h3>
                    <p className={"text-gr-light text-16 leading-6"}>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Accusamus ad, alias consequatur cum dolores et expedita
                      hic illo ipsum laudantium neque nesciunt, nihil nulla
                      perspiciatis quidem quod quos ratione sunt!
                    </p>
                    <a href="#" className={"text-bl text-link underline"}>
                      Learn more
                    </a>
                  </div>
                  <div>
                    <h3 className={"text-h3 font-bold mb-2"}>
                      Repaying your loans
                    </h3>
                    <p className={"text-gr-light text-16 leading-6"}>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Accusamus ad, alias consequatur cum dolores et expedita
                      hic illo ipsum laudantium neque nesciunt, nihil nulla
                      perspiciatis quidem quod quos ratione sunt!
                    </p>
                    <a href="#" className={"text-bl text-link underline"}>
                      Learn more
                    </a>
                  </div>
                  <div>
                    <h3 className={"text-h3 font-bold mb-2"}>
                      Income-driven repayment
                    </h3>
                    <p className={"text-gr-light text-16 leading-6"}>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Accusamus ad, alias consequatur cum dolores et expedita
                      hic illo ipsum laudantium neque nesciunt, nihil nulla
                      perspiciatis quidem quod quos ratione sunt!
                    </p>
                    <a href="#" className={"text-bl text-link underline"}>
                      Learn more
                    </a>
                  </div>
                  <div>
                    <h3 className={"text-h3 font-bold mb-2"}>
                      Loan consolidation
                    </h3>
                    <p className={"text-gr-light text-16 leading-6"}>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Accusamus ad, alias consequatur cum dolores et expedita
                      hic illo ipsum laudantium neque nesciunt, nihil nulla
                      perspiciatis quidem quod quos ratione sunt!
                    </p>
                    <a href="#" className={"text-bl text-link underline"}>
                      Learn more
                    </a>
                  </div>
                  <div>
                    <h3 className={"text-h3 font-bold mb-2"}>
                      Defaulted student loans
                    </h3>
                    <p className={"text-gr-light text-16 leading-6"}>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Accusamus ad, alias consequatur cum dolores et expedita
                      hic illo ipsum laudantium neque nesciunt, nihil nulla
                      perspiciatis quidem quod quos ratione sunt!
                    </p>
                    <a href="#" className={"text-bl text-link underline"}>
                      Learn more
                    </a>
                  </div>
                  <div>
                    <h3 className={"text-h3 font-bold mb-2"}>
                      Defer student loans
                    </h3>
                    <p className={"text-gr-light text-16 leading-6"}>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Accusamus ad, alias consequatur cum dolores et expedita
                      hic illo ipsum laudantium neque nesciunt, nihil nulla
                      perspiciatis quidem quod quos ratione sunt!
                    </p>
                    <a href="#" className={"text-bl text-link underline"}>
                      Learn more
                    </a>
                  </div>
                  <div>
                    <h3 className={"text-h3 font-bold mb-2"}>
                      Cancel student loans
                    </h3>
                    <p className={"text-gr-light text-16 leading-6"}>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Accusamus ad, alias consequatur cum dolores et expedita
                      hic illo ipsum laudantium neque nesciunt, nihil nulla
                      perspiciatis quidem quod quos ratione sunt!
                    </p>
                    <a href="#" className={"text-bl text-link underline"}>
                      Learn more
                    </a>
                  </div>
                  <div>
                    <h3 className={"text-h3 font-bold mb-2"}>
                      Student loan forgiveness
                    </h3>
                    <p className={"text-gr-light text-16 leading-6"}>
                      <a className="underline block text-link" href="#">
                        Public Service Loan Forgiveness (PSLF)
                      </a>
                      <a className="underline block text-link" href="#">
                        Teacher Loan Forgiveness Program
                      </a>
                    </p>
                  </div>
                  <div>
                    <h3 className={"text-h3 font-bold mb-2"}>FAFSA</h3>
                    <p className={"text-gr-light text-16 leading-6"}>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Accusamus ad, alias consequatur cum dolores et expedita
                      hic illo ipsum laudantium neque nesciunt, nihil nulla
                      perspiciatis quidem quod quos ratione sunt!
                    </p>
                    <a href="#" className={"text-bl text-link underline"}>
                      Learn more
                    </a>
                  </div>
                  <div>
                    <h3 className={"text-h3 font-bold mb-2"}>FERPA</h3>
                    <p className={"text-gr-light text-16 leading-6"}>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Accusamus ad, alias consequatur cum dolores et expedita
                      hic illo ipsum laudantium neque nesciunt, nihil nulla
                      perspiciatis quidem quod quos ratione sunt!
                    </p>
                    <a href="#" className={"text-bl text-link underline"}>
                      Learn more
                    </a>
                  </div>
                  <div>
                    <h3 className={"text-h3 font-bold mb-2"}>
                      Tax forms, 1098
                    </h3>
                    <p className={"text-gr-light text-16 leading-6"}>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Accusamus ad, alias consequatur cum dolores et expedita
                      hic illo ipsum laudantium neque nesciunt, nihil nulla
                      perspiciatis quidem quod quos ratione sunt!
                    </p>
                    <a href="#" className={"text-bl text-link underline"}>
                      Learn more
                    </a>
                  </div>
                  <div>
                    <h3 className={"text-h3 font-bold mb-2"}>
                      ESSA (Every Student Succeeds Act)
                    </h3>
                    <p className={"text-gr-light text-16 leading-6"}>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Accusamus ad, alias consequatur cum dolores et expedita
                      hic illo ipsum laudantium neque nesciunt, nihil nulla
                      perspiciatis quidem quod quos ratione sunt!
                    </p>
                    <a href="#" className={"text-bl text-link underline"}>
                      Learn more
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <button
            className="order-first font-body text-center w-full p-4 m-2 border-black md:order-last btn uppercase md:hidden"
            onClick={() => setMobileOpen(!isMobileOpen)}
          >
            In This Section
          </button>
          <div className={sidebarMenuClasses}>
            <h5
              className={
                "hidden md:block uppercase text-h5 font-semibold font-body border-b border-gr-lighter py-1"
              }
            >
              In this section
            </h5>
            <nav>
              <li
                className={
                  "group active flex items-center pr-2 py-1 text-link leading-5 font-bold text-bl hover:border-0 focus:font-bold focus:outline-none transition ease-in-out duration-150"
                }
                aria-current="page"
              >
                <a
                  href={"#"}
                  className={
                    "truncate text-bl text-link block hover:font-bold "
                  }
                >
                  Student loans, forgiveness
                </a>
              </li>
              <li
                className={
                  "mt-1 group flex items-center pr-2 py-1 text-link leading-5 font-normal text-bl hover:border-0 focus:outline-none focus:font-bold transition ease-in-out duration-150"
                }
              >
                <a
                  href={"#"}
                  className={
                    "truncate text-bl text-link block hover:font-bold "
                  }
                >
                  My Federal Student Aid login
                </a>
              </li>
              <li
                className={
                  "mt-1 group flex items-center pr-2 py-1 text-link leading-5 font-normal text-bl hover:border-0 focus:outline-none focus:font-bold transition ease-in-out duration-150"
                }
              >
                <a
                  href={"#"}
                  className={
                    "truncate text-bl text-link block hover:font-bold "
                  }
                >
                  FSA ID login
                </a>
              </li>
              <li
                className={
                  "mt-1 group flex items-center pr-2 py-1 text-link leading-5 font-normal text-bl hover:border-0 focus:outline-none focus:font-bold transition ease-in-out duration-150"
                }
              >
                <a
                  href={"#"}
                  className={
                    "truncate text-bl text-link block hover:font-bold "
                  }
                >
                  Directory of loan servicers
                </a>
              </li>
              <li
                className={
                  "mt-1 group flex items-center pr-2 py-1 text-link leading-5 font-normal text-bl hover:border-0 focus:outline-none focus:font-bold transition ease-in-out duration-150"
                }
              >
                <a
                  href={"#"}
                  className={
                    "truncate text-bl text-link block hover:font-bold "
                  }
                >
                  Repaying your loans
                </a>
              </li>
              <li
                className={
                  "mt-1 group flex items-center pr-2 py-1 text-link leading-5 font-normal text-bl hover:border-0 focus:outline-none focus:font-bold transition ease-in-out duration-150"
                }
              >
                <a
                  href={"#"}
                  className={
                    "truncate text-bl text-link block hover:font-bold "
                  }
                >
                  Income-driven repayment
                </a>
              </li>
              <li
                className={
                  "mt-1 group flex items-center pr-2 py-1 text-link leading-5 font-normal text-bl hover:border-0 focus:outline-none focus:font-bold transition ease-in-out duration-150"
                }
              >
                <a
                  href={"#"}
                  className={
                    "truncate text-bl text-link block hover:font-bold "
                  }
                >
                  Loan consolidation
                </a>
              </li>
              <li
                className={
                  "mt-1 group flex items-center pr-2 py-1 text-link leading-5 font-normal text-bl hover:border-0 focus:outline-none focus:font-bold transition ease-in-out duration-150"
                }
              >
                <a
                  href={"#"}
                  className={
                    "truncate text-bl text-link block hover:font-bold "
                  }
                >
                  Defaulted student loans
                </a>
              </li>
              <li
                className={
                  "mt-1 group flex items-center pr-2 py-1 text-link leading-5 font-normal text-bl hover:border-0 focus:outline-none focus:font-bold transition ease-in-out duration-150"
                }
              >
                <a
                  href={"#"}
                  className={
                    "truncate text-bl text-link block hover:font-bold "
                  }
                >
                  Defer student loans
                </a>
              </li>
              <li
                className={
                  "mt-1 group flex items-center pr-2 py-1 text-link leading-5 font-normal text-bl hover:border-0 focus:outline-none focus:font-bold transition ease-in-out duration-150"
                }
              >
                <a
                  href={"#"}
                  className={
                    "truncate text-bl text-link block hover:font-bold "
                  }
                >
                  Cancel student loans
                </a>
              </li>
              <li
                className={
                  "mt-1 group flex items-center pr-2 py-1 text-link leading-5 font-normal text-bl hover:border-0 focus:outline-none focus:font-bold transition ease-in-out duration-150"
                }
              >
                <a
                  href={"#"}
                  className={
                    "truncate text-bl text-link block hover:font-bold "
                  }
                >
                  Student loan forgiveness
                </a>
              </li>
              <li
                className={
                  "mt-1 group flex items-center pr-2 py-1 text-link leading-5 font-normal text-bl hover:border-0 focus:outline-none focus:font-bold transition ease-in-out duration-150"
                }
              >
                <a
                  href={"#"}
                  className={
                    "truncate text-bl text-link block hover:font-bold "
                  }
                >
                  FAFSA
                </a>
              </li>
              <li
                className={
                  "mt-1 group flex items-center pr-2 py-1 text-link leading-5 font-normal text-bl hover:border-0 focus:outline-none focus:font-bold transition ease-in-out duration-150"
                }
              >
                <a
                  href={"#"}
                  className={
                    "truncate text-bl text-link block hover:font-bold "
                  }
                >
                  FERPA
                </a>
              </li>
              <li
                className={
                  "mt-1 group flex items-center pr-2 py-1 text-link leading-5 font-normal text-bl hover:border-0 focus:outline-none focus:font-bold transition ease-in-out duration-150"
                }
              >
                <a
                  href={"#"}
                  className={
                    "truncate text-bl text-link block hover:font-bold "
                  }
                >
                  Tax forms, 1098
                </a>
              </li>
              <li
                className={
                  "mt-1 group flex items-center pr-2 py-1 text-link leading-5 font-normal text-bl hover:border-0 focus:outline-none focus:font-bold transition ease-in-out duration-150"
                }
              >
                <a
                  href={"#"}
                  className={
                    "truncate text-bl text-link block hover:font-bold "
                  }
                >
                  ESSA (Every Student Succeeds Act)
                </a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <ReturnToTop additionalClassName={""} />
      <PageFeedback />
    </Layout>
  )
}

export default StudentLoans
