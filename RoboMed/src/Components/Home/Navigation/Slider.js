import React,{useEffect, useContext} from 'react'
import './Slider.css'
import SliderImage from '../../../assets/910540.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import styled from 'styled-components'

import { Themecontext } from '../../../App'
 
function Slider() {

  const { theme } = useContext(Themecontext)
  
  const Main = styled.main`
      display: flex;
    flex-direction: column;
    gap: 140px;
    margin-top: 20px;
    background:${theme?'#334155': ' rgb(248,247,234)'};
    background:${theme?'#334155': 'linear-gradient(90deg, rgba(248,247,234,1) 28%, rgba(252,244,219,1) 31%, rgb(255, 253, 246) 58%, rgba(246,246,247,1) 69%, rgba(250,251,251,1) 76%)'};
    width: 100%;
    height: 700px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    @media(max-width:900px){
        gap: 100px;
        margin-top: 20px;
          width: 400px;
        height: 1000px;
        margin-left: -20px;
    }
    `
    useEffect(()=>{
        AOS.init({duration:2000});
      },[])
    const card_info= [
        {   
            id:1,
            number: 234,
            des:'Healthcare Facility'
        },
        {   id:2,
            number: 3435,
            des:'Professional Doctor'
        }, 
        {   id:3,
            number: 3553,
            des:'Staff all oaround the World'
        },
    ]
  return (
        <Main >

    <div className='slider1'> 
    
    <div data-aos="fade-up" className='image-slider'>

        <img   src={SliderImage} alt='fdf' className='slider-img'/>
    </div>
        <div data-aos="fade-right"  className='text-slider'>
            
            <h1   className='title-slider'> your Health is Our Top Priority</h1>
                <p className='p-slider'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut  </p>
                    <button className='slider-btn'>
                        Login to System
                    </button>
    </div>
    </div>
    <div className='slider-cards'>

{
    card_info.map((index) =>(
        <div className='cards' key={index.id}>
            <h5 className='card-title'>+{index.number} </h5>
            <h6 className='card-des'>{index.des}</h6>
        </div>
     ))
}

</div>
    </Main>
  )
}

export default Slider