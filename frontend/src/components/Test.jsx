import React from 'react'
import { Card } from './Card'
import Button from './Button'
import LineIcon from "../components/LineIcon";

const Test = () => {
    const login = ()=>{console.log("login Button Pressed")}
    const register = ()=>{console.log("register Button Pressed")}
  return (
    <div className='h-screen w-screen flex justify-center items-center'>
        <Button text="Login" func={login} icon={<LineIcon />}/>
        <Button text="Register" func={register} icon={<LineIcon />}/>
    </div>
  )
}

export default Test