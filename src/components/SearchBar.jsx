import React from 'react'

//Receive the search value and function from the parent component
function SearchBar({search, setSearch}) {
  return (
    <div className='p-4'>
      <input type="text"
            placeholder='Search for a pet...' 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className='w-full border rounded-lg p-2'
      />
    </div>
  )
}

export default SearchBar
