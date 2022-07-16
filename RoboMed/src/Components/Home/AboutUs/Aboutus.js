import React,{useEffect,useContext} from 'react'
import './AboutUs.css'
import manimg from '../../../assets/man.jpg'
import AOS from 'aos';
import { Themecontext } from '../../../App'
import styled from 'styled-components'

import 'aos/dist/aos.css';
  


      function Aboutus() {
        

    const {theme} = useContext(Themecontext)
   
   const AboutUs = styled.div`
    background:${ theme ? '#334155' : ' rgb(234,243,246)'};
   background:${ theme ? '#334155' : ' linear-gradient(94deg, rgba(234,243,246,1) 19%, rgba(244,246,232,1) 43%, rgba(247,247,235,1) 60%, rgba(246,246,247,1) 69%, rgba(251,250,245,1) 76%) '};;
   width: 1200px;
   height: 250px;
   display: flex;
   margin-left: 60px;
   margin-bottom: 150px;
   display: flex;
   flex-direction: row;
   box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
 
@media only screen and (max-width:900px){
     
        
    width: 350px;
    height: 580px;
    display: flex;
    margin-left: 20px;
   margin-left: 20px;
    margin-bottom: 100px;
    display: flex;
    flex-direction: column;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    }  `

        useEffect(()=>{
        AOS.init({duration:2000});
          },[])
      return (
      <div> 

        <h3 className='aboutus-title' >testimonial</h3>
        <h1 className='aboutus-des1'>Paitents say About Us</h1>

        <AboutUs data-aos="zoom-in" >

            <img  src={manimg} className='aboutus-img' alt='aboutus'/>
            <p className='aboutus-des'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna 
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
             nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in</p>
                     <div className='aboutus-changecard'>

<h5 className='circle'> </h5>
<h5 className='circle'> </h5>
<h5 className='circle' id='fill'> </h5>
<h5 className='circle'> </h5>
<h5 className='circle'> </h5>

</div>   <h2 className='aboutus-costumer'>Cristiano Ronaldo</h2>
  

        </AboutUs>

    </div>
  )
}

export default Aboutus