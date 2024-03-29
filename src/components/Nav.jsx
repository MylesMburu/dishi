import React,{useState} from 'react'
import { HiViewList } from "react-icons/hi"; 

const Nav = () => {
const[activeNav,setActiveNav]= useState('#')
  return (
    <nav className='flex justify-between shadow-md items-center'>
        <div>
            <h1 className='text-bold text-gray-500 text-xl font-bold uppercase p-4'><a href="/">Dishi</a></h1>
           
        </div>
        <div>
        <ul className='flex flex-row gap-6 p-4'>
            <li>
                <a href="#Home"  onClick={()=> setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}>
                    <span>Home</span>
                </a>
            </li>
            <li>
                <a href='#Find' onClick={()=> setActiveNav('#Find')} className={activeNav === '#Find' ? 'active' : ''}>
                    <span>Find</span>
                </a>
            </li>
            <li>
                <a href='#Contacts' onClick={()=> setActiveNav('#Contacts')} className={activeNav === '#Contacts' ? 'active' : ''}>
                    <span>Contacts</span>
                </a>
            </li>
        </ul>


        </div>
        
    </nav>
  )
}

export default Nav
