import React ,{useState}from 'react'
import { useEffect } from 'react';
import "../Enterence/Scroll.css"
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import PublicIcon from '@mui/icons-material/Public';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Pre from '../Body/Pre';
import { useNavigate } from 'react-router-dom';

function Scroll() {
 
  const [car, setcar] = useState([]);
  useEffect(() =>{
   fetch(`${process.env.REACT_APP_BASE_UR}/car/allcar`)
      .then((data) => data.json())
      .then((cars) => setcar(cars));
  }, []);
  const navigate=useNavigate();
  return<>
  <div className='scrol-container'></div>
  <div className='scrol-container-1'>
    <div className='services-logo'>
        < DirectionsCarIcon className="edit"/>
    <div className='services-name'>Car Sale & Services</div>
  </div>
  <div className='location-logo'>
    <PublicIcon className="edit"/>
    <div className='location-name'>All Over India</div>
  </div>
  <div className='time-logo'>
    <AccessTimeIcon className="edit"/>
    <div className='time-name'>Available Time</div>
    <p className='para'>10.00am-7.00pm</p>
  </div>
 
  <div className='button-cont'>
    <button className='butt'onClick={()=>navigate('/doubt')} >Clear Your Doubts</button>
    <button className='butt'onClick={()=>navigate('/list')}  >Your doubts</button>
  </div>
   </div>
   <div className='whole-cont'>
   {car.map((cars,index) => (
          <Pre key={cars._id} id={cars._id} data={cars} />
))}

   </div>
  </>
}

export default Scroll