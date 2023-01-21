import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../Crm/Clear.css'
function Subclear({data,id}) {
    const navigate = useNavigate();
  return <>

 <div onClick={() =>navigate(`/api/mentor/${id}`)}  className='ca' >
 
    <div className='scroll-card-mem'>
        <img src={data.img} alt='profile'/>
        
    </div>
<div className='details-mem'>
        <div className='name'>{data.name}</div>
        <div className='experience'>{data.experience}</div>
    </div>
</div></>
}

export default Subclear