import React from 'react'
import logo from '../../Assets/hero/logo.png'

const Brand = () => {
  return (
    <>
      <a href="/" className='flex items-center gap-2' 
      data-aos="fade-down"
        >
        <img
          src={logo}
          alt="Float UI logo"
          className='object-cover w-20'
        />
        <p className=' hidden md:text-[15px] lg:text-base font-bold tracking-wide text-gray-900'>
          BOHAR KARATE TRAINING SCHOOL
        </p>
      </a>
    </>

  )
}

export default Brand