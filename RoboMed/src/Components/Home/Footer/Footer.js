import React from 'react'
import './Footer.css'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'
import {ImLocation2} from 'react-icons/im'
import {FaTelegramPlane} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {ImWhatsapp} from 'react-icons/im'
import {ImYoutube} from 'react-icons/im'
import {BiCopyright} from 'react-icons/bi'
function Footer() {
  return (
    <div className='footer'>
    <footer className=''> 
    
    <div className='footer-des'>

        <h3 className='footer-title'>
            RoboMed
        </h3>
        <p className='footer-des1'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna
         aliqua. Ut enim ad minim veniam, quis
      
        </p>
        <div className='footer-icons'>

       <h2><FaTelegramPlane className='icon'/> </h2>
       <h2> <BsInstagram  className='icon'/></h2>
       <h2> <ImWhatsapp  className='icon'/></h2>
       <h2> <ImYoutube className='icon'/></h2>
        </div>


    </div>
    <div className='footer-conect'>


<h3 className='footer-phone'><BsFillTelephoneFill  className='icon'/> (335) 435 4343</h3>
<h3 className='footer-email'><MdEmail  className='icon'/> hospitaladmin@yahoo.com</h3>
<h3 className='footer-address'><ImLocation2  className='icon'/> Newyork</h3>

    </div>
     </footer>
    <div className='coppyright'>
       <BiCopyright/> <p> 2022 Global Access Teleheath .All Rights Reserved .Privacy Policy</p>
    </div>
   
    </div>
  )
}

export default Footer