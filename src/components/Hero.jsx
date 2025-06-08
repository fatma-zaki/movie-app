
import React from 'react'
import SearchInput from './SearchInput'

function Hero() {
  return (
    <div className='w-full bg-gray-100 h-80 rounded-lg mb-20 mt-20 p-10'>
        <h2 className='caret-black font-extrabold text-4xl capitalize'>
            welcome to our movie app
        </h2>
        <p>welcome</p>
        <SearchInput/>
    </div>
  )
}

export default Hero