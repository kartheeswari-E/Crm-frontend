import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../List/List.css'
function Main({data,id}) {
  const navigate=useNavigate(); 
  return <>

        <div onClick={()=>navigate(`/api/doubt/${id}`)} className='suv'>
        <div className='small-cn'>
            <div className='class-head'>{data.car_name}</div>
            <div className='class-process'>Assigned</div>
        </div>
        <div className='de'>Sales doubt</div>
    </div>
   
  </>
}

export default Main