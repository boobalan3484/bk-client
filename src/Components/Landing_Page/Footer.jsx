import React, { Fragment, createElement } from 'react'
import { IoIosArrowRoundUp } from "react-icons/io";
import { content } from '../../Utils/Content'
import { Link } from 'react-router-dom';

const Footer = () => {

    const { contactMethods, socialMedia } = content;

    return (

        <footer className='sticky bg-Nav backdrop-blur-md ' style={{ boxShadow: '0 -8px 15px -3px #e0e0e0' }}  >

            <section className="text-gray-800  px-4 py-5 max-w-screen-xl mx-auto md:px-8" >

                <div className=' max-w-xl md:max-w-full flex flex-col lg:flex-row justify-between  gap-5'>


                    {contactMethods.map((methods, i) => (

                        <Fragment key={i}>

                            <ul className="mt-6 flex flex-col flex-wrap gap-x-10 gap-y-4 items-start">
                                <h3 className=" font-bold text-sm uppercase tracking-wide">Stay connected</h3>
                                {methods.contact.slice(1).map((item, i) => (
                                    <li key={i} >
                                        <a href={item.link} target='_blank' className='flex items-center gap-x-3'>
                                            <div className="flex-none text-gray-400">
                                                {item.icon}
                                            </div>
                                            <p className='text-xs md:text-sm'>{item.contact}</p>
                                        </a>
                                    </li>
                                ))}
                            </ul>

                            <div>
                                <table className="mt-6 table-auto text-sm text-left">
                                    <thead className="text-gray-600 font-medium border-b">
                                        <tr>
                                            <th className="pb-2 pr-6 uppercase tracking-wide">Training Location</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-gray-600 divide-y border-b">
                                        {methods.locationTiming.map((item, i) => (
                                            <tr key={i}>

                                                <td className="pr-[18px] py-2">
                                                    <a href={item.link} target='_blank' rel="noreferrer noopener" className="text-blue-gray-600 hover:text-indigo-500  text-xs md:text-sm group">
                                                        {item.name}
                                                        <span className='inline-block'>
                                                            <IoIosArrowRoundUp className=' rotate-45 text-lg transform translate-x-0 translate-y-[5px] group-hover:translate-y-[2px] group-hover:translate-x-[3px] transition-all duration-150' />
                                                        </span>
                                                    </a>
                                                </td>
                                                <td className="text-xs md:text-sm py-2 ">{item.days}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                        </Fragment>
                    ))}

                </div>

                <div className="mt-8 items-center justify-between sm:flex">
                    <div className="mt-4 sm:mt-0 text-sm">
                        &copy; 2024 Bohar Karate Training School. All rights reserved.
                    </div>
                    <div className="mt-6 sm:mt-0">
                        <ul className="flex items-center space-x-4">
                            {socialMedia.map((item, i) => (
                                <li key={i} className="w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:shadow-blue-gray-800 hover:transition-all hover:duration-100 ">
                                    <a href={item.link} className=''>
                                        {createElement(item.icon, { className: `w-6 h-6 ${item.color}` })}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

            </section>

        </footer >
    )
}

export default Footer