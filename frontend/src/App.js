import Admin from "./pages/Admin";
import Home from "./pages/Home";
import Notfound from './pages/Notfound';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Route exact path="/admindashboard" element={<Admin />} /> */}
          {/* <Route exact path="*" element={<Notfound />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
