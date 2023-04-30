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
                    account and clicking on the <strong>View your donation</strong> section on dashboard.
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
                    account and clicking on the <strong>Generate Receipt</strong> button on dashboard.
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
                Home
              </a>
            </div>
            <Link href={'/causes'}>
            <div className="px-5 py-2 cursor-pointer">
              <a
                className="text-base text-gray-400 hover:text-gray-100"
                >
                Causes
              </a>
            </div>
                </Link>
                <Link href={'/team'}>
            <div className="px-5 py-2 cursor-pointer">
              <a
                className="text-base text-gray-400 hover:text-gray-100"
              >
                Meet the Team
              </a>
            </div>
</Link>
          </nav>

        </div>
      </footer>
    </div>
  );
}

