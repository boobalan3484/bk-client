import React from 'react'
import logo from '../../../../Assets/hero/logo.png'

const Brand = () => {
  return (
    <>
      <a href="/" className='flex items-center gap-4' 
      data-aos="fade-down"
        >
        <img
          src={logo}
          alt="Float UI logo"
          className='object-cover w-20'
        />
        <p className='hidden lg:flex lg:text-lg flex-wrap font-bold tracking-wide text-gray-900'>
        BOHAR KARATE TRAINING SCHOOL
        </p>
      </a>
    </>

  )
}

export default Brand