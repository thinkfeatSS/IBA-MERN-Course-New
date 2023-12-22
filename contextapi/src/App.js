import { useState } from "react";
import Test from "./components/Test";
import { MyContext } from "./context/MyContext";


function App() {
  const [name, setName] = useState("");
  return (
    <div className="App">
    <MyContext.Provider value={{name,setName}}>
     <Test />
    </MyContext.Provider>
    </div>
  );
}

export default App;
