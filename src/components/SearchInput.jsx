'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

function SearchInput () {
  const router = useRouter()

  const handleSearch = e => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const query = formData.get('query')

    if (query) {
      router.push(`/search?query=${query}`)
    }
  }

  return (
    <form
      onSubmit={handleSearch}
      className='flex flex-col md:flex-row items-center justify-between gap-4 rounded-md flex-1 p-10'
    >
      <input
        type='text'
        name='query'
        placeholder='Search'
        className='flex-1/2 md:flex-3/4 xl:flex-5/6 bg-transparent outline-none border-gray-200 border-2 rounded-2xl p-2'
      />
      <button className='cursor-pointer  bg-[#ffe353] flex-1/2 md:flex-1/4 xl:flex-1/6 px-4 py-3 rounded-2xl flex justify-center gap-1'>
        Search
        <Image src='/search-glass.png' alt='' width={12} height={9} />
      </button>
    </form>
  )
}

export default SearchInput
