 
import './Navbar.style.css'
import SliderImage from '../../../assets/910540.png'
import React, { useState } from "react"
 
import { FaBars } from "react-icons/fa"
import { ImCross } from "react-icons/im"
 
function Navbar() {
  
  const [Mobile, setMobile] = useState(false)
 
  return (
  <>
      <nav className='navbar'>
          <h3 className='logo'>              <h2 className='home-title'>RoboMed</h2>
                 <img className='home-icon' alt='fsh' src={SliderImage}/> </h3>  


        <ul className={Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}>
          
            <li className='home1'>Home</li>
         
            <li>Registration Form</li>
         
            <li> About Us</li>
            <li>  Servises</li>
            <li> FAQ</li>
          
          
           
        </ul>

        <button className='mobile-menu-icon' onClick={() => setMobile(!Mobile)}>
          {Mobile ? <ImCross /> : <FaBars />}
        </button>
      </nav>
 
  </>
  )
}

export default Navbar