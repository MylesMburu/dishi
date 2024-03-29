import React, { useEffect, useState } from 'react'
import IMG1 from '../assets/githeri.jpg'
import IMG2 from '../assets/mukimo.webp'
import IMG3 from '../assets/pilau.webp'
import { AiOutlineClockCircle } from "react-icons/ai"; 



const Home = () => {
  const [popular, setPopular] = useState([]);

  useEffect (() =>{
    getPopular();
  },[]);

  const getPopular = async () => {
  const api = await fetch(
    `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=3`

  );
  console.log(api);
  const data = await api.json();
  console.log(data);
  
  setPopular(data.recipes)
  }



  return (
    <div id='Home' className='bg-gray-300 text-red-700 px-16 py-6 font-Poppins'>
        <div>
          <div className="login flex justify-center gap-6 mb-9 md:justify-end ">
          <a href="#" className='btn'>Log in</a>
          <a href="#" className='btn border-l-2 pl-4 border-black'>Sign up</a>
          </div>
        
          <header>
            <h2 className='text-gray-700 text-3xl uppercase'>Dishi</h2>
            <h3 className='text-gray-700 text-2xl'>Recipies</h3>
          </header>
        </div>

        <h4 className='text-brown-700 font-bold mt-6 pb-2 border-b border-gray-300'>This week's specials</h4>
       <div className='grid md:grid-cols-3 gap-5 '>
        <div className='card'>
            {/* cards */}
            <img src={IMG1} alt="Image of githeri"className='image' />
            <div className='m-4'>
                <span className='font-bold text-center'>Githeri noma na avocado</span>
                <span className='block'>Recipe by Mbush</span>
            </div>
            <div className='badge'>
              <AiOutlineClockCircle className='inline-block pr-1 w-5'/>
              <span>1 hr</span>
            </div>
        </div>

        <div className='card '>
            {/* cards */}
            <img src={IMG2} alt="Image of githeri"className='image' />
            <div className='m-4'>
                <span className='font-bold text-center'>Mukimo safi</span>
                <span className='block'>Recipe by Mbush</span>
            </div>
            <div className='badge'>
            <AiOutlineClockCircle className='inline-block pr-1 w-5'/>
              <span>1 hr</span>
            </div>
        </div>

        <div className='card '>
            {/* cards */}
            <img src={IMG3} alt="Image of githeri"className='image' />
            <div className='m-4'>
                <span className='font-bold text-center'>Pilau smata</span>
                <span className='block'>Recipe by Mbush</span>
            </div>
            <div className='badge'>
            <AiOutlineClockCircle className='inline-block pr-1 w-5'/>
              <span>1 hr</span>
            </div>
        </div>

       </div>

      <h4 className='text-brown-700 font-bold mt-6 pb-2 border-b border-gray-300'>Popular dishes</h4>
        <div className='flex flex-row md:grid-cols-3 gap-5 '>
        <div className='flex flex-row md:grid-cols-3 gap-5'>
    {popular.map( (recipe) =>{
      return(
        <div className='card ' key={recipe.id}>
            {/* cards */}
            <img src={recipe.image} alt=" "className='image' />
            <div className='m-4'>
                <span className='font-bold text-center'>{recipe.title}</span>
                <span className='block'>Recipe by {recipe.sourceName}</span>
            </div>
            <div className='badge'>
            <AiOutlineClockCircle className='inline-block pr-1 w-5'/>
              <span>{recipe.readyInMinutes} mins</span>
            </div>
        </div>

          

      );
    })
    }
  </div>
        </div>
       
        </div>
    
  )
}

export default Home