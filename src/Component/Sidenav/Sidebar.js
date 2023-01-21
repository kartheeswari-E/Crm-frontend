import React, { useState } from 'react'
import './Sidebar.css'
import AgricultureIcon from '@mui/icons-material/Agriculture';
import home from './Images/home.jpg'
import Signin from '../Sign/Signin';
import Signup from '../Sign/Signup';

function Sidebar() {
  const [able,setable]=useState(false)
  const [ables,setables]=useState(false)

  return <>
<div className='whole-container-side'>
  <div className='logo-container'>
    <div className='nav-1'>
    <div className='logo-name'><span>R</span>END</div>
    <div className='symbol'>
     <AgricultureIcon className="lo" />
    </div>
    </div>
    <div className='nav-2'>
     <div className='sign-in'onClick={()=>{setable(!able)
    setables(false)
    }} ><span>S</span>ignin</div>
     <div className='sign-up'onClick={()=>{setables(!ables) 
       setable(false)
       
       }}><span>S</span>ignup</div>
    </div>
   
  </div>
  <div className='back-img'>
   <div className='welcome'>Exclusive And Low Cost
  Car Sale 
    <button className='but-own'onClick={()=>{setable(!able)
    setables(false)
} }>Book Now</button>
    </div>
    <div className="source">
      
    <img src={home} alt='home'></img> {ables?<Signup/>:""}
   {able?<Signin/>:""}
  </div>
</div>
</div>
  </>
}

export default Sidebar