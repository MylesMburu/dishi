import React from 'react'
import {ImSearch} from 'react-icons/im'



const Search = () => {
  return (
    <div id='Find' className='h-40 bg-gray-400'>
    
      <div className='flex justify-center items-center flex-row'>

      <ImSearch className='pr-1 w-5 mt-8'/>
      <input type="text" placeholder=' What would you like to cook?' id="" className='md:w-6/12 rounded mt-8 relative sm:w-3/12 ' />
      <button type="submit" className='mt-8 ml-2 bg-white px-1 rounded'>Search</button>
      </div>
      
      </div>
      
  )
}

export default Search