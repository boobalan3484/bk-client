import React, { useEffect } from 'react'
import { IoIosArrowRoundUp } from "react-icons/io";
import { Link } from 'react-router-dom';
import { content } from '../../../Utils/Content';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";

import { Pagination } from "swiper/modules"


const About = () => {

    const { images } = content

let setImages ;
images.map((a,i)=>{
    setImages = a.set3
})



console.log(setImages);
    return (

        <section id='about' className="py-14 pt-20" >
            <div className="max-w-screen-xl mx-auto md:px-8">
                <div className="items-center gap-x-10 sm:px-4 md:px-0 lg:flex">
               {/*Swiper*/}
                        <Swiper
                        spaceBetween={30}
                        pagination = {{
                          clickable:true
                        }}
                        data-aos="flip-right"
                        modules={[Pagination]}
                        className='rounded-3xl pb-16 max-w-xs md:max-w-md drop-shadow-primary self-start'>
{
    setImages && setImages?.map((a,i)=>(
<SwiperSlide  key={i}
className='bg-white rounded-3xl p-5 border-b-8 border-[#FAF9FD]'>
  <img src={a.src} alt={a.alt} className='w-[100%] h-60 object-cover' />

  </SwiperSlide>
    ))
} 

                        </Swiper>
                   



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
                        </p>
                        <div className="py-5 px-1  text-start  ">
                            <Link to='about' className="text-indigo-600 hover:text-indigo-500 text-sm font-semibold ">
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