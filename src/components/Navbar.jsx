"use client"
import Image from 'next/image'
import React from 'react'
import { usePathname } from "next/navigation";
import Link from 'next/link';
function Navbar () {
  const pathname = usePathname();
  
    //  dynamic header content
    let headerTitle = "Default Header";
  
    if (pathname === "/") {
      headerTitle = "Home Page";
    } else if (pathname.startsWith("/movies")) {
      headerTitle = "Movies List";
    } else if (pathname.startsWith("/search")) {
      headerTitle = "Search";
    }else if (pathname.startsWith("/watch")) {
      headerTitle = "Watch List";
    }




  return (
    <div className=' w-full  bg-gray-50 flex flex-col z-20 relative'>
      <div className='h-2/3 px-12 p-6'>{headerTitle}</div>
      <nav className='bg-[#ffe353] h-1/3 flex justify-between px-12 py-2'>
      <Link href='/'>
      
        <div>movie app</div>
      </Link>
        <div>

<Link href='/watch' className='flex gap-1'>
        <Image src='/heart2.png' alt='' width={24} height={24} />

watch list
</Link>

        </div>
      </nav>
    </div>
  )
}

export default Navbar
