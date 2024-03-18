import React from 'react'
import Programs from '../Landing_Page/Container/Programs'
import Hero from '../Landing_Page/Container/Hero'
// import Footer from '../Landing_Page/Container/Footer'
import About from '../Landing_Page/Container/About'
import Media from '../Landing_Page/Container/Media'
import Team from '../Landing_Page/Container/Team'
import Contact from '../Landing_Page/Container/Contact'


const Content = () => {
    
    return (
        <main>
            <Hero />
            <Programs />
            <About />
            <Team />
            <Media />
            <Contact />
            {/* <Footer /> */}
        </main>
    )
}

export default Content