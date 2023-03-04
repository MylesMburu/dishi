import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import{BsGithub} from 'react-icons/bs'
import{BsTwitter} from 'react-icons/bs'
const Contacts = () => {
  return (
    <footer id='Contacts' className='bg-gray-500 h-40'>
      <div className='flex flex-col justify-center items-center gap-4 pt-8'>
      <div>
      <a href="#header" className='footer__logo '>Myles</a>

      </div>
      <div className='footer__socials flex flex-row gap-4'>
        <a href="https://www.linkedin.com/in/myles-ngicu-1b7799255/"><BsLinkedin/></a>
        <a href="https://github.com/MylesMburu"><BsGithub/></a>
        <a href="https://twitter.com/mn_mylesss"><BsTwitter/></a>
      </div>
      <div className="footer__copyright ">
        <small>   All rights reserved. &copy; 2023 Dishi </small>
      </div>
      </div>
      
    </footer>
  )
}

export default Contacts