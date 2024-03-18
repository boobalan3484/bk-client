import React from 'react'
import { content } from '../../../../Utils/Content'
import { Link } from 'react-scroll'

const NavLinks = () => {

  const { nav } = content

  return (

    <ul className={`md:flex justify-end items-center space-y-6 md:space-x-6 md:space-y-0 group/list `}>
      {
        nav.map((item, i) =>
        (
          <li key={i} className={`text-blue-gray-800 `}
            data-aos="fade-down"
          >
            {/* <a href={item.path} className=" md:block flex justify-center tracking-wide font-semibold hover:drop-shadow-sm">
                {item.title.toUpperCase()}
              </a> */}
            <Link to={`${item.path}`}
              activeClass='active'
              smooth={true}
              duration={300}
              spy={true}
              offset={0}
              key={i}
              className="md:block flex justify-center tracking-wide font-semibold hover:drop-shadow-sm cursor-pointer hover:text-indigo-700 md:hover:!opacity-100 md:group-hover/list:opacity-50 ">
              {item.title.toUpperCase()}
            </Link>
          </li>
        )
        )}
    </ul>

  )
}

export default NavLinks