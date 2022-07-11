import React from 'react'
import './Contactus.css'
import {MdEmail} from 'react-icons/md'
function Contactus() {
  return (
    <div className='subscribe'> 
        <div className='text'>

            <h3 className='contactus-title'> Newsletter Subscribe</h3>
            <h3 className='contactus-des'> To Get more News Subscribe Us</h3>


        </div>
        <div className='email-input'>
   <h3 className='text-icon'><MdEmail/></h3>
        <input type='text' className='text-input' placeholder='Email Adress'/>
      
          <button className='sub-btn'>Subscribe</button>
        </div>


    </div>
  )
}

export default Contactus