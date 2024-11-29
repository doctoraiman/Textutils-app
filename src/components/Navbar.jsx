import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = (props) => {
  
  return (
    <div className='h-14 bg-violet-400 py-2 flex px-2 items-center justify-between'>
      <h1 className='text-2xl text-white  font-bold '>Textutils</h1>
    <li className='flex text-white gap-5'>
     <Link to='/'><p>Home</p></Link> 
     <Link to='/about'><p>About</p></Link> 
    </li>
    <input type="checkbox" onClick={props.handleToggle} className="toggle toggle-primary" defaultChecked />
    </div>
  )
}

export default Navbar
