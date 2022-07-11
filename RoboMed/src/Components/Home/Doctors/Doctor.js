import React, { useEffect } from 'react'
import './Doctor.style.css'
import DoctorsList from './DoctorsList'
 import AOS from 'aos';
 import 'aos/dist/aos.css';
function Doctor() {
  useEffect(()=>{
    AOS.init({duration:2000});
  },[])
  return (
    <div> 


            <h3  className='doctor-title'>Team Doctor</h3>
                <h2 className='doctor-des'> Meet Our Specialist</h2>

           <div className='doctors' >

             {   DoctorsList.map((index)=>(
                    <div data-aos={index.aos}  className='doctor-card' key={index.id}>

                    <img  src={index.image} className='doctor-img' alt= 'dfsd'
                    />
                    <h3 className='doctor-name'>{index.name}</h3>
                    <h5 className='doctor-position'>{index.position}</h5>


                    </div>
                ))
}
            </div>

                    </div>
  )
}

export default Doctor