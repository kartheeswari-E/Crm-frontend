import React ,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from "react-router-dom";


function Password() {
  const navigate=useNavigate();
  const param = useParams();
  const [password, setpassword] = useState("");
  const newpass=()=>{
    const data = {
 
    password:password
    };
  fetch(
    `${process.env.REACT_APP_BASE_URL}/reset/${param.id}/${param.token}`,
    {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }
  ).then((res) => {
    if (res.status === 200) {
      window.alert("password changed");
      navigate("/home");
    } else {
      console.log(res.status);
    }
  });
}
  return  <>
  <div className='for-cont'> 
  <div className='nap'></div>
 <div className='for-sub-container'>
 <label className='blkk'>New Password :</label>
<input onChange={(event) => setpassword(event.target.value)} placeholder='Enter Your New Password' className="inpu"></input>
<button onClick={() =>newpass()} className='zh' >Confirm</button>
   </div>
 </div>
 </>
}

export default Password