import Content from './Layout/Content';
import Header from './Layout/Header';
// import PageRoutes from './PageRoutes';
import { React, useState, useEffect } from 'react'

import AOS from 'aos'
import "aos/dist/aos.css"
 
function App() {

  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  const [navStyle, setNavStyle] = useState('');
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
          setNavStyle(currentScroll > scrollTop ? ' shadow-sm ' : 'shadow-none')
          // setNavPadding((currentScroll > scrollTop) ? 'py-2 ' : 'py-3 md:py-5 ')
          // setNavText((currentScroll > scrollTop) ? 'text-base ' : 'text-base')
          setScrolling((currentScroll))
        }
        else {
          setNavStyle(!(currentScroll > scrollTop) ? ' shadow-lg nav-bg' : 'shadow-sm nav-bg')
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


  useEffect(()=>{
    AOS.init({
    offset: 100,
    duration: 1800,
  })
},[])

  return (
    <div className='App'>
      <Header
        navScroll={scrolling}
        navStyle={navStyle}
        // navPadding={navPadding}
        // navText={navText}
      />
      <Content />
      {/* <PageRoutes /> */}
    </div>
  );
}

export default App;
