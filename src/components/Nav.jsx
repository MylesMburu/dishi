import React from 'react'

const Nav = () => {
  return (
    <nav>
        <div>
            <h1 className='text-bold text-gray-500 text-xl font-bold uppercase p-4'><a href="/">Dishi</a></h1>
        </div>
        <ul>
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
    </nav>
  )
}

export default Nav
