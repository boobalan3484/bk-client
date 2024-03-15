import React from 'react'
import { content } from '../../Content'
import { Link } from 'react-scroll'

const NavLinks = () => {

  const { nav } = content

  return (

    <ul className="justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
      {
        nav.map((item, i) =>
        (
          <>
            <li className="text-gray-700 hover:text-indigo-600  ">
              {/* <a href={item.path} className="md:block flex justify-center tracking-wide font-semibold hover:drop-shadow-sm">
                {item.title.toUpperCase()}
              </a> */}
              <Link to={`${item.title.toLowerCase()}`} 
              activeClass='active'
              smooth={true}
              duration={200}
              spy={true}
              offset={0}
              key={i}
              
              className="md:block flex justify-center tracking-wide font-semibold hover:drop-shadow-sm">
                {item.title.toUpperCase()}
              </Link>
            </li>
          </>

        )
        )
      }

      {/* <span className='hidden w-px h-6 bg-gray-300 md:block'></span> */}

      {/* <div className='space-y-3 items-center gap-x-6 md:flex md:space-y-0'> */}
      {/* <li>
        <a href="" className="block py-3 text-center text-gray-700 hover:text-indigo-600 border rounded-lg md:border-none">
          Log in
        </a>
      </li> */}
      {/* <li> */}
      {/* <a href=" / " className="block py-3 px-4 font-medium text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 active:shadow-none rounded-lg shadow md:inline">
        Sign in
      </a> */}
      {/* </li> */}
      {/* </div> */}
    </ul>

  )
}

export default NavLinks