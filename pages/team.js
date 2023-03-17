import Head from 'next/head';
import Link from 'next/link';

export default function Team() {
  return (
    <>
      <Head>
        <title>Meet the Team | Company Name</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className="bg-white py-8">
          <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
            <nav id="store" className="w-full z-30 top-0 px-6 py-1">
              <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">
                <Link href="/">
                  <a className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl ">
                    Company Name
                  </a>
                </Link>

                <div className="flex items-center" id="store-nav-content">
                  <button
                    className="bg-gray-800 text-gray-100 rounded-full hover:text-gray-200 hover:bg-gray-700 focus:outline-none focus:shadow-outline-purple"
                    aria-label="Toggle menu"
                    onClick={() =>
                      setMenuOpen((prevState) => !prevState)
                    }
                  >
                    <svg
                      className="h-6 w-6 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-">

                        </path>
                        </svg>
               </button>
             </div>
             </div>
           </nav>
         </div>
       </section>

       <section className="bg-white py-8">
         <div className="container mx-auto px-2 pt-4 pb-12 text-gray-800">
           <h1 className="text-4xl font-bold mb-4">Meet the Team</h1>
           <p className="text-lg mb-8">
             Get to know the people who make Company Name possible.
           </p>

           <div className="flex flex-wrap -mx-2">
             {/* Replace the content below with your team members */}
             <div className="w-full md:w-1/2 lg:w-1/3 p-2">
               <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
                 <img
                   className="lg:h-48 md:h-36 w-full object-cover object-center"
                   src="https://dummyimage.com/720x400"
                   alt="Person"
                 />
                 <div className="p-6">
                   <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                     POSITION
                   </h2>
                   <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                     NAME
                   </h1>
                   <p className="leading-relaxed mb-3">
                     DESCRIPTION
                   </p>
                   <div className="flex items-center flex-wrap">
                     <Link href="#">
                       <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                         Learn More
                       </a>
                     </Link>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </section>
     </main>
     <div className="w-full md:w-1/2 lg:w-1/3 p-2">
  <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
    <img
      className="lg:h-48 md:h-36 w-full object-cover object-center"
      src="https://dummyimage.com/720x400"
      alt="Person"
    />
    <div className="p-6">
      <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
        POSITION
      </h2>
      <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
        NAME
      </h1>
      <p className="leading-relaxed mb-3">
        DESCRIPTION
      </p>
      <div className="flex items-center flex-wrap">
        <Link href="#">
          <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
            Learn More
          </a>
        </Link>
      </div>
    </div>
  </div>
</div>
   </>
 );

                }