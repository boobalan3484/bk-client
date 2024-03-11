import React from 'react'

const Videos = () => {
    return (
        <div className="mt-12 ">
            <div className="grid gap-y-8 gap-x-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
                <iframe className="mx-auto w-full lg:max-w-xl h-56 rounded-lg sm:h-64 shadow-xl" src="https://www.youtube.com/embed/KaLxCiilHns" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <iframe className="mx-auto w-full lg:max-w-xl h-56 rounded-lg sm:h-64 shadow-xl" src="https://www.youtube.com/embed/KaLxCiilHns" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
        </div>
    )
}

export default Videos