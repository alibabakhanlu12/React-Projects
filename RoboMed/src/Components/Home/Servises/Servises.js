import React,{useContext} from 'react'
import './Servises.css'
import flag from '../../../assets/flag.png'
import { Themecontext } from '../../../App'
import styled from 'styled-components'
function Servises() {

    const {theme} = useContext(Themecontext)
    const info_servises =[
        {
            id:1,
            color:"servises-even",
            title:'ManKind Medicare',
             des:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor ornare gravida non arcu. Pellentesque tempor et dictum ut',
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
            des:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor ornare gravida non arcu. Pellentesque tempor et dictum ut',
            place:'clinic'
        },
        {   id:4,
            color:"servises-week",
            title:'ManKind Medicare',
            des:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor ornare gravida non arcu. Pellentesque tempor et dictum ut',
            place:'hospital'
        },
    ]


    const ServisesCard = styled.div`
   display: flex;
    flex-direction: row;
    margin-top: 50px;
    gap: 10px; 
    align-items: center;
    justify-content: space-around;
    @media(max-width: 900px)  {
        display: flex;
        flex-direction: column;
    } 
    flex-wrap: wrap;
    `
    
    const Card = styled.div`
      display: flex;
      flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    width: 301px;
height: 221px;
    justify-content: space-between;
    align-items: flex-start;
    border-radius: 12px;
    background-color:  ${theme ? '#334155' : '#fff'};

    `
    

  return (
    <div> 

        <h4 className='servises1'> Healtcare Facilities</h4>
 

        <h2 className='servises11'> Our Last Healthcare Facilities</h2>

            <ServisesCard > 
        {info_servises.map((index)=>(
           
            <Card data-aos="fade-up" key={index.id}>
                <div className={index.color}></div>
                <h1 className='servises-title'>{index.title} <img alt='jdfd' className='servises-flag' src={flag}/></h1>
                <p className='servises-des'>{index.des}</p>
               <div className={index.place}> <h3 className='circle'> </h3> {index.place}</div> 
            </Card>
        ))}
</ServisesCard>
    </div>
  )
}

export default Servises