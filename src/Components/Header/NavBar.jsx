import React, { useState } from 'react'
import Brand from './Brand'
import NavLinks from './NavLinks'

const NavBar = ({ navScroll, navStyle, navPadding, navText }) => {

  const [active, setActive] = useState(false)

  const handleNavActive = () => {
    setActive(!active)
  }

  return (

    <header className={`fixed top-0 z-20 w-full backdrop-blur-lg md:backdrop-blur-md transition-transform duration-300 ease-in-out ${navStyle} ${navScroll ? '-translate-y-full' : 'translate-y-0 '}`}>

      <nav className="  w-full md:static md:text-sm md:border-none">

        <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">

          <div className={`flex items-center justify-between ${navPadding} md:block`}>

            <Brand />

            <div className="md:hidden">
              <button className="text-gray-500 hover:text-gray-800"
                onClick={() => handleNavActive()}
              >
                {
                  active ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                  )
                }
              </button>
            </div>

          </div>

          <div className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${active ? 'block' : 'hidden'}`}>

            <NavLinks
              navText={navText}
            />

          </div>

        </div>

      </nav>
    </header>

  )
}


export default NavBar