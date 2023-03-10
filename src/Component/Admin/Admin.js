import '../Admin/Admin.css'
import React,{useState} from 'react'
import { useEffect } from 'react';

import AgricultureIcon from '@mui/icons-material/Agriculture';
import Custom_quer from './Custom_quer';
function Admin() {
  const [mentor, setmentor] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_BASE_URL}/doubt/alldoubt`)
      .then((data) => data.json())
      .then((ments) => setmentor(ments));
  }, []);

  return <>
 <div className='nav-containers_admin'>
    <div className='nav-small-container-1'>
        <div className='logo'><span>R</span>ENT</div>
        <div className='img-logo'>
            <AgricultureIcon className="logos" />
            </div>
    </div>
    <div className='nav-small-container-2'>
        <div className='name-container'>Admin</div>
    </div>
  </div>
  <div className='wholes_admin'>
    <div className='subss-parts'>
    {mentor.map((ments,index) => (
            <Custom_quer key={ments._id} id={ments._id} data={ments} />
))}

     </div>
  </div>
 
 </>
}

export default Admin