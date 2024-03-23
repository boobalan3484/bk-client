import React from 'react'
import { IoIosArrowRoundUp } from "react-icons/io";
import { Link } from 'react-router-dom';
import { content } from '../../../Utils/Content';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";

import { Pagination } from "swiper/modules"


const About = () => {

    const { images } = content

    let setImages;
    images.map((a, i) =>
        setImages = a.set3
    )

    return (

        <section id='about' className="py-14 pt-20" >
            <div className="max-w-screen-xl mx-auto md:px-8">
                <div className=" items-center gap-x-10 sm:px-4 md:px-0 lg:flex">
                    {/*Swiper*/}
                    <div className='flex-1 '>
                        <Swiper
                            spaceBetween={30}
                            pagination={{
                                clickable: true
                            }}
                            data-aos="flip-right"
                            modules={[Pagination]}
                            className='rounded-3xl  w-full md:max-w-md px-4 md:px-0 drop-shadow self-start'>
                            {
                                setImages && setImages?.map((a, i) => (
                                    <SwiperSlide key={i}
                                        className='bg-white rounded-3xl px-4 pt-4 pb-8 border-b-4 border-[#d6d6d6]'>
                                        <img src={a.src} alt={a.alt} className='w-full h-60 lg:h-full object-cover rounded-2xl drop-shadow-md' />

                                    </SwiperSlide>
                                ))
                            }

                        </Swiper>
                    </div>

                    <div className="max-w-full px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl group/a cursor-default "
                        data-aos="fade-up"
                    >
                        <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl tracking-wide">
                            About us
                        </h3>
                        <p className="mt-3 text-gray-600 text-justify " >
                            Welcome to Bohar Karate Training School, your premier destination for authentic training in Shotokan Karate, Nunchaku, Silambam, Yoga & Meditation, and Varmam.

                            Our experienced instructors provide expert guidance for all levels, from beginners to advanced practitioners.
                            <br />
                            Discover the physical, mental, and spiritual benefits of this ancient martial art in a supportive and welcoming community.
                            Join us today and unleash your potential
                        </p>
                        <div className="py-5 px-1  text-start  ">
                            <Link to='about' className="text-indigo-600 hover:text-indigo-500 text-sm font-semibold cursor-pointer">
                                Know more
                                <span className='inline-block'>
                                    <IoIosArrowRoundUp className=' rotate-45 text-lg transform translate-x-0 translate-y-[5px] group-hover/a:translate-y-[2px] group-hover/a:translate-x-[3px] transition-all duration-150' />
                                </span>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default About