import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../css/loan.css"

const StudentLoans = () => (
  <Layout>
    <SEO title="Student loans, forgiveness" />
    <div class="container mx-auto">
      <nav class="hidden sm:flex items-center leading-5 font-sm mb-10">
        <a
          href="/"
          class="text-sm text-light-gray hover:text-dark-gray transition duration-150 ease-in-out"
        >
          Home
        </a>
        <span class="text-sm mx-2 text-light-gray">/</span>
        <span class="text-sm text-light-gray transition duration-150 ease-in-out">
          Student loans, forgiveness
        </span>
      </nav>
      <div class="flex row">
        <div class="w-4/5">
          <section>
            <h1 class="text-h1 mb-8">Student loans, forgiveness</h1>
            <p>
              The US Department of Education provides college and university
              students with low-interest federal student loans and other aid. To
              see if you qualify for a Pell grant, direct loan, Parent PLUS
              loan, or other federal aid, follow the steps below:
            </p>
          </section>
          <section>
            <h2>Review helpful information</h2>
            <p>
              Click the video to learn how to receive student loans, grants, and
              other federal aid.
            </p>
          </section>
          <section>
            <h2>Manage your student loans</h2>
            <div class="grid gap-8 mt-10 md:mt-0 order-1 xl:order-none">
              <div class="md:grid md:grid-cols-2 md:gap-8">
                <article>
                  <h3>Article Title</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Accusamus ad, alias consequatur cum dolores et expedita hic
                    illo ipsum laudantium neque nesciunt, nihil nulla
                    perspiciatis quidem quod quos ratione sunt!
                  </p>
                  <a href="#" class="text-deep-blue underline">
                    Article Link
                  </a>
                </article>
                <article>
                  <h3>Article Title</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Accusamus ad, alias consequatur cum dolores et expedita hic
                    illo ipsum laudantium neque nesciunt, nihil nulla
                    perspiciatis quidem quod quos ratione sunt!
                  </p>
                  <a href="#" class="text-deep-blue underline">
                    Article Link
                  </a>
                </article>
                <article>
                  <h3>Article Title</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Accusamus ad, alias consequatur cum dolores et expedita hic
                    illo ipsum laudantium neque nesciunt, nihil nulla
                    perspiciatis quidem quod quos ratione sunt!
                  </p>
                  <a href="#" class="text-deep-blue underline">
                    Article Link
                  </a>
                </article>
                <article>
                  <h3>Article Title</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Accusamus ad, alias consequatur cum dolores et expedita hic
                    illo ipsum laudantium neque nesciunt, nihil nulla
                    perspiciatis quidem quod quos ratione sunt!
                  </p>
                  <a href="#" class="text-deep-blue underline">
                    Article Link
                  </a>
                </article>
                <article>
                  <h3>Article Title</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Accusamus ad, alias consequatur cum dolores et expedita hic
                    illo ipsum laudantium neque nesciunt, nihil nulla
                    perspiciatis quidem quod quos ratione sunt!
                  </p>
                  <a href="#" class="text-deep-blue underline">
                    Article Link
                  </a>
                </article>
              </div>
            </div>
          </section>
        </div>

        <div class="w-1/5">
          <h5 class="uppercase font-semibold">In this section</h5>
          <nav>
            <a
              href="#"
              class="group flex items-center px-3 py-2 text-sm leading-5 font-medium text-gray-900 rounded-md bg-gray-100 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 transition ease-in-out duration-150"
              aria-current="page"
            >
              <span class="truncate">Dashboard</span>
            </a>
            <a
              href="#"
              class="mt-1 group flex items-center px-3 py-2 text-sm leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-100 transition ease-in-out duration-150"
            >
              <span class="truncate">Team</span>
            </a>
            <a
              href="#"
              class="mt-1 group flex items-center px-3 py-2 text-sm leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-100 transition ease-in-out duration-150"
            >
              <span class="truncate">Projects</span>
            </a>
            <a
              href="#"
              class="mt-1 group flex items-center px-3 py-2 text-sm leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-100 transition ease-in-out duration-150"
            >
              <span class="truncate">Calendar</span>
            </a>
            <a
              href="#"
              class="mt-1 group flex items-center px-3 py-2 text-sm leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-100 transition ease-in-out duration-150"
            >
              <span class="truncate">Documents</span>
            </a>
            <a
              href="#"
              class="mt-1 group flex items-center px-3 py-2 text-sm leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-100 transition ease-in-out duration-150"
            >
              <span class="truncate">Reports</span>
            </a>
          </nav>
        </div>
      </div>
    </div>
  </Layout>
)

export default StudentLoans
