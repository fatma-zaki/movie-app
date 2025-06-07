import Image from 'next/image'
import React from 'react'

function Navbar () {
  return (
    <div className=' w-full h-24 bg-gray-50 flex flex-col z-20 fixed'>
      <div className='h-2/3 p-6'>Home</div>
      <nav className='bg-[#ffe353] h-1/3 flex justify-between pl-6 pr-6'>
        <div>movie app</div>
        <div>

        <Image src='/heart2.png' alt='' width={24} height={24} />


        </div>
      </nav>
    </div>
  )
}

export default Navbar
