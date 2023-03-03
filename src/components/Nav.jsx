import React from 'react'
import { HiViewList } from "react-icons/hi"; 


const Nav = () => {
  return (
    <nav className='flex justify-between shadow-md items-center'>
        <div>
            <h1 className='text-bold text-gray-500 text-xl font-bold uppercase p-4'><a href="/">Dishi</a></h1>
            <HiViewList className='md:  ' />
        </div>
        <div>
        <ul className='flex flex-row gap-6 p-4 sm:hidden'>
            <li>
                <a href="#">
                    <span>Home</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <span>About</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <span>Contacts</span>
                </a>
            </li>
        </ul>


        </div>
        
    </nav>
  )
}

export default Nav
