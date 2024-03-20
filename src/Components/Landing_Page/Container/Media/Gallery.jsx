import React, { Fragment } from 'react';
import { Carousel } from "@material-tailwind/react";
import { content } from '../../../../Utils/Content'


const Gallery = () => {

    const { images } = content

    const navi = () => (
        <span
            className='hidden'
        />
    )

    return (

        <>
            <div className="max-w-xl" data-aos="zoom-in">
                <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                    Gallery
                </h3>
                <p className="mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius, enim ex faucibus purus.
                </p>
            </div>
            <div className="mt-8  grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3" >
                {images.map((image, i) => (
                    <Fragment key={i} >
                        <Carousel loop={true} autoplay={true} className="rounded-xl " navigation={navi} nextArrow={navi} prevArrow={navi} data-aos="zoom-in" data-aos-delay='350'>
                            {image.set1.map((item) => (
                                <img
                                    key={item.id}
                                    src={item.src}
                                    alt={item.alt}
                                    className="h-56 sm:h-64 w-full object-cover object-center"
                                />
                            ))}
                        </Carousel>
                        <Carousel loop={true} autoplay={true} className="rounded-xl " navigation={navi} nextArrow={navi} prevArrow={navi} data-aos="zoom-in" data-aos-delay='750'>
                            {image.set2.map((item) => (
                                <img
                                    key={item.id}
                                    src={item.src}
                                    alt={item.alt}
                                    className="h-56 sm:h-64 w-full object-cover object-center"
                                />
                            ))}
                        </Carousel>
                        <Carousel loop={true} autoplay={true} className="rounded-xl " navigation={navi} nextArrow={navi} prevArrow={navi} data-aos="zoom-in" data-aos-delay='1000'>
                            {image.set3.map((item) => (
                                <img
                                    key={item.id}
                                    src={item.src}
                                    alt={item.alt}
                                    className="h-56 sm:h-64 w-full object-cover object-center"
                                />
                            ))}
                        </Carousel>
                    </Fragment>
                ))}
            </div>
        </>

    );
}

export default Gallery;
