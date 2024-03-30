import { React, useState, useEffect } from 'react'

import Header from '../Components/Landing_Page/Header'
import Content from '../Components/Landing_Page/Content'
import Footer from '../Components/Landing_Page/Footer'

const LandingPage = () => {

    const [scrolling, setScrolling] = useState(false);
    const [scrollTop, setScrollTop] = useState(0);
    const [navStyle, setNavStyle] = useState('py-2');

    useEffect(() => {

        const handleNavScroll = () => {

            const currentScroll = window.scrollY;

            setScrollTop(currentScroll);

            const heroSection = document.getElementById('hero');
            if (heroSection) {
                const heroSectionBottom = heroSection.offsetTop + (heroSection.clientHeight);
                setScrolling(currentScroll > scrollTop);

                // setScrolling(currentScroll < heroSectionBottom && currentScroll > scrollTop);


                if (currentScroll < heroSectionBottom) {
                    setNavStyle(currentScroll > scrollTop ? ' backdrop-blur-md shadow-none ' : 'backdrop-blur-md shadow-none pt-2')
                    setScrolling((currentScroll))
                }
                else {
                    setNavStyle(!(currentScroll > scrollTop) ? ' shadow-lg bg-Nav backdrop-blur-md ' : 'shadow-lg bg-Nav backdrop-blur-md')
                }

            }
        };
        window.addEventListener('scroll', handleNavScroll);
        return () => {
            window.removeEventListener('scroll', handleNavScroll);
        };
    }, [scrollTop]);

    return (
        <>
            <Header
                navScroll={scrolling}
                navStyle={navStyle}
            />
            <Content />
            <Footer />
        </>
    )
}

export default LandingPage