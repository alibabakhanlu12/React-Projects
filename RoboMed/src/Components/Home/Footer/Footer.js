import React,{useContext} from 'react'
import './Footer.css'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'
import {ImLocation2} from 'react-icons/im'
import {FaTelegramPlane} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {ImWhatsapp} from 'react-icons/im'
import {ImYoutube} from 'react-icons/im'
import {BiCopyright} from 'react-icons/bi'

import styled from 'styled-components'

import { Themecontext } from '../../../App'
  


function Footer() {
  const { theme } = useContext(Themecontext)


  const Footer = styled.footer`
      background:${theme?'#334155' :'rgb(241,249,252)'} ;
    background:${theme?'#334155' :'linear-gradient(94deg, rgba(241,249,252,1) 23%, rgba(245,239,221,1) 45%, rgba(234,241,244,1) 100%)'};
    font-family: "Poppins", sans-serif; 
backdrop-filter: blur(200px);
/* Note: backdrop-filter has minimal browser support */

border-radius: 8px;
  `

const Footer1 = styled.div`
   width: 100%;
    height: 350px;
margin-bottom: 0px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    @media(max-width:900px){
  
    width: 350px;
     height: 400px;
    margin-bottom: 0px;
     display: flex;
     flex-direction: column;
     justify-content: space-around;
     align-items: center;
     gap: 50px;
     margin-left: 20px;
 
    }


`



  return (
    <Footer>
    <Footer1> 
    
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


<h3 className='footer-phone'><BsFillTelephoneFill  className='icon1'/> (335) 435 4343</h3>
<h3 className='footer-email'><MdEmail  className='icon1'/> hospitaladmin@yahoo.com</h3>
<h3 className='footer-address'><ImLocation2  className='icon1'/> Newyork</h3>

    </div>
     </Footer1>
    <div className='coppyright'>
       <BiCopyright/> <p> 2022 Global Access Teleheath .All Rights Reserved .Privacy Policy</p>
    </div>
   
    </Footer>
  )
}

export default Footer