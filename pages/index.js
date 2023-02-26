import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { BsChevronRight } from "react-icons/bs";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Donation Management | Home</title>
        <meta
          name="description"
          content="Donation Management website for managing and tracking donations."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
          <Image className="mx-auto" src={'/raah.jpeg'} height={150} width={150} alt={'logo'}></Image>
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block xl:inline">
                Welcome to the Donation Management Platform -
              </span>{" "}
              <span className="block text-pink-600 xl:inline">Raah</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Manage and track your donations with our easy-to-use platform.
              Make a difference in the world and help those in need.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <Link href={"/signup"}>
                  <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-pink-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                    Get started
                  </a>
                </Link>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <Link href={"/learnmore"}><a
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-pink-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                >
                  Learn more
                </a>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="relative bg-white">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="py-12 md:py-20">
              <div className="sm:text-center lg:text-left">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                  <span className="block">How it works</span>
                </h2>
                <div className="mt-8 sm:flex">
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-pink-600 text-white">
                    <BsChevronRight/>
                    </div>
                    <div className="mt-3 text-center sm:mt-5">
                      <h3 className="text-lg font-medium text-gray-900">
                        Sign up for an account
                      </h3>
                      <div className="mt-2 text-sm text-gray-500">
                        <p>
                          Create a new account or sign in with your existing
                          account to get started.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-pink-600 text-white">
                    <BsChevronRight/>
                    </div>
                    <div className="mt-3 text-center sm:mt-5">
                      <h3 className="text-lg font-medium text-gray-900">
                        Choose a cause to support
                      </h3>
                      <div className="mt-2 text-sm text-gray-500">
                        <p>
                          Select a cause that you are passionate about and want
                          to support.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-pink-600 text-white">
                    <BsChevronRight/>
                    </div>
                    <div className="mt-3 text-center sm:mt-5">
                      <h3 className="text-lg font-medium text-gray-900">
                        Make a donation
                      </h3>
                      <div className="mt-2 text-sm text-gray-500">
                        <p>
                          Make a donation to your chosen cause using our secure
                          payment system.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <div className="mt-12">
              <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                <div>
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    What is Donation Management?
                  </dt>
                  <dd className="mt-3 text-base text-gray-500">
                    Donation Management is a platform that enables users to make
                    donations to their favorite causes and track their giving
                    history. It also allows organizations to manage donations
                    and donor information, as well as issue tax receipts and
                    reports.
                  </dd>
                </div>
                <div>
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    How do I create an account?
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    To create an account, click on the <strong>Sign up</strong>{" "}
                    button on the homepage and fill in the required information.
                    You will then receive an email to verify your account and
                    set your password.
                  </dd>
                </div>

                <div>
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    Can I donate to multiple causes?
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    Yes, you can donate to multiple causes by selecting each
                    cause and specifying the amount you want to donate to each.
                  </dd>
                </div>

                <div>
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    How secure is the payment system?
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    Our payment system uses industry-standard encryption and
                    security measures to ensure that your information is
                    protected. We do not store your credit card information on
                    our servers.
                  </dd>
                </div>

                <div>
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    How can I view my giving history?
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    You can view your giving history by logging into your
                    account and clicking on the <strong>My Giving</strong> tab.
                    You can see a list of all the donations you have made, as
                    well as your total giving amount and any tax receipts that
                    have been issued to you.
                  </dd>
                </div>

                <div>
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    How can I get a tax receipt?
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    Tax receipts are issued automatically for all donations over
                    ₹600. You can access your tax receipts by logging into your
                    account and clicking on the <strong>My Giving</strong> tab.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-800" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
          <nav
            className="-mx-5 -my-2 flex flex-wrap justify-center"
            aria-label="Footer"
          >
            <div className="px-5 py-2">
              <a
                href="#"
                className="text-base text-gray-400 hover:text-gray-100"
              >
                About
              </a>
            </div>

            <div className="px-5 py-2">
              <a
                href="#"
                className="text-base text-gray-400 hover:text-gray-100"
              >
                Contact
              </a>
            </div>

            <div className="px-5 py-2">
              <a
                href="#"
                className="text-base text-gray-400 hover:text-gray-100"
              >
                Careers
              </a>
            </div>

            <div className="px-5 py-2">
              <a
                href="#"
                className="text-base text-gray-400 hover:text-gray-100"
              >
                Blog
              </a>
            </div>
            <div className="px-5 py-2">
              <a
                href="#"
                className="text-base text-gray-400 hover:text-gray-100"
              >
                Privacy Policy
              </a>
            </div>

            <div className="px-5 py-2">
              <a
                href="#"
                className="text-base text-gray-400 hover:text-gray-100"
              >
                Terms of Service
              </a>
            </div>
          </nav>

          <div className="mt-8 flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-gray-100">
              <span className="sr-only">Facebook</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M17.5 3H6.5C5.12173 3 4 4.12173 4 5.5V18.5C4 19.8783 5.12173 21 6.5 21H17.5C18.8783 21 20 19.8783 20 18.5V5.5C20 4.12173 18.8783 3 17.5 3ZM17 7.5H14C13.4477 7.5 13 7.94772 13 8.5V11.5H15V14H13V21H10V14H8V11.5H10V8.5C10 7.94772 9.55228 7.5 9 7.5H7V11.5H5V14H7V21H4.5C3.94772 21 3.5 20.5523 3.5 20V5.5C3.5 5.22386 3.72386 5 4 5H17C17.2761 5 17.5 5.22386 17.5 5.5V7.5Z"
                  fill="currentColor"
                />
              </svg>
            </a>

            <a href="#" className="text-gray-400 hover:text-gray-100">
              <span className="sr-only">Twitter</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M21.214 5.33247C20.5642 5.66709 19.8495 5.89368 19.0992 6.00164C19.8721 5.56036 20.4533 4.83025 20.7488 3.94123C19.9911 4.35468 19.1521 4.63458 18.2698 4.76378C17.5567 3.98956 16.5471 3.5 15.464 3.5C13.7272 3.5 12.3466 4.88071 12.3466 6.61739C12.3466 6.91325 12.3823 7."
                ></path>
              </svg>
            </a>

            <a href="#" className="text-gray-400 hover:text-gray-100">
              <span className="sr-only">LinkedIn</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.5 4C4.67157 4 4 4.67157 4 5.5V18.5C4 19.3284 4.67157 20 5.5 20H18.5C19.3284 20 20 19.3284 20 18.5V5.5C20 4.67157 19.3284 4 18.5 4H5.5ZM7 7H17V8.5H7V7ZM7 10H17V11.5H7V10ZM7 13H17V14.5H7V13ZM7 16H17V17.5H7V16Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

