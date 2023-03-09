import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
function Forms() {
  const {id} = useParams(); 

  const [part, setpart] = useState([]);
 

  useEffect(() => {
      fetch(`${process.env.REACT_APP_BASE_URL}/mentor/${id}`)
        .then((data) => data.json())
        .then((parts) => setpart(parts));          
    },[]);

    const navigate=useNavigate();
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [carname, setcarname] = useState("");
    const [carmodel, setcarmodel] = useState("");
    const [msg, setmsg] = useState("");
    const createuser=()=>{
      const data = {
     
      name:name,
      email:email,
      car_name:carname,
      car_model:carmodel,
      msg:msg
      };
  fetch(`${process.env.REACT_APP_BASE_URL}/doubt`, {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }).then((res) => {
          if (res.status === 201) {
            window.alert("successfully registered");
  
            navigate("/list");
          } else {
            console.log(res.status);
          }
        });
  
      };

  return<>
  <div className='form-cn'>
    <div className='divide'>
    <div className='img-cnt'>
<img src={part.img} alt='profile1'/>
     
    <div className='own-info'>
        <div className='n'>{part.name}</div>
        <div className='e'>{part.experience}</div>
    </div>
    </div>
    <div className='full-cont-sub'>
   <div className='information'>
    <label className='nm'>Name:</label>
        <input onChange={(event) => setname(event.target.value)} placeholder='Your Name' className="inp"></input>
        <label className='nm'>Email/Phone :</label>
        <input onChange={(event) => setemail(event.target.value)} placeholder='Contact details' className="inp"></input>
        <label className='nm'>Car Model:</label>
        <input onChange={(event) => setcarmodel(event.target.value)} placeholder='model' className="inp"></input>
        <label className='nm'>Car Name:</label>
        <input onChange={(event) => setcarname(event.target.value)} placeholder='Car Name' className="inp"></input>
        <label className='nm'>Message:</label>
        <textarea onChange={(event) => setmsg(event.target.value)} className="inps" placeholder='Enter your msg here'></textarea>
    </div>
    <button onClick={() =>createuser()} className='blue'>Submit</button>
    </div>
  </div>
  </div>
  </>
}

export default Forms