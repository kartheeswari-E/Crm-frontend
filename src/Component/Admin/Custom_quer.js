import React, { useState } from 'react'
import '../Admin/Admin.css'
import NoCrashIcon from '@mui/icons-material/NoCrash';
import { useNavigate } from 'react-router-dom';
function Custom_quer({data,id}) {
    const navigate=useNavigate();
    const[toggle,settoggle]=useState(false)
  return <>
  <div>
  <div className='suvc'>
        <div className='smalls-cns'>
            <div className='class-head'>{data.car_name}</div>
            <div className='align-btn'>
            <div onClick={()=>settoggle(!toggle)} className='view_admin'>{toggle?"hide":"view"}</div>
            <div onClick={() => navigate(`api/edit/${id}`)} className='editbn'>Edit</div>
        </div></div>
        <div className='de'>Sales doubt</div>
 
    </div>
{toggle?<div className='details-quer'>
<div className='sub-datas'>
    <div className='headc'>{data.car_name}  <NoCrashIcon style={{'color':"green"}}/></div>
 
    <div className='linec'></div>
    <div className='wa'>
    <div className='date'>
        <div className='d'>Created at</div>
        <p className='da'>{data.createdAt}</p>
    </div>
    <div className='date'>
    <div className='d'>Cleared By</div>
    <p className='da'>Karthiga</p>
  </div>
  </div>
  <div className='des'>
    <div className='d'>Query</div>
    <p className='da'>{data.msg}</p>
  </div>
  <div className='wa'>
  <div className='date'>
  <div className='d'>Car Model</div>
  <p className='da'>{data.car_model}</p>
  </div>
  <div className='date'>
  <div className='d'>Car Name</div>
  <p className='da'>{data.car_name}</p>
  </div></div>
  <div className='des'>
    <div className='d'>Solution</div>
    <p className='da'>{data.solution}</p>
  </div>
  <button className='done'>DONE</button>
  </div>
</div>:" "}
  </div>
  </>
}

export default Custom_quer