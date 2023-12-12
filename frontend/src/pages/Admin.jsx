import React, { useState } from 'react'
import Button from './../components/Button';
import axios from 'axios';

const Admin = () => {
  const [description,setDescription] = useState("")
  const handleChange = (e) => {
    setDescription(e.target.value)
  }
  const getDescription = async() =>{
    // Get description from server 
    try{
      const response = await axios.get("http://localhost:5000/api/v1/getDescription")
      if(response.status === 200){
        setDescription(response.data.results[0].descriptionField)
      }else{
        setDescription("")
      }
    }catch (e){console.log(e)}
    // Set description into description state variable
  }
  const updateDescription = async() =>{
    // id
    try{

      const response = await axios.get("http://localhost:5000/api/v1/getDescription");
      if(response.status === 200){
        let id = response.data.results[0]._id;
        const responseForUpdate = await axios.put(`http://localhost:5000/api/v1/updateDescription/${id}`,{descriptionField:description});
        if(responseForUpdate.status === 200){
          alert("data updated successfully")
        }else {
          alert("data did not update successfully")
        }
      }
      }catch (e) {console.log(e)}
  }
    // description
  return (
    <div className='flex flex-row w-screen '>
    <div className='w-36 h-screen bg-slate-300' text-cyan-900>Description</div>
    <div className='text-cyan-200 flex flex-col justify-center items-center w-full p-4 gap-4'>
      <p>Description</p>
      <textarea className='text-black w-full h-80' value={description} onChange={handleChange}/>
      <div className='flex gap-4'>

      <Button text="Get Description" func={getDescription}></Button>
      <Button text="Set Description" func={updateDescription}></Button>
      </div>
    </div>
    </div>
  )
}

export default Admin