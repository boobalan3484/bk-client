import React from 'react'

const Contact = () => {

    return (
        <section className="py-14 pt-20" id='contact'>
            <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                <div className="max-w-lg mx-auto gap-12 justify-between lg:flex lg:max-w-none">
                    <div className="max-w-lg space-y-3" data-aos="fade-right">
                        {/* <h3 className="text-indigo-600 font-semibold">
                            Contact
                        </h3> */}
                        <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                            Contact
                        </h3>
                        <p className="text-gray-800 text-xl font-semibold sm:text-2xl">
                            Let us know how we can help
                        </p>
                        <p>
                            We’re here to help and answer any question you might have, We look forward to hearing from you! Please fill out the form, or us the contact information bellow .
                        </p>

                    </div>

         <div data-aos="fade-left">
         <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7440.834390326187!2d78.07128195572346!3d11.378158515632478!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babdd0071f4d21b%3A0x22207226fdc8f9b!2sGovernment%20Hospital%20%F0%9F%8F%A5%20Periyamanali!5e0!3m2!1sen!2sin!4v1710582024274!5m2!1sen!2sin" width="600" height="200" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>         </div>


                    {/* <div className="flex-1 mt-12 sm:max-w-lg lg:max-w-md">
                        <form
                            onSubmit={(e) => e.preventDefault()}
                            className="space-y-5"
                        >
                            <div>
                                <label className="font-medium">
                                    Full name
                                </label>
                                <input
                                    type="text"
                                    required
                                    placeholder='Example: John Doe'
                                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                />
                            </div>
                            <div>
                                <label className="font-medium">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    required
                                    placeholder='Example: support@example.com'
                                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                />
                            </div>
                            <div>
                                <label className="font-medium">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    required
                                    placeholder='Example: Enquire about...'
                                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                />
                            </div>
                            <div>
                                <label className="font-medium">
                                    Message
                                </label>
                                <textarea
                                    required
                                    placeholder='Example: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur sint dolorum quos iusto atque inventore laudantium id fugit maxime sunt omnis, quasi voluptatibus similique architecto, distinctio cupiditate natus qui quae!'
                                    className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"></textarea>
                            </div>
                            <button
                                className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
                            >
                                Submit
                            </button>

                        </form>
                    </div> */}
                </div>
            </div>
        </section>
    )
}

export default Contact