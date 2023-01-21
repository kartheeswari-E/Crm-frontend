import React,{useState} from 'react'
import { useEffect } from 'react';
import CarCrashIcon from '@mui/icons-material/CarCrash';
import '../List/List.css'
import { useNavigate } from 'react-router-dom';
import Main from './Main';
function List() {
  const [mentor, setmentor] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_BASE_URL}/doubt/alldoubt`)
      .then((data) => data.json())
      .then((ments) => setmentor(ments));
  }, []);

  const navigate=useNavigate();
  return <>
  <div className='list-cnt'>
    <div className='basic-nav'>
      <img src='https://images.unsplash.com/photo-1471479917193-f00955256257?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80' alt='bg'/>
     <div className='on'><span>C</span>lear <span>P</span>arts
     <CarCrashIcon className='icons'/> </div>
   </div>
   <div className='extra'></div>
   <button onClick={()=>navigate(-1)} className='end'>Go Back</button>
  </div>
  <div className='whole'>
    <div className='sub-part'>
    {mentor.map((ments,index) => (
           <Main key={ments._id} id={ments._id} data={ments} />
))}

     </div>
  </div>

  </>
}

export default List