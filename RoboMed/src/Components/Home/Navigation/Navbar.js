import React from 'react'
import './Navbar.style.css'
import SliderImage from '../../assets/910540.png'
function Navbar() {
  return (
    <div className='navbar'>
        
        <div className='nav-icon'>
                <h2 className='home-title'>RoboMed</h2>
                 <img className='home-icon' alt='fsh' src={SliderImage}/>
      </div> 
       <div>

            <ul className='nav-links'>
                <li className='links-home'>Home</li>
                <li>Registration Form</li>
                <li>Aboute</li>
                <li>Servises</li>
                <li>FAQ</li>
            </ul>
        </div>

    </div>
  )
}

export default Navbar