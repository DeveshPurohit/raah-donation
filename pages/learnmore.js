import Head from 'next/head';
import Link from 'next/link';

function LearnMore() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Learn More | Donation Management</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-gray-800 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex justify-between">
            <div>
             <Link href={"/"}>
             <a>
                <img src="/raah.jpeg" alt="Donation Management" className="h-8" />
              </a>
             </Link> 
            </div>
            <div>
                <Link href={"/login"}>
              <a className="text-white hover:text-gray-200">
                Login
              </a>
              </Link>
              <Link href={"/signup"}>
              <a
                href="#"
                className="ml-4 inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Create Account
              </a>
              </Link>
            </div>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Learn More About Our Platform</h1>

          <div className="flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0 mb-16">
            <div className="w-full md:w-1/2">
              <img
                src="/raah.jpeg"
                alt="Feature 1"
                className="w-full h-64 object-cover rounded-lg shadow-lg mb-4"
              />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Easy Donation Tracking</h2>
              <p className="text-gray-700">
                With our platform, you can easily track all of your donations in one place. See which donations have
                been received and which are still outstanding, and generate reports to see how much you have raised over
                time.
              </p>
            </div>

            <div className="w-full md:w-1/2">
              <img
                src="/raah.jpeg"
                alt="Feature 2"
                className="w-full h-64 object-cover rounded-lg shadow-lg mb-4"
              />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Secure Payment Processing</h2>
              <p className="text-gray-700">
                We take security seriously, which is why we use the latest encryption and tokenization technologies to
                protect your donors payment information. You can rest assured that your donors information is safe
                with us.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0">
            <div className="w-full md:w-1/2">
            <img
                src="/raah.jpeg"
                alt="Feature 2"
                className="w-full h-64 object-cover rounded-lg shadow-lg mb-4"
              />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Customizable Donation Pages</h2>
             
              <p className="text-gray-700">
            Make your donation pages look and feel like your organization. Our platform allows you to customize your
            donation pages with your own branding and messaging so that donors feel like they are giving directly to
            you.
          </p>
        </div>

        <div className="w-full md:w-1/2">
        <img
                src="/raah.jpeg"
                alt="Feature 2"
                className="w-full h-64 object-cover rounded-lg shadow-lg mb-4"
              />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Integrations with Popular Tools</h2>
          <p className="text-gray-700">
            We integrate with popular tools like Salesforce, Mailchimp, and Google Analytics, so you can easily
            manage your donor data and marketing campaigns without leaving our platform.
          </p>
        </div>
      </div>
    </div>
  </main>

  <footer className="bg-gray-800 py-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-center space-x-6">
        <a href="#" className="text-gray-400 hover:text-gray-100">
          <span className="sr-only">Facebook</span>
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18.485 4H5.515C4.46667 4 3.66667 4.8 3.66667 5.848V18.152C3.66667 19.2 4.46667 20 5.515 20H11.2191V12.2549H8.93333V9.60157H11.2191V7.61739C11.2191 4.98261 12.8452 3.6712 15.018 3.6712C15.9755 3.6712 16.9189 3.74447 17.0375 3.77451V6.03279L15.4821 6.03385C14.4415 6.03385 14.2195 6.62807 14.2195 7.35208V9.5995H16.9647L16.5812 12.252H14.2195V20H18.485C19.5333 20 20.3333 19.2 20.3333 18.152V5.848C20.3333 4.8 19.5333 4 18.485 4Z"
              fill="currentColor"
            />
          </svg>
        </a>

        <a href="#" className="text-gray-400 hover:text-gray-100">
          <span className="sr-only">Twitter</span>
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.2 20C14.9474 20 19.9371 12.6195 19.9371 7.17584C19.9371 7.01862 19.9371 6.86141 19.924"></path>
              </svg>
              </a>
      
              <a href="#" className="text-gray-400 hover:text-gray-100">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19.3837 3H4.6163C3.66203 3 3 3.66054 3 4.6162V19.3838C3 20.3395 3.66203 21 4.6163 21H19.3837C20.3379 21 21 20.3395 21 19.3838V4.6162C21 3.66054 20.3379 3 19.3837 3ZM8.67432 17.1943H6.67798V9.03451H8.67432V17.1943ZM7.67515 8.21913H7.64928C6.98195 8.21913 6.58377 7.86115 6.58377 7.30973C6.58377 6.76102 6.98505 6.38395 7.70306 6.38395C8.42483 6.38395 8.82466 6.76217 8.85053 7.30973C8.85053 7.86115 8.42483 8.21913 7.67515 8.21913ZM17.3151 17.1943H15.3187V12.438H15.2859C14.7706 13.1502 13.981 13.6678 12.9752 13.6678C11.6149 13.6678 10.6495 12.7977 10.6495 11.3434C10.6495 9.91791 11.6075 9.03588 12.9918 9.03588C13.9984 9.03588 14.7464 9.40228 15.1827 9.91519V8.61006C15.1827 8.61006 14.8913 8.21913 13.9653 8.21913C12.9247 8.21913 12.2471 8.94181 12.2471 10.102C12.2471 11.2759 12.9516 11.9893 14.1807 11.9893H14.2135V17.1943H17.3151Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
      
            <p className="mt-8 text-center text-base text-gray-400">
              &copy; 2023 Donation Management. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
      );
}

export default LearnMore;      