import React ,{useState}from 'react'
import { useNavigate} from 'react-router-dom';
import './Sign.css'
function Signup() {
  const navigate=useNavigate();
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const createuser=()=>{
    const data = {
   
    name:name,
    email:email,
    password:password,
    };
fetch(`${process.env.REACT_APP_BASE_URL}/createuser`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        }, 
      }).then((res) => {
        if (res.status === 201) {
          window.alert("successfully registered");

          navigate("/home");
        } else {
          console.log(res.status);
        }
      });

    };
  return <>
<div className='sign-box'>
    <div className='head'>Signup<span>...</span></div>
    <div className='line'></div>
    <div className='whole-text-box'>
        <label className='blk'>Name :</label>
        <input onChange={(event) => setname(event.target.value)} placeholder='Name' claassName="inputs"></input>
        <label className='blk'>Email :</label>
        <input onChange={(event) => setemail(event.target.value)} placeholder='Email' claassName="inputs"></input>
        <label className='blk'>Password :</label>
        <input onChange={(event) => setpassword(event.target.value)} placeholder='Password' claassName="inputs"></input>
        <button onClick={() =>createuser()} className='but-c'>Register</button>
    </div>
</div>
  </>
}

export default Signup