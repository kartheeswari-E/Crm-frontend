import React,{useState,useEffect} from 'react'
import "../Enterence/Nav.css"
import AgricultureIcon from '@mui/icons-material/Agriculture';
import Scroll from './Scroll';
function Nav({data}) {
  return<>
  <div className='nav-container'>
    <div className='nav-small-container-1'>
        <div className='logo'><span>R</span>END</div>
        <div className='img-logo'>
            <AgricultureIcon className="logos" />
            </div>
    </div>
    <div className='nav-small-container-2'>
      <div className='add'>{data.value}</div>
        <div className='name-container'>NAME</div>
    </div>
  </div>
  <Scroll/>
  </>
}

export default Nav