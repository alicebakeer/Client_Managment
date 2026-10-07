import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css'
import Login from './Login';
import Dashboard from './Dashboard';
import Profile from './Profile';
import Projects from './Projects';
import Home from './Home';
import Signup from './Signup';
function App() {
  
  return (
    <>
    <BrowserRouter basename="/Client_Managment">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/projects" element={<Projects />} />
          <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
