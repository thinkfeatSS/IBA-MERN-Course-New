import React,{ useState } from 'react'
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa";
const PasswordInput = ({placeholder,val,handleChange}) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(true)
    const togglePassword = () => {setIsPasswordVisible(!isPasswordVisible)}
  return (
    <div className="flex justify-center items-center border border-black px-2 rounded-xl">
          <input type={isPasswordVisible ? "password":"text"} onChange={handleChange} placeholder={placeholder} value={val} className="p-2 focus:outline-none" />
          {isPasswordVisible ? <FaRegEye onClick={togglePassword}/> : <FaRegEyeSlash onClick={togglePassword} />}
        </div>
  )
}

export default PasswordInput