import React from 'react'
import { useContext } from 'react';
import { MyContext } from '../context/MyContext';
const Test = () => {
  const { name, setName } = useContext(MyContext);
  return (
    <div className='h-screen w-screen flex justify-center items-center'>
    <h1>{name}</h1>
      <button onClick={()=>{setName("Hello Iam Python Developer")}}>
        Click me
      </button>
    </div>
  )
}

export default Test