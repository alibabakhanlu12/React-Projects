  import './index.css'
  import React,{useState ,useEffect, createContext} from 'react';
  import Navbar from './Components/Home/Navigation/Navbar';
  import Slider from './Components/Home/Navigation/Slider';
  import Servises from './Components/Home/Servises/Servises'
  import Aboutus from './Components/Home/AboutUs/Aboutus';
  import Doctor from './Components/Home/Doctors/Doctor';
  import Subscribe from './Components/Home/Subscribe/Subscribe';
  import Footer from './Components/Home/Footer/Footer';
  import {Helmet} from "react-helmet";
  import styled from 'styled-components'
  // import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
  import {ScaleLoader} from "react-spinners"
  import './index.css'
  export const Themecontext = createContext()
 

  function App() {




  const [theme , setTheme] = useState(false)

    const Toggle = ( ) =>{
      setTheme(!theme)

    }


    const App1 = styled.div`
    background-color:  ${theme ? '#334155' : '#fff'};
    color: ${theme ? '#fff' : '#334155'};  
    
    `




    const [loading ,setLoading] = useState(false)

    useEffect(()=>{
      setLoading(true)
      setTimeout(()=>{
        setLoading(false)
      },4000)
    },[])









    return(
    

  <div>

  <Helmet> 
      <title>Home</title>
    </Helmet>

    
  {loading?

  <ScaleLoader className='loader' color={'#000'} loading={loading}   size={250} />
  : 

  <Themecontext.Provider value={{theme , Toggle}}>

<App1>
  <Navbar >
 
</Navbar>


  <Slider/>
   
  <Servises/>
  <Aboutus/>

  <Doctor/>
  <Subscribe/>
  <Footer/> 
  </App1>
  </Themecontext.Provider>
    }
  

  


  {/* </Switch>
  
    </Router> */}

    </div>
  
    )
  }
  export default App