import React from 'react'
import { Link } from 'react-router-dom'
import './menu.css'

export const Menu = () => {
  return (
    // <div className='sidebar'>
    //     <a href="#" className='logo'>
    //     <i className='bx bxs-dashboard'><span>DASHBOARD</span></i>
    //     </a>
    //     <ul className='side-menu'>
    //         <li><a href="#"><i className='bx bxs-home' ></i>Home</a></li>
    //         <li><a href="#"><i className='bx bx-table' ></i>Tables</a></li>
    //         <li><a href="#"><i className='bx bxs-bar-chart-alt-2' ></i>Charts</a></li>
    //         <li><a href="#"><i className='bx bx-card' ></i>Cards</a></li>
    //     </ul>
    // </div>
    <div className='menu'>
      <div className='items'>
          <span className='title'>MAIN</span>
          <Link to="/" className='listtitle'>
            <i className='bx bx-home-alt' ></i>
            <span className="itemtitle">Home</span>
          </Link>
          <Link to="/" className='listtitle'>
            <i className='bx bx-table' ></i>
            <span className="itemtitle">Tables</span>
          </Link>
          <Link to="/" className='listtitle'>
            <i className='bx bxs-bar-chart-alt-2' ></i>
            <span className="itemtitle">Charts</span>
          </Link>
          <Link to="/" className='listtitle'>
            <i className='bx bx-card' ></i>
            <span className="itemtitle">Cards</span>
          </Link>
      </div>
    </div>
  )
}
