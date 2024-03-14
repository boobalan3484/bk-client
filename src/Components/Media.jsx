import React from 'react'
import Gallery from './Gallery'
import Videos from './Videos'

const Media = () => {
    return (
        <section className="py-16 pt-20" id='media'>
            <div className="max-w-screen-xl mx-auto px-4 text-center text-gray-600 md:px-8">
                <Gallery />
                <Videos />
            </div>
        </section>
    )
}

export default Media