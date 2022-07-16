 
import './Navbar.style.css'
import SliderImage from '../../../assets/910540.png'
import React, { useState, useContext } from "react"
import { Themecontext } from '../../../App'
import styled from 'styled-components'
import { FaBars } from "react-icons/fa"
import { ImCross } from "react-icons/im"
import ReactSwitch from 'react-switch'
   
function Navbar() { 
const { theme } = useContext(Themecontext)
  const {Toggle} = useContext(Themecontext)
  const Navbar = styled.nav`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 10vh;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    position: sticky;
    top: 0px;
    z-index: 1;
    font-weight: 500;
    background-color:  ${theme ? '#334155' : '#fff'};
    color: ${theme ?'#D1DAE7' : '#79899E' };
    margin-bottom: -30px;
  `

    const Home = styled.ul`
    width: 103px;
    height: 49px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(41, 169, 225, 0.05) ;
    border-radius: 12px;
    color: #29A9E1;

    @media(max-width: 900px) {
      width: 380px;
      height: 80px;
      font-size: 30px;

    } 
    `
  const Logo = styled.h1`
     font-size: 30px;
    display: flex;
    font-weight: 500;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 5px;
    color: ${theme?'#fff' : '#334155'};
    @media(max-width:900px) {
      
      margin-left:-50px;
      font-size: 26px;
      align-items: center;
    justify-content: flex-start;

    }
  `

  const [Mobile, setMobile] = useState(false)
 
  return (
  <>
      <Navbar >
          <Logo  >   RoboMed 
                 <img className='home-icon' alt='fsh' src={SliderImage}/> </Logo>  


        <ul className={Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}>
          
            <Home>Home</Home>
         
            <li>Registration Form</li>
         
            <li> About Us</li>
            <li>  Servises</li>
            <li> FAQ</li>  
          
      <div className='darkmode1'>  <label className= 'darkmode'>darkmode:</label>    <ReactSwitch className='toggle' onChange={Toggle} checked={theme}/>
      </div>
           
        </ul>

        <button className='mobile-menu-icon' onClick={() => setMobile(!Mobile)}>
          {Mobile ? <ImCross /> : <FaBars />}
        </button>
      </Navbar>
 
  </>
  )
}

export default Navbar