import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Layout from './components/Landing_Page/Landing_page'};
import Appointments from './Components/Appointments/Appointments';
import SignUp from './Components/SignUp/SignUp';
import Login from './Components/Login/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing_Page/>}/>
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
