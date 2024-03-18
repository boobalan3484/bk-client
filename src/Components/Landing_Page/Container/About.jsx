import React from 'react'
import { IoIosArrowRoundUp } from "react-icons/io";


const About = () => {

    return (

        <section className="py-14 pt-20" id='about'>
            <div className="max-w-screen-xl mx-auto md:px-8">
                <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
                    <div className="flex-1 sm:hidden lg:block"
                        data-aos="fade-up"
                    >
                        <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" className="md:max-w-lg sm:rounded-lg" alt="" />
                    </div>
                    <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl group/a cursor-pointer "
                        data-aos="fade-up"
                    >
                        <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl tracking-wide">
                            About us
                        </h3>
                        <p className="mt-3 text-gray-600">
                            Welcome to Bohar Karate Training School, your premier destination for authentic training in Shotokan Karate, Varmam, Silambam, Yoga, and Meditation, and Nunchaku.
                            <br />
                            Our experienced instructors provide expert guidance for all levels, from beginners to advanced practitioners.

                            Additionally, we organize various competitions in each program and issue dojo certificates to participants.
                        </p>
                        <div className="py-5 px-1  text-start  ">
                            <a href=' ' className="text-indigo-600 hover:text-indigo-500 text-sm font-semibold ">
                                Know more
                                <span className='inline-block'>
                                    <IoIosArrowRoundUp className=' rotate-45 text-lg transform translate-x-0 translate-y-[5px] group-hover/a:translate-y-[2px] group-hover/a:translate-x-[3px] transition-all duration-150' />
                                </span>
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default About