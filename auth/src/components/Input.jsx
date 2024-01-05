import React from 'react'

const Input = ({inputType,placeholder,val,handleChange}) => {
  return (
    <input type={inputType} value={val} placeholder={placeholder} onChange={handleChange} className="p-2 border border-black rounded-xl" />
  )
}

export default Input