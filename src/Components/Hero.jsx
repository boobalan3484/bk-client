import React from 'react'
import KaratePNG from '../Assets/hero/Hero.svg'

const Hero = () => {

  return (

    <section id='hero' >
      <div className="pt-28 mx-auto max-w-screen-xl pb-4 px-4 items-center lg:flex md:px-8">

        <div className="space-y-4 flex-1 sm:text-center lg:text-left">
          <h1 className="text-gray-800 font-extrabold text-4xl xl:text-5xl">
            BOHAR KARATE
            <span className="text-indigo-600"> TRAINING SCHOOL</span>
          </h1>
          {/* <p className="text-gray-600 text-3xl font-bold max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
            MARTIAL ARTS
          </p> */}
          <p className="text-gray-800 max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
            Martial Arts Reg. No. Tamil Nadu. 148/2023, Chennai,
            <br />Periyamanali. PIN - 637 410.
          </p>
          <button className="outline-none bg-gray-700 text-white text-center px-4 py-3 rounded-full shadow w-full ring-offset-2 ring-gray-700 focus:ring-2  sm:w-auto">
            Get started
          </button>
        </div>

        <div className="flex-1 text-center mt-4 lg:mt-0 lg:ml-3">
          <img src={`${KaratePNG}`} alt=' ' className="w-full mx-auto sm:w-10/12 drop-shadow-xl lg:w-full" />
        </div>
      </div>

    </section>
  )
}

export default Hero