import React from 'react'
import KaratePNG from '../../../Assets/hero/Hero.svg'

const Hero = () => {

  return (

    <section id='hero' className='h-full' >
      <div className=" mx-auto max-w-screen-xl px-4 lg:flex items-center md:px-8 py-28 lg:h-screen">

        <div className="space-y-4 flex-1 sm:text-center lg:text-left"

        >
          <h1 className="text-gray-800 font-extrabold text-4xl xl:text-5xl" data-aos="fade-down" data-aos-delay="100">
            BOHAR KARATE
            <span className="text-indigo-600" data-aos="fade-down" data-aos-delay="400"> TRAINING SCHOOL</span>
          </h1>
          {/* <p className="text-gray-600 text-3xl font-bold max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
            MARTIAL ARTS
          </p> */}
          <p className="text-gray-800 max-w-xl leading-relaxed sm:mx-auto lg:ml-0" data-aos="fade-down" data-aos-delay="600">
            Martial Arts Reg. No. Tamil Nadu. 148/2023, Chennai,
            <br />Periyamanali. PIN - 637 410.
          </p>
          <button className="outline-none bg-gray-600 text-white text-center px-5 py-2 rounded-full shadow w-full ring-offset-2 ring-gray-600 focus:ring-2  sm:w-auto" data-aos="fade-up" data-aos-delay="800">
            Join us
          </button>
        </div>

        <div className="flex-1 text-center mt-4 lg:mt-0 lg:ml-3"
          data-aos="fade-up" data-aos-delay="1000"
        >
          <img src={`${KaratePNG}`} alt=' ' className="w-full sm:w-10/12 lg:w-full mx-auto drop-shadow-xl object-cover" />
        </div>
      </div>

    </section>
  )
}

export default Hero