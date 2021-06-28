import React from 'react'
import './Navbar.css';

function Navbar() {
    return (
        <>
        <div className='nav-bg'>
    <div className='container'>
     <nav className='navbar navbar-expand-md navbar-light'>
      <a href='#'className='navbar-brand'>
        <img src=''/>
        <button type='button'className='btn btn-primary btx'>S</button>
        <span className='text-primary'>Bootstrap 5</span>
      </a>
      <button className='navbar-toggler'
      type='button'
      data-bs-toggle='collapse'
      data-bs-target='#toggleMobileMenu'
      aria-controls='toggleMobileMenu'
      aria-expanded='false'
      aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse'id='toggleMobileMenu'>
        <ul className='navbar-nav ml-auto text-center'>
          <li>
            <a className='nav-link'href='/'>Home</a>
          </li>
          <li>
            <a className='nav-link'href='/About'>About</a>
          </li>
          <li>
            <a className='nav-link'href='/Services'>Services</a>
          </li>
          <li>
            <a className='nav-link'href='#'>Pricing</a>
          </li>
          <li>
            <a className='nav-link'href='#'>Contact</a>
          </li>
        
          <button className='btn btn-primary btn-help'>Signup</button>
        </ul>
      </div>
     </nav>


    </div>
        </div>
       
        
        </>
    )
}

export default Navbar
