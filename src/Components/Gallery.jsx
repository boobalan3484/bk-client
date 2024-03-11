import React, { Fragment } from 'react';
import { Carousel } from "@material-tailwind/react";
import { content } from '../Content'

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

        <div className="mt-12">
            <div className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
                {images.map((image, i) => (
                    <Fragment key={i}>
                        <Carousel loop={true} autoplay={true} className="rounded-xl " navigation={navi} nextArrow={navi} prevArrow={navi}>
                            {image.set1.map((item) => (
                                <img
                                    key={item.id}
                                    src={item.src}
                                    alt={item.alt}
                                    className="h-full w-full object-cover object-center"
                                />
                            ))}
                        </Carousel>
                        <Carousel loop={true} autoplay={true} className="rounded-xl " navigation={navi} nextArrow={navi} prevArrow={navi}>
                            {image.set2.map((item) => (
                                <img
                                    key={item.id}
                                    src={item.src}
                                    alt={item.alt}
                                    className="h-full w-full object-cover object-center"
                                />
                            ))}
                        </Carousel>
                        <Carousel loop={true} autoplay={true} className="rounded-xl " navigation={navi} nextArrow={navi} prevArrow={navi}>
                            {image.set3.map((item) => (
                                <img
                                    key={item.id}
                                    src={item.src}
                                    alt={item.alt}
                                    className="h-full w-full object-cover object-center"
                                />
                            ))}
                        </Carousel>
                    </Fragment>
                ))}
            </div>
        </div>

    );
}

export default Gallery;
