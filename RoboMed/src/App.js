 import './index.css'
import React,{useState ,useEffect} from 'react';
import Navbar from './Components/Home/Navigation/Navbar';
import Slider from './Components/Home/Navigation/Slider';
import Servises from './Components/Home/Servises/Servises'
import Aboutus from './Components/Home/AboutUs/Aboutus';
import Doctor from './Components/Home/Doctors/Doctor';
import Subscribe from './Components/Home/Subscribe/Subscribe';
import Footer from './Components/Home/Footer/Footer';
import {Helmet} from "react-helmet";

 
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import {ScaleLoader} from "react-spinners"

function App() {

 
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
<> 
<Navbar/>
 <Slider/>
 <Servises/>
 <Aboutus/>
 <Doctor/>
 <Subscribe/>
 <Footer/> 
 </>
  }
 

 


 {/* </Switch>
 
  </Router> */}

  </div>
 
  )
}
export default App