import React from 'react'
// import { IoIosArrowRoundUp } from "react-icons/io";
// import Karate from '../../../../Assets/programs/Karate.jpg'

// import video1 from '../../Assets/videos/Video1.mp4'
// import video2 from '../../Assets/videos/Video2.mp4'
// import video3 from '../../Assets/videos/Video3.mp4'
// import video4 from '../../../../Assets/videos/video4.mp4'
// import video5 from '../../../../Assets/videos/video5.mp4'

const Videos = () => {
    return (
        <div className="mt-16 grid items-center gap-y-8 gap-x-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">

            {/* <div className='flex flex-row sm:flex-col md:flex-col lg:flex-row gap-2 md:gap-6 items-center justify-center'
                data-aos="fade-up"
            >
                <img src={Karate} alt='' className='h-20 md:h-28 lg:h-36 rounded-full border-2 border-blue-gray-900 md:flex' />
                <div className='grid gap-3 '>
                    <h3 className='text-gray-800 text-2xl font-semibold sm:text-4xl md:text-3xl lg:text-4xl'>
                        Channel name
                    </h3>
                    <p className='hidden lg:flex '>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde molestiae repellat doloremque quos ullam nobis nam.
                    </p>
                    <div className="pr-4 ">
                        <a href=' ' className="text-indigo-600 hover:text-indigo-500  text-sm font-semibold group">
                            Visit our channel
                            <span className='inline-block'>
                                <IoIosArrowRoundUp className=' rotate-45 text-lg transform translate-x-0 translate-y-[5px] group-hover:translate-y-[2px] group-hover:translate-x-[3px] transition-all duration-150' />
                            </span>
                        </a>
                    </div>
                </div>
            </div> */}

            {/* <iframe className="mx-auto w-full lg:max-w-xl h-56 rounded-lg sm:h-64 shadow-xl" src="https://www.youtube.com/embed/KaLxCiilHns" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen
                data-aos="fade-up" data-aos-delay='700'
            >
            </iframe> */}


            {/* <iframe className="mx-auto w-full lg:max-w-xl h-56 rounded-lg sm:h-64 shadow-xl" src="https://www.youtube.com/embed/KaLxCiilHns" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}

            <iframe
                className="mx-auto w-full lg:max-w-xl h-56 rounded-lg sm:h-64 shadow-xl"
                src="https://drive.google.com/file/d/1LSYbbqUWXkqH0LY8IU4GS35IUr9yxLHp/preview"
                title="video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                data-aos="fade-up"
                loading="lazy"
            >
            </iframe>
            <iframe
                className="mx-auto w-full lg:max-w-xl h-56 rounded-lg sm:h-64 shadow-xl"
                src="https://drive.google.com/file/d/16ioLW6Bfw1lAQI8lHGpLw4dluhOj6kDN/preview"
                title="video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                data-aos="fade-up"
                data-aos-delay='700'
                loading="lazy"
            >
            </iframe>

        </div>
    )
}

export default Videos