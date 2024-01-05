import React,{useEffect, useState} from 'react'
import {Link} from "react-router-dom"
import validator from 'validator';
import Input from "../components/Input";
import PasswordInput from "../components/PasswordInput";
import Button from "../components/Button";
import axios from "axios"
function Signup() {
  const [errorMessage, setErrorMessage] = useState("")
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const handleNameChange = (e)=>{
    setName(e.target.value)
  }
  const handleEmailChange = (e)=>{
    setEmail(e.target.value)
  }
  const handlePasswordChange = (e)=>{
    setPassword(e.target.value)
  }
  const handleConfirmPasswordChange = (e)=>{
    setConfirmPassword(e.target.value)
  }
  const isDataValid = ()=>{
    // name === "" ?  setErrorMessage("Name Field is required") : setErrorMessage("");
    // (validator.isEmail(email)) ?  setErrorMessage("Please enter a valid email"): setErrorMessage("");
    // password === "" ? setErrorMessage("Password Field is required"): setErrorMessage("");
    // confirmPassword === "" ?  setErrorMessage("Password Confrom Field is required"):setErrorMessage("");
  }
  const handleSubmit = async(e)=>{
    e.preventDefault()
    isDataValid()
    const userdata = {
      name,
      email,
      password
    }
    try {
      const response = await axios.post("http://localhost:5000/api/v1/register",userdata)
      console.log(response);
    }catch {
      console.log("Error")
    }
  }

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="flex flex-col gap-4 border border-zinc-500 p-6 rounded-xl shadow-xl">
      <h1 className="text-center">SignUP</h1>
        <Input inputType="text" placeholder="Name" val={name} handleChange={handleNameChange}/>
        <Input inputType="email" placeholder="Email" val={email} handleChange={handleEmailChange}/>
        <PasswordInput placeholder="Password " val={password} handleChange={handlePasswordChange}/>
        <PasswordInput placeholder="Conform Password" val={confirmPassword} handleChange={handleConfirmPasswordChange}/>
        <Button handleSubmit={handleSubmit} text="Register"/>
        {errorMessage ? <h1 className='text-red-500 font-semibold'>{errorMessage}</h1> : null}
        <Link to='/login'>Already Have and account</Link>
      </div>
    </div>
  )
}

export default Signup