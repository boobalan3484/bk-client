import React from 'react'
import Programs from '../Components/Programs'
import Hero from '../Components/Hero'
import Footer from '../Components/Footer'
import About from '../Components/About'
import Media from '../Components/Media'
import Team from '../Components/Team'
import Contact from '../Components/Contact'


const Content = () => {
    return (
        <main>
            <Hero />
            <Programs />
            <About />
            <Team />
            <Media />
            <Contact />
            <Footer />
        </main>
    )
}

export default Content