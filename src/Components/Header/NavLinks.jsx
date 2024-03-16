import React from 'react'
import { content } from '../../Content'
import { Link } from 'react-scroll'

const NavLinks = ({ navText }) => {

  const { nav } = content

  return (

    <ul className="md:flex justify-end items-center space-y-6 md:space-x-6 md:space-y-0 group/list">
      {
        nav.map((item, i) =>
        (
          <li key={i} className={`text-blue-gray-800 md:hover:!opacity-100 md:group-hover/list:opacity-50`}>
            {/* <a href={item.path} className=" ${navText} md:block flex justify-center tracking-wide font-semibold hover:drop-shadow-sm">
                {item.title.toUpperCase()}
              </a> */}
            <Link to={`${item.path}`}
              activeClass='active'
              smooth={true}
              duration={300}
              spy={true}
              offset={0}
              key={i}
              className="md:block flex justify-center tracking-wide font-semibold hover:drop-shadow-sm cursor-pointer ">
              {item.title.toUpperCase()}
            </Link>
          </li>
        )
        )}

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