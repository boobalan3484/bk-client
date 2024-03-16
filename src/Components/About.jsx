import React from 'react'

const About = () => {

    return (

        <section className="py-14 pt-20" id='about'>
            <div className="max-w-screen-xl mx-auto md:px-8">
                <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
                    <div className="flex-1 sm:hidden lg:block"  data-aos="fade-right">
                        <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" className="md:max-w-lg sm:rounded-lg" alt="" />
                    </div>
                    <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl" data-aos="fade-left">
                        {/* <h3 className="text-indigo-600 font-semibold">
                            Professional services
                        </h3> */}
                        <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl tracking-wide">
                            About us
                        </h3>
                        <p className="mt-3 text-gray-600">
                            Build your SaaS solution with help from our experts
                            <br />
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum, sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium
                        </p>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default About