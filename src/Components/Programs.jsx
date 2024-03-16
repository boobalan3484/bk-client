import React from 'react'
import { content } from '../Content'
import { IoIosArrowRoundUp } from "react-icons/io";

const Programs = () => {

    const { programData } = content

    return (
        <section id='programs' className="py-14 pt-20">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-md" data-aos="zoom-in">
                    <h1 className="text-gray-800 text-3xl font-semibold sm:text-4xl tracking-wide" >Martial Art Programs</h1>
                    <p className="text-gray-600 mt-2">Extend and automate your workflow by using integrations for your favorite tools.</p>

                </div>
                <ul className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 group/list">
                    {
                        programData.map((item, i) => (
                            <li key={i}
                                className=" group/a rounded-lg shadow-sm shadow-blue-gray-400 hover:shadow-lg hover:shadow-blue-gray-500 group-hover/list:blur-sm hover:!blur-none cursor-pointer transition duration-300 ease-in"
                                data-aos="zoom-in"
                                data-aos-delay={i * 500}
                            >

                                <div className="flex items-center justify-between p-4 ">
                                    <div className="space-y-2 flex flex-col items-center">
                                        <img src={item.image} alt={item.title} loading="lazy" className='h-36 group-hover/a:scale-110 transition-all duration-300 ease-in' />

                                        <h4 className="text-gray-800 font-semibold">{item.title}</h4>
                                        <p className="text-gray-600 text-sm text-justify">{item.description}</p>
                                    </div>
                                    {/* <button className="text-gray-700 text-sm border rounded-lg px-3 py-2 duration-150 hover:bg-gray-100">Connect</button> */}
                                </div>
                                <div className="py-5 px-4  text-center  ">
                                    <a href=' ' className="text-indigo-600 hover:text-indigo-500 text-sm font-semibold ">
                                        Learn more
                                        <span className='inline-block'>
                                            <IoIosArrowRoundUp className=' rotate-45 text-lg transform translate-x-0 translate-y-[5px] group-hover/a:translate-y-[2px] group-hover/a:translate-x-[3px] transition-all duration-150' />
                                        </span>
                                    </a>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </section>
    )
}
export default Programs