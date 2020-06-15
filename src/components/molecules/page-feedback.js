import React, { useState } from "react"
import classNames from "classnames"

const PageFeedback = () => {
  const [currentSection, setCurrentSection] = useState("initial")
  const wrapperClasses = classNames(
    "py-2",
    /initial|survey/.test(currentSection) ? "bg-bl-lightest text-gr-dark" : "",
    currentSection === "not-helpful" ? "bg-red text-white" : "",
    currentSection === "thanks" ? "bg-green text-white" : ""
  )
  console.log(currentSection)
  return (
    <div className={wrapperClasses}>
      <div className="container h-18 items-center flex">
        <section className={currentSection === "initial" ? "" : "hidden"}>
          <label className="font-bold">
            <span className="mr-4">Is this page useful ?</span>
            <button
              className="underline p-5 text-bl-link"
              onClick={() => setCurrentSection("thanks")}
            >
              Yes
            </button>
            <button
              className="underline p-5 text-bl-link"
              onClick={() => setCurrentSection("not-helpful")}
            >
              No
            </button>
          </label>
        </section>
        <section
          className={"py-5 " + (currentSection === "thanks" ? "" : "hidden")}
        >
          <strong className={"font-display text-md"}>
            Thanks for your feedback!
          </strong>
        </section>
        <section
          className={
            "w-full relative py-5 " +
            (currentSection === "not-helpful" ? "" : "hidden")
          }
        >
          <button
            className="underline absolute right-0 origin-top-right"
            onClick={() => setCurrentSection("initial")}
          >
            Close
          </button>
          <strong className={"font-display text-md"}>
            Is this page missing information?
          </strong>
          <p className={"py-2 mb-8"}>
            Please tell us more about your visit today by filling out a survey.
            It takes 2 minutes to fill in.
          </p>
          <button
            className="btn btn-ghost"
            onClick={() => setCurrentSection("survey")}
          >
            Fill out survey
          </button>
        </section>
        <section
          className={
            "w-full relative py-5 " +
            (currentSection === "survey" ? "" : "hidden")
          }
        >
          <div className="max-w-2xl">
            <button
              className="underline absolute right-0 origin-top-right"
              onClick={() => setCurrentSection("initial")}
            >
              Close
            </button>
            <strong className={"font-display text-md"}>
              Is there anything wrong with this page?
            </strong>
            <p className={"py-2 mb-2 text-gr-light"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse sagittis, libero in molestie biben, turpis nulla
              ornare enim, molestie vulputate lorem libero sed lacus. Aliquam
              maximus nunc arcu.
            </p>
            <form action="">
              <div className={"mt-4"}>
                <label
                  htmlFor="what_were_you_doing"
                  className="block py-2 text-16 leading-5 text-gr-light"
                >
                  What were you doing? *
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <input
                    id="what_were_you_doing"
                    className="border-bl p-2 rounded block w-full transition ease-in-out duration-150"
                  />
                </div>
              </div>
              <div className={"mt-4"}>
                <label
                  htmlFor="what_went_wrong"
                  className="block py-2 text-16 leading-5 text-gr-light"
                >
                  What went wrong? *
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <input
                    id="what_went_wrong"
                    className="border-bl p-2 rounded block w-full transition ease-in-out duration-150"
                  />
                </div>
              </div>
            </form>
            <button className="btn-blue mt-6">Send</button>
          </div>
        </section>
      </div>
    </div>
  )
}

export default PageFeedback
