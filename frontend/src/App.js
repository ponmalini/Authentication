
import React from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home'
import Register from './components/Register';
function App() {
  return (
    <div className = "App">
      
      <BrowserRouter>

      <Routes>
        <Route path ="/" element ={<Register/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      </BrowserRouter>

      
      </div>
  );
}

export default App;
