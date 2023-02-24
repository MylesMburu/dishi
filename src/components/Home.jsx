import React from 'react'
import IMG1 from '../assets/githeri.jpg'

const Home = () => {
  return (
    <div className='text-red-700'>
        <div>
        <a href="#">Log in</a>
        <a href="#">Sign up</a>
          <header>
            <h2 className='text-gray-700 text-3xl uppercase'>Dishi</h2>
            <h3 className='text-gray-700 text-2xl'>Recipies</h3>
          </header>
        </div>

       <div>
        <h4 className='font-bold'>Latest Recipies</h4>
        <div>
            {/* cards */}
            <img src={IMG1} alt="Image of githeri" />
            <div>
                <span>Githeri noma ya njahi</span>
            </div>
        </div>
       </div>

    </div>
  )
}

export default Home