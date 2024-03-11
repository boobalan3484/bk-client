import React from 'react'
import Programs from '../Components/Programs'
import Hero from '../Components/Hero'
// import Footer from '../Components/Footer'
import Feature from '../Components/Feature'
import About from '../Components/About'
import Gallery from '../Components/Gallery'


const Content = () => {
    return (
        <main>
            <Hero />
            <Programs />
            <About />
            <Feature />
            <Gallery />
            {/* <Footer /> */}
        </main>
    )
}

export default Content