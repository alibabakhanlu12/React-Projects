import React, { useEffect, useContext } from 'react'
import './Doctor.style.css'
import DoctorsList from './DoctorsList'
import AOS from 'aos';
import 'aos/dist/aos.css';
import styled from 'styled-components'

import { Themecontext } from '../../../App'



function Doctor() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, [])

  const { theme } = useContext(Themecontext)
  const Doctors = styled.div`
  margin-left: 180px;
    display: grid;
    grid-template-columns: repeat(3, 330px);
    grid-gap: 20px;
    padding-bottom: 2em;
 
    background-color:  ${theme ? '#334155' : '#fff'};
    @media(max-width:900px){
         
        grid-template-columns: repeat(1, 1fr);
        margin-left: -55px;
      }
`

  const DoctorCard = styled.div`
    width: 304px;
    height: 405px;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;

    justify-content:  space-around;
    background-color:  ${theme ? 'rgba(188, 188, 188, 0.1)' : '#fff'};
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    border-radius: 8px;
      @media(max-width:900px){
        margin-left: 100px;
      }
`
  const Name = styled.h3`  
  font-size: 26px;
    font-weight: 500;
  color: ${theme ? '#fff' : '#334155'};  
`
 




  return (
    <div>


      <h3 className='doctor-title'>Team Doctor</h3>
      <h2 className='doctor-des'> Meet Our Specialist</h2>

      <Doctors ></Doctors>

        {DoctorsList.map((index) => (
          <DoctorCard key={index.id}>

            <img src={index.image} className='doctor-img' alt='dfsd'
            />
            <Name >{index.name}</Name>
            <h5 className='doctor-position'>{index.position}</h5>


          </DoctorCard>
        ))
        }
      </Doctors>

    </div>
  )
}

export default Doctor