import React, {useState} from 'react'
  import {toast } from 'react-toastify';
const Body = () => {
  const [text,setText]=useState('Enter Text');
    
    const handleUpClick=()=>{
console.log('UpperCase was Clicked')
setText(text.toUpperCase())
    }
    const handleLoClick=()=>{
setText(text.toLowerCase())
    }
    const handleOnChange=(e)=>{
     setText(e.target.value)
    }
const handleCopy=()=>{
  navigator.clipboard.writeText(text)
  toast("Copyed successfully");
}
const handleClear=()=>{
setText('')
}
  return (
      <>
      <div className=' min-h-screen'>
    <div className=' flex flex-col justify-center py-20 items-center'>
      <textarea className="textarea min-w-[60vw] textarea-primary" value={text} onChange={handleOnChange} placeholder="Enter Text"></textarea>
      <div className='mt-4 flex gap-2'>
      <button className="btn btn-outline btn-primary"onClick={handleUpClick}>UpperCase</button>
      <button className="btn btn-outline btn-primary"onClick={handleLoClick}>LowerCase</button>
      <button className="btn btn-outline btn-primary"onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-outline btn-primary"onClick={handleClear}>Clear Text</button>
      </div>
    </div>
      <div className='  flex  flex-col  items-center justify-center'>
        <h1 className='text-2xl font-bold text-purple-600'>Your text summary</h1>
        <p>{text.split(" ").length} Words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length}Minutes Read</p>
        <h2 className='text-2xl font-bold text-purple-600'>Preview</h2>
        <p>{text}</p>
      </div>
      </div>
      </> 
    )
}

export default Body


