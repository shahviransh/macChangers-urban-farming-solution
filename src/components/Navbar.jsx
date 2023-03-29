import React from 'react'
import './Navbar.css'
import logoImg from '../assets/FarmStack_logo.png'
const navbar = () => {
  return (
    <div className='navbar'>
      <div className="logo">
         <h1 className='Title'>FarmStack</h1>
        <img
          // src="https://static.vecteezy.com/system/resources/previews/004/818/823/original/tractor-logo-or-farm-logo-template-suitable-for-any-business-related-to-agriculture-industries-free-vector.jpg"
          src = {logoImg}
          alt="Logo"
          style={{ marginTop: '-14rem', marginLeft: '0rem', width: '300px', height: 'auto' }}
        />
      </div>
      
     

    </div>
  )
}

export default navbar
