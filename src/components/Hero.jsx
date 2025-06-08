
import React from 'react'
import SearchInput from './SearchInput'

function Hero() {
  return (
    <div className='w-[95%]  m-auto bg-gray-100 min-h-80 rounded-lg mb-20 mt-20 p-5'>
        <h2 className='caret-black text-2xl font-extrabold md:text-4xl capitalize'>
            welcome to our movie app
        </h2>
        <p>welcome</p>
        <SearchInput/>
    </div>
  )
}

export default Hero