import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='Navbar d-flex justify-content-between px-5 py-2 aling-items-center'>
        <div className='fw-bold'>Logo</div>

        <div className='d-flex gap-3 '>
            <NavLink to="/" className='navlinks'>Home</NavLink>
            <NavLink to="/register" className='navlinks'>Register</NavLink>
            <NavLink to="/login" className='navlinks'>Login</NavLink>
        </div>
    </div>
  )
}

export default Navbar