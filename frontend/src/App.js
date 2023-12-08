import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import { useEffect, useState } from 'react';
import axios from 'axios';
function App() {
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() =>{
    getDescription();
    setLoading(false);
  },[])
const getDescription = async ()=>{
  try{
    const descriptions = await axios.get("http://localhost:5000/api/v1/getDescription");
    if (descriptions.status === 200){
      setDescription(descriptions.data.results[0].descriptionField);
    }
  }catch(e){console.log(e)}
}
return (
    <div className="App">

    {(loading)?<h1>Loading</h1>:

    <div>
    <NavBar />
    <Hero />
    <About desc={description} />
    <Skills />
    </div>
    }

    </div>
  );
}

export default App;
