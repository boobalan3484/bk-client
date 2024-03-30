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
          alt="Brand"
          className='object-cover w-14 md:w-16 lg:w-[72px]'
          loading="lazy"
        />
        <p className='hidden font-revue-bold lg:flex lg:text-lg flex-wrap font-bold tracking-wide text-indigo-800'>
          BOHAR KARATE TRAINING SCHOOL
        </p>
      </a>
    </>

  )
}

export default Brand