import React from 'react'
import Gallery from './Media/Gallery'
import Videos from './Media/Videos'

const Media = () => {
    return (
        <section className="py-9 " id='media'>
            <div className="max-w-screen-xl mx-auto px-4  text-gray-600 md:px-8">
                <Gallery />
                <Videos />
            </div>
        </section>
    )
}

export default Media