import React from 'react'
import Gallery from './Gallery'
import Videos from './Videos'

const Media = () => {
    return (
        <section className="py-14" id='media'>
            <div className="max-w-screen-xl mx-auto px-4 text-center text-gray-600 md:px-8">
                <div className="max-w-2xl mx-auto">
                    <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        Gallery
                    </h3>
                    <p className="mt-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius, enim ex faucibus purus.
                    </p>
                </div>
                <Gallery />
                <Videos />
            </div>
        </section>
    )
}

export default Media