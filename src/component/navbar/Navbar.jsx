import './navbar.css'
import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='logo'>
            <i className='bx bxs-castle' ></i>
           <span>dashboard</span>
        </div>
        <div className='icons'>
          <Link to={'#'}><i className='bx bx-search'></i></Link>
          <Link to={'#'}><i className='bx bxs-cog' ></i></Link>
        </div>
    </div>
  )
}
