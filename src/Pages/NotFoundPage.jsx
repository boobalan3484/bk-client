import React from 'react'
import { IoIosArrowRoundUp } from "react-icons/io";
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <main>
      <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-start h-screen md:px-8">
        <div className="max-w-lg mx-auto space-y-3 text-center">
          <h3 className="text-indigo-600 font-semibold" data-aos='fade-up'>
            404 Error
          </h3>
          <p className="text-gray-800 text-4xl font-semibold sm:text-5xl" data-aos='fade-down'>
            Page not found
          </p>
          <p className="text-gray-600" data-aos='zoom-in' data-aos-delay='800'>
            Sorry, the page you are looking for could not be found or has been removed.
          </p>
          {/* <div className="flex flex-wrap items-center justify-center gap-3">
            <a href="javascript:void(0)" className="block py-2 px-4 text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg">
              Go back
            </a>
            <a href="javascript:void(0)" className="block py-2 px-4 text-gray-700 hover:bg-gray-50 font-medium duration-150 active:bg-gray-100 border rounded-lg">
              Contact support
            </a>
          </div> */}
          <Link to={'/'} className="group/a text-indigo-600 duration-150 hover:text-indigo-500 font-medium inline-flex items-center gap-x-1 drop-shadow bg-light-blue-50 rounded-lg px-10 py-2" data-aos='fade-left' data-aos-delay='1000'>
            <span className='absolute'>
              <IoIosArrowRoundUp className='-rotate-90 text-2xl text-indigo-600 group-hover/a:text-gray-800  transform translate-x-44 group-hover/a:-translate-x-7 drop-shadow  transition-all duration-700 z-10' />
            </span>
            Go Back to Home Page
          </Link>
        </div>
      </div>
    </main>
  )
}

export default NotFoundPage