import React from "react";
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Loader from "../components/Loader";
import { useEffect, useState } from 'react';
import axios from 'axios';
// import NavBar from "../components/NavBar";
function Home() {
  const [description, setDescription] = useState("");
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() =>{
    getInfo()
    getDescription();
    setLoading(false);
  },[]);
  const getInfo = async ()=>{
    try {
      const response = await axios.get("http://localhost:5000/api/v1/getInfo");
      if(response.status === 200){
        setInfo(response.data.info);
      }
    }catch(e) {alert(e)}
  }
const getDescription = async ()=>{
  try{
    const response = await axios.get("http://localhost:5000/api/v1/getDescription");
    if (response.status === 200){
      setDescription(response.data.results[0].descriptionField);
    }
  }catch(e){alert(e)}
}
  return (
    <>

    {(loading)?<Loader/>:

    <div>
    <NavBar />
    <Hero />
    <About desc={description} info={info} />
    <Skills />
    </div>
    }
    </>
);
}

export default Home;
