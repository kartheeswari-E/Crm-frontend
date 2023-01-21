import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import './Sign.css'
function Signin() {
  const navigate=useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const loginuser=()=>{
    const data = {
 
    email:email,
    password:password,
    };
  fetch(`${process.env.REACT_APP_BASE_URL}/loginuser`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  }).then((res) => {
    if (res.status === 200) {
      window.alert("successfull login");
      navigate("/home");
    } else {
      console.log(res.status);
      window.alert("email or password incorrect");
    }
  });
};
  return <>
<div className='sign-box'>
    <div className='head'>Signin<span>...</span></div>
    <div className='line'></div>
    <div className='whole-text-box'>
        <label className='blk'>Email :</label>
        <input onChange={(event) => setemail(event.target.value)} placeholder='Email' claassName="inputs"></input>
        <label className='blk'>Password :</label>
        <input onChange={(event) => setpassword(event.target.value)} placeholder='Password' claassName="inputs"></input>
          <div onClick={()=>navigate('/forgotpassword')}className='for'>Forgot Password..</div>
        <button  onClick={() =>loginuser()}className='but-c'>Login</button>
    </div>
  
</div>
  </>
}

export default Signin