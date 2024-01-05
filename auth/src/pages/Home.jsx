import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate();

  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center'>
    <h1>
        This is content of Home page
    </h1>
    <button onClick={()=>{navigate("/login")}} className='border border-orange-600 rounded-xl p-2 hover:bg-fuchsia-700 hover:text-white'>Login</button>
    <button onClick={()=>{navigate("/signup")}} className='border border-orange-600 rounded-xl p-2 hover:bg-fuchsia-700 hover:text-white'>Signup</button>
    </div>
  )
}

export default Home