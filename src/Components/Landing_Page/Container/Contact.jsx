import React from 'react'
import { IoIosArrowRoundUp } from "react-icons/io";
import { Link } from 'react-router-dom';


const Contact = () => {

    return (
        <section className="py-14 pt-20" id='contact'>
            <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                <div className="max-w-lg mx-auto gap-6 justify-between lg:flex lg:max-w-none">
                    <div className="max-w-lg space-y-3"
                        data-aos="fade-up"
                    >
                        <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                            Contact
                        </h3>
                        <p className="text-gray-800 text-xl font-semibold sm:text-2xl">
                            Let us know how we can help
                        </p>
                        <p>
                            We’re here to help and answer any question you might have, We look forward to hearing from you! Please fill out the form, or us the contact information below .
                        </p>

                        <div className="py-5 px-1  text-start  ">
                            <Link to='contact' className="text-indigo-600 hover:text-indigo-500 text-sm font-semibold ">
                                Navigate to
                                <span className='inline-block'>
                                    <IoIosArrowRoundUp className=' rotate-45 text-lg transform translate-x-0 translate-y-[5px] group-hover/a:translate-y-[2px] group-hover/a:translate-x-[3px] transition-all duration-150' />
                                </span>
                            </Link>
                        </div>
                    </div>

                    <div data-aos="fade-up" className='flex-1 mt-12' data-aos-delay="600">
                        <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7440.834390326187!2d78.07128195572346!3d11.378158515632478!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babdd0071f4d21b%3A0x22207226fdc8f9b!2sGovernment%20Hospital%20%F0%9F%8F%A5%20Periyamanali!5e0!3m2!1sen!2sin!4v1710582024274!5m2!1sen!2sin" className=' w-full h-52 border-0' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Contact