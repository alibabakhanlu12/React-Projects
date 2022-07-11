import React,{useEffect} from 'react'
import './Slider.css'
import SliderImage from '../../../assets/910540.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
function Slider() {
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
        <div className='main'>

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
            <h3 className='card-title'>+{index.number} </h3>
            <h5 className='card-des'>{index.des}</h5>
        </div>
     ))
}

</div>
    </div>
  )
}

export default Slider