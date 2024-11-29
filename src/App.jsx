import React,{useState} from 'react';
import Navbar from './components/Navbar';
import Body from './components/Body';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import About from './components/About';
import {BrowserRouter, Routes,Route } from 'react-router-dom';


const App = () => {
  const [toggle, setToggle] = useState(false)
  const handleToggle = ()=>{
    setToggle(!toggle)
  }
  return (
<div className={`${toggle ? 'bg-purple-500' : 'bg-purple-200'} min-h-screen`}>

      <BrowserRouter>
      <Navbar handleToggle={handleToggle} />
      <Routes>
      <Route path='/' element={<Body/>}/>
      <Route path='/about' element={<About/>}/> 
      </Routes>
      <ToastContainer /> {/* ToastContainer should be outside components to ensure global positioning */}
      </BrowserRouter>
    </div>
  );
};

export default App;


