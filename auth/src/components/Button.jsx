import React from 'react'

const Button = ({text,handleSubmit}) => {
  return (
    <button onClick={handleSubmit} className="bg-fuchsia-600 text-white py-2 rounded-xl">{text}</button>
  )
}

export default Button