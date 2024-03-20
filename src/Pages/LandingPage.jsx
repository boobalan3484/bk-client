import { React, useState, useEffect } from 'react'

import Header from '../Components/Landing_Page/Header'
import Content from '../Components/Landing_Page/Content'
import Footer from '../Components/Landing_Page/Footer'

const LandingPage = () => {

    const [scrolling, setScrolling] = useState(false);
    const [scrollTop, setScrollTop] = useState(0);
    const [navStyle, setNavStyle] = useState('py-2');
    // const [navPadding, setNavPadding] = useState('py-3 md:py-5');
    // const [navText, setNavText] = useState('text-base');

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
                    setNavStyle(currentScroll > scrollTop ? ' shadow-sm backdrop-blur-sm' : 'shadow-none py-2')
                    // setNavPadding((currentScroll > scrollTop) ? 'py-2 ' : 'py-3 md:py-5 ')
                    // setNavText((currentScroll > scrollTop) ? 'text-base ' : 'text-base')
                    setScrolling((currentScroll))
                }
                else {
                    setNavStyle(!(currentScroll > scrollTop) ? ' shadow-lg bg-Nav backdrop-blur-md py-0' : 'shadow-sm bg-Nav backdrop-blur-sm')
                    // setNavPadding((currentScroll > scrollTop) ? 'py-1' : 'py-2 md:py-3')
                    // setNavText((currentScroll > scrollTop) ? '' : '')
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