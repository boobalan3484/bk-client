import React, { Fragment } from 'react';
import { Carousel } from "@material-tailwind/react";
import { content } from '../../Content'

const Gallery = () => {

    const { images } = content

    const navi = ({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
                <span
                    key={i}
                    className={`hidden`}
                    onClick={() => setActiveIndex(i)}
                />
            ))}
        </div>
    )

    return (

        <section
            data-aos="zoom-in"
        >
            <div className="max-w-2xl mx-auto">
                <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                    Gallery
                </h3>
                <p className="mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius, enim ex faucibus purus.
                </p>
            </div>
            <div className="mt-8  grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
                {images.map((image, i) => (
                    <Fragment key={i}>
                        <Carousel loop={true} autoplay={true} className="rounded-xl " navigation={navi} nextArrow={navi} prevArrow={navi}>
                            {image.set1.map((item) => (
                                <img
                                    key={item.id}
                                    src={item.src}
                                    alt={item.alt}
                                    className="h-56 sm:h-64 w-full object-cover object-center"
                                />
                            ))}
                        </Carousel>
                        <Carousel loop={true} autoplay={true} className="rounded-xl " navigation={navi} nextArrow={navi} prevArrow={navi}>
                            {image.set2.map((item) => (
                                <img
                                    key={item.id}
                                    src={item.src}
                                    alt={item.alt}
                                    className="h-56 sm:h-64 w-full object-cover object-center"
                                />
                            ))}
                        </Carousel>
                        <Carousel loop={true} autoplay={true} className="rounded-xl " navigation={navi} nextArrow={navi} prevArrow={navi}>
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
        </section>

    );
}

export default Gallery;
