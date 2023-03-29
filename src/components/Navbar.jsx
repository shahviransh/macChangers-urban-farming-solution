import React from 'react'
import './Navbar.css'
import logoImg from '/FarmStackLogo.png'
const navbar = () => {
  return (
    <div className='navbar'>
      <div className="logo">
         <h1 className='Title'>FarmStack</h1>
        <img
          // src="https://static.vecteezy.com/system/resources/previews/004/818/823/original/tractor-logo-or-farm-logo-template-suitable-for-any-business-related-to-agriculture-industries-free-vector.jpg"
          src= {logoImg}
          alt="Logo"
          style={{ marginTop: '-8rem', marginLeft: '6rem', width: '150px', height: '150px' }}
        />
      </div>
      
     

    </div>
  )
}

export default navbar
