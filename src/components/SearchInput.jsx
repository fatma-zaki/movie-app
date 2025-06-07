"use client"

import Image from "next/image"
import { useRouter } from "next/navigation";

function SearchInput() {

    const router = useRouter();

const handleSearch = (e)=>{
e.preventDefault();
const formData = new FormData(e.currentTarget);
const name = formData.get('name');
if(name){
router.push(`/list?name=${name}`)
}
}

  return (
   <form action="" className="flex items-center justify-between gap-4 bg-gray-50 p-2 rounded-md flex-1 " onSubmit={handleSearch}>
    <input type="text" placeholder="Search" name="name"  className="flex-1 bg-transparent outline-none"/>
    <button className="cursor-pointer">
        <Image src='/search.png' alt="" width={16} height={16}/>
    </button>
   </form>
  )
}

export default SearchInput