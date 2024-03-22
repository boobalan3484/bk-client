import React from 'react'
import { IoIosArrowRoundForward, IoIosArrowRoundUp } from 'react-icons/io';
import { IoRibbonSharp } from "react-icons/io5";
import { Link } from 'react-router-dom'

const Tournament = () => {

    const jobs = [
        {
            title: "Shotakan Karate",
            desc: "Currently, ManTech is seeking a motivated, career and customer-oriented Software Developer to join our team in Fort Meade, MD.",
            date: "May 17, 2022",
            guest: 'Mr.Qwertyu, Director of XYZ Federation',
            location: "Columbia, MD",
            impression: "Registration Open",

        },
        {
            title: "Silambam ",
            desc: " Help us solve problems and develop great user interface tools for our developers.",
            date: "Nov 11, 2022",
            guest: 'Mr.Asdfghj, Director of ABC Federation',
            location: "Remote",
            impression: "Registration Closed"
        },
        {
            title: "Nunchaku",
            desc: "This position is 100% remote, working as part of a small, multi-functional team. You must be confident at working alone.",
            date: "Jan 2, 2022",
            guest: 'Mr.Zxcvbnm, Director of MNO Federation',
            location: "Remote",
            impression: "Registration Open"
        },
    ]

    const labelColors = {
        "Registration Open": {
            color: "text-green-600 bg-green-50",
        },
        "Registration Closed": {
            color: "text-red-600 bg-red-50",
        },
    }

    return (

        <section id='tournament' className="py-14 pt-20">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-xl" data-aos="zoom-in">
                    <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        Tournament
                    </h3>
                    <p className="text-gray-600 mt-3">
                        We organize various competitions in each program and issue dojo certificates to participants.
                    </p>
                </div>

                <div className="mt-8" >
                    <ul className="space-y-4">
                        {
                            jobs.map((item, i) => (
                                <li key={i} className="py-4 bg-white rounded-md "
                                    data-aos="zoom-in"
                                    data-aos-delay={i * 400}>
                                    <div>
                                        <div className="justify-between sm:flex">
                                            <div className="flex-1">
                                                <h3 className="text-xl font-semibold text-indigo-600">
                                                    {item.title}
                                                </h3>
                                                <p className="text-gray-500 mt-2 pr-2 max-w-3xl">
                                                    {item.desc}
                                                </p>
                                            </div>
                                            <div className="mt-5 space-y-4 text-sm sm:mt-0 sm:space-y-3">
                                                <span className="flex items-center text-gray-500">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                                    </svg>
                                                    {item.date}
                                                </span>
                                                <span className="flex items-center text-gray-500">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                                    </svg>
                                                    {item.location}
                                                </span>
                                                <span className="flex items-center text-gray-500">

                                                    {item.impression === "Registration Open" ? (
                                                        <Link to={`/${'contact'}`} key={i} className='group/a'>
                                                            <span className={`w-36 py-2 flex justify-center items-center gap-1 rounded-full font-semibold text-xs ${labelColors[item.impression]?.color || ""}`}>
                                                                {item.impression}
                                                                <IoIosArrowRoundForward className='absolute -translate-x-14 pt-[1px] group-hover/a:translate-x-14 duration-1000'/>
                                                            </span>
                                                        </Link>
                                                    ) : (
                                                        <span className={`w-36 py-2 cursor-not-allowed flex justify-center rounded-full font-semibold text-xs ${labelColors[item.impression]?.color || ""}`} key={i}>
                                                            {item.impression}
                                                        </span>
                                                    )}

                                                </span>

                                            </div>
                                        </div>
                                        <div className=" items-center space-y-4 text-sm md:flex md:space-x-4 md:space-y-0">



                                            <span className="flex items-center gap-3 bg-light-blue-100/30  py-2 px-4 rounded-md">
                                                <span className='flex items-center gap-2'>
                                                    <IoRibbonSharp />
                                                    Chief Guest
                                                </span>
                                                -
                                                <span className='text-blue-800 font-bold'>
                                                    {item.guest}
                                                </span>

                                            </span>
                                        </div>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}



export default Tournament