import React from 'react'
import './Servises.css'
import flag from '../../assets/flag.png'
function Servises() {

    const info_servises =[
        {
            id:1,
            color:"servises-even",
            title:'ManKind Medicare',
            des:'Lorem ipsum dolor sit amet, or incididunt e et dolore magna aliqua. Ut enim ad minim veniam',
            place:'clinic',
            
        },
        {     id:2,
            color:"servises-week",
            title:'ManKind Medicare',
            des:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun iam',
            place:'hospital'
        },
        {   id:3,
            color:"servises-even",
            title:'ManKind Medicare',
            des:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  enim ad minim veniam',
            place:'clinic'
        },
        {   id:4,
            color:"servises-week",
            title:'ManKind Medicare',
            des:'Lorem ipsum dolor sit amet,  ididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
            place:'hospital'
        },
    ]



  return (
    <div> 

        <h4 className='servises1'> Healtcare Facilities</h4>
 

        <h2 className='servises11'> Our Last Healthcare Facilities</h2>

<div  className='servises-card'> 
        {info_servises.map((index)=>(
           
            <div data-aos="fade-up" className='servises-card1' key={index.id}>
                <div className={index.color}></div>
                <h1 className='servises-title'>{index.title} <img alt='jdfd' className='servises-flag' src={flag}/></h1>
                <p className='servises-des'>{index.des}</p>
               <div className= {index.place}> <div className='circle'></div> {index.place}</div> 
            </div>
        ))}
</div>
    </div>
  )
}

export default Servises