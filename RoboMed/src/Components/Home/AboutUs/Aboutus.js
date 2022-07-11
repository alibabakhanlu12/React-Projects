import React,{useEffect} from 'react'
import './AboutUs.css'
import manimg from '../../../assets/man.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
  

      function Aboutus() {
        
        useEffect(()=>{
        AOS.init({duration:2000});
          },[])
      return (
      <div> 

        <h3 className='aboutus-title' >testimonial</h3>
        <h1 className='aboutus-des1'>Paitents say About Us</h1>

        <div data-aos="zoom-in" className='aboutus-card'>

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


        </div>

    </div>
  )
}

export default Aboutus