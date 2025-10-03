import { useState, useContext } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './componenets/Login'
import Sidebar from './componenets/Sidebar'
import Home from './componenets/Home'
import Aboutus from './componenets/Aboutus'
import Settings from './componenets/Settings'
import { UserContext } from './context/UserContext'
import Dashboard from './componenets/Dashboard'


function App() {
  
  const { isLoggedIn, setLoggedIn } = useContext(UserContext);
  
  return (
      <BrowserRouter>
        <div className="app-layout">
          {isLoggedIn && <Sidebar />}
        </div>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Login onLogin={() => setLoggedIn(true)} />} />
            <Route path="/login" element={<Login onLogin={() => setLoggedIn(true)} />} />
            <Route path="/home" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/about" element={<Aboutus />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </BrowserRouter>
  )
}

export default App
