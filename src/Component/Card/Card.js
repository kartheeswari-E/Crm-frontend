import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom";
import '../Card/Card.css'
import AddRoadIcon from '@mui/icons-material/AddRoad';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import BadgeIcon from '@mui/icons-material/Badge';
import CarRentalIcon from '@mui/icons-material/CarRental';
import RunningWithErrorsIcon from '@mui/icons-material/RunningWithErrors';
import SettingsAccessibilityIcon from '@mui/icons-material/SettingsAccessibility';
function Card() {
  const[toggle,settoggle]=useState(false);
  const {id} = useParams(); 

  const [part, setpart] = useState([]);
 

  useEffect(() => {
      fetch(`${process.env.REACT_APP_BASE_URL}/api/car/${id}`)
        .then((data) => data.json())
        .then((parts) => setpart(parts));          
    },[]);
  return<>
  <div className='view'>
   <div className='nav-container'>
    <div className='nav-small-container-1'>
        <div className='log'><span>R</span>END</div>
        <div className='img-logo'>
            <AgricultureIcon className="logos" />
            </div>
    </div>
    <div className='nav-small-container-2'>
        <div className='name-container'>NAME</div>
    </div>
  </div>
<div className='card'>
  <div className='img'>
    <img src={part.car_img} alt='pic'/>
  </div>
  <div className='data'>
    <div className='car-name'>{part.car_name}</div>
    <div className='car-price'>${part.car_price}</div>
    <div className='sub-card'>
      <div className='by'>
      <div><HowToRegIcon/></div>
      <div className='regi'>Registration</div>
      <div className='no'>{part.Registration}</div>
        </div><div className='lin'></div>
    
      <div className='by'>
      <div><CalendarMonthIcon/></div>
      <div className='regi'>Registered in</div>
      <div className='no1'>{part.Registered_in}</div>  </div>
      <div className='lin'></div>
    
      <div className='by'>
      <div><LocalGasStationIcon/></div>
      <div className='regi'>Fuel</div>
      <div className='no2'>{part.Fuel}</div>
        </div>
      <div className='lin'></div>
    <div><div className='by'>
      <div><SettingsAccessibilityIcon/></div>
      <div className='regi'>Owned by</div> 
      <div className='no3'>{part.Owned_by}</div>
        </div>
         <div className='lin'></div>  <div className='by'>
      <div><BadgeIcon/></div>
      <div className='regi'>Insurance</div>
      <div className='no4'>{part.Insurance}</div>
      </div><div className='lin'></div>
 {toggle?<div>  
   
    
      <div className='by'>
      <div><AddRoadIcon/></div>
      <div className='regi'>Road Tax</div>
      <div className='no6'>{part.Road_Tax}</div>
      </div><div className='lin'></div>
      <div className='by'>
      <div><RunningWithErrorsIcon/></div>
      <div className='regi'>Engine capacity</div>
      <div className='no7'>{part.Engine_capacity}</div>
      </div><div className='lin'></div>
      <div className='by'>
      <div><CarRentalIcon/></div>
      <div className='regi'>Spare key</div>
      <div className='no5'>{part.Spare_Key}</div>

      </div> <div className='lin'></div></div>:""} 
      
     
      <div onClick={()=>settoggle(!toggle)} className='toggle'>
        {toggle?<p>View Less</p>:<p>View More</p>}
        </div>
    </div>
  </div>
</div>
</div>
 </div>
  </>
}

export default Card