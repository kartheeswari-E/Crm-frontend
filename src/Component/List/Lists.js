import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import CarCrashIcon from '@mui/icons-material/CarCrash';
import '../List/List.css'
import NoCrashIcon from '@mui/icons-material/NoCrash';
import { useNavigate } from 'react-router-dom';
function Lists() {
  const navigate=useNavigate();
  const {id} = useParams(); 

  const [part, setpart] = useState([]);
 

  useEffect(() => {
      fetch(`${process.env.REACT_APP_BASE_URL}/doubt/${id}`)
        .then((data) => data.json())
        .then((parts) => setpart(parts));          
    },[]);
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
  <div className='sub-parts'>
    <div className='headc'>{part.car_name}  <NoCrashIcon style={{'color':"green"}}/></div>
 
    <div className='linec'></div>
    <div className='wa'>
    <div className='date'>
        <div className='d'>Created at</div>
        <p className='da'>{part.createdAt}</p>
    </div>
    <div className='date'>
    <div className='d'>Cleared By</div>
    <p className='da'>Karthiga</p>
  </div>
  </div>
  <div className='des'>
    <div className='d'>Query</div>
    <p className='da'>{part.msg}</p>
  </div>
  <div className='wa'>
  <div className='date'>
  <div className='d'>Car Model</div>
  <p className='da'>{part.car_model}</p>
  </div>
  <div className='date'>
  <div className='d'>Car Name</div>
  <p className='da'>{part.car_name}</p>
  </div></div>
  <div className='des'>
    <div className='d'>Solution</div>
    <p className='da'>{part.solution}</p>
  </div>
  <button className='done'>DONE</button>
  </div>
  </>
}

export default Lists