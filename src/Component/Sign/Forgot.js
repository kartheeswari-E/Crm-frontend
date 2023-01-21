import React ,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
function Forgot() {
  const navigate=useNavigate();
  const [email, setemail] = useState("");
  const forgot=()=>{
    const data = {
 
    email:email
    };
  fetch(`${process.env.REACT_APP_BASE_URL}/reset`,{
    method:'POST',
     body:JSON.stringify(data),
    headers:{
      "Content-Type":"application/json",
      "Accept":"application/json"
    }
   })
   .then((res)=>{    
            if(res.status===200){
            window.alert("check yur email");
                navigate("/api/reset/:id/:token");
            }
          else{
  console.log(res.status)
  window.alert("email  incorrect");
 }
 })
};
  return <>
   <div className='for-cont'> 
   <div className='nap'></div>
  <div className='for-sub-container'>
  <label className='blkk'>Email :</label>
<input onChange={(event) => setemail(event.target.value)}  placeholder='Enter Your Email' className="inpu"></input>
    <button onClick={() =>forgot()} className='zh' >Submit</button>   </div>
 
  </div>
  </>
}

export default Forgot