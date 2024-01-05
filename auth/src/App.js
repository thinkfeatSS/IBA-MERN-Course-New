import { Home, Login, Signup, NotFound } from './routes/pages'
import { BrowserRouter,Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path='*' element={<NotFound />}></Route>
        {/* 
        /dashboard
        /post
         */}

      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
