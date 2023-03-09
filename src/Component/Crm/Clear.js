import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import '../Crm/Clear.css'
import Subclear from './Subclear';
function Clear() {
  const [mentor, setmentor] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_BASE_URL}/api/mentor/allmentor`)
      .then((data) => data.json())
      .then((ments) => setmentor(ments));
  }, []);
    const navigate=useNavigate();
  return<>
  <div className='clear-cont-whole'>
  <div className='sub-mem-nav'>
    <button onClick={()=>navigate(-1)} >Go Back</button>
    </div>
    <div className='scroll-mem'>
    <div className='h'>
        <div className='hh'>Experts</div>
        <div className='hhh'>Our Members</div>
    </div>
      <div style={{"display":"flex","flexDirection":"row"}}>
    {mentor.map((ments,index) => (
         <Subclear key={ments._id} id={ments._id} data={ments} />
))}

</div></div>
  </div>
  </>
}

export default Clear