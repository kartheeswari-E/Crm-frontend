import React from 'react'
import '../Body/Pre.css'
import { useNavigate } from 'react-router-dom';
import ShutterSpeedIcon from '@mui/icons-material/ShutterSpeed';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import EmojiTransportationIcon from '@mui/icons-material/EmojiTransportation';
function Pre({data,id}) {
   const navigate = useNavigate();

  return<>
  
  <div className='card-container'>
    <div className='image-i'>
 <img  src={data.car_img} alt='hero'></img>
   </div>  
    <div className='sub-container'>
      <div className='cont1'>
        <div className='car-name'>{data.car_name}</div><MonetizationOnIcon className='sy'/>
        <div className='car-cost'>{data.car_price}</div>
        </div>
        <div className='sub-cont-3'>
        <div className='model'>
          <p className='mol'>MODEL:&nbsp;{data.car_model}</p></div>
            <div className='cont2'> 
             <EmojiTransportationIcon className='syy'/>
            <div className='state'><p>{data.drive}</p></div>
            </div>
            <div className='cont3'>
            <ShutterSpeedIcon className='sh'/>
            <div className='km'><p>&nbsp;&nbsp;{data.speed}</p></div>
        </div></div>
        <div className='buttons'>
            <button  className='sale'>Add</button>
            <button  onClick={() =>navigate(`/api/car/${id}`)}  className='details'>Details</button>
        </div>
    </div>
  </div>
  </>
}

export default Pre