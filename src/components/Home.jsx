import React from 'react'
import IMG1 from '../assets/githeri.jpg'

const Home = () => {
  return (
    <div className='text-red-700 px-16 py-6 font-Poppins'>
        <div>
          <div className="login flex justify-center gap-6 mb-9 md:justify-end ">
          <a href="#">Log in</a>
          <a href="#">Sign up</a>
          </div>
        
          <header>
            <h2 className='text-gray-700 text-3xl uppercase'>Dishi</h2>
            <h3 className='text-gray-700 text-2xl'>Recipies</h3>
          </header>
        </div>

       <div>
        <h4 className='text-brown-700 font-bold mt-6 pb-2 border-b border-gray-300'>Latest Recipies</h4>
        <div className='card mt-8 rounded overflow-hidden'>
            {/* cards */}
            <img src={IMG1} alt="Image of githeri" />
            <div>
                <span>Githeri noma na avocado</span>
            </div>
        </div>
       </div>

    </div>
  )
}

export default Home