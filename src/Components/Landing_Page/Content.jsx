import React from 'react'
import Programs from '../Landing_Page/Container/Programs'
import Hero from '../Landing_Page/Container/Hero'
import About from '../Landing_Page/Container/About'
import Media from '../Landing_Page/Container/Media'
import Team from '../Landing_Page/Container/Team'
import Contact from '../Landing_Page/Container/Contact'
import Tournament from './Container/Tournament'


const Content = () => {
    
    return (
        <main>
            <Hero />
            <Programs />
            <About />
            <Tournament />
            <Media />
            <Team />
            <Contact />
        </main>
    )
}

export default Content