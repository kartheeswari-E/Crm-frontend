import Clear from './Component/Crm/Clear'
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { useState } from 'react';
import Nav from './Component/Enterence/Nav';
import Sidebar from './Component/Sidenav/Sidebar';
import Signin from './Component/Sign/Signin';
import Signup from './Component/Sign/Signup';
import Forms from './Component/Crm/Forms';
import  List from './Component/List/List'
import Lists from './Component/List/Lists';
import  Card  from './Component/Card/Card';
import Forgot from './Component/Sign/Forgot';
import  Password  from './Component/Sign/Password';
import Pre from './Component/Body/Pre';


function App() {
  const[value,setvalue]=useState(0)
  return <>
  <Routes>
<Route path='/' element={<Sidebar/>}/>
<Route path='/signup' element={<Signup/>}/>
< Route path='/signin' element={<Signin/>}/>
<Route path='/home' element={<Nav data={{value ,setvalue}} />}/>
< Route path='/doubt' element={<Clear/>}/>
< Route path="/api/mentor/:id" element={<Forms/>}/>
< Route path='/list' element={<List/>}/>
< Route path='/pre' element={<Pre data={{value , setvalue}} />}/>
< Route path="/api/doubt/:id" element={<Lists/>}/>
< Route path="/api/car/:id" element={<Card/>}/>
< Route path='/forgotpassword' element={<Forgot/>}/>
<Route path='/api/reset/:id/:token' element={<Password/>} />
</Routes>
  </>
}

export default App;
