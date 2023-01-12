import React from 'react'; 
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Login from './components/pages/Login';
import Navigation from './components/Navigation';
import Sidebar from './components/Sidebar';

function App() {
  return (
   <BrowserRouter>
   <Navigation/>
   <Routes>
    <Route element={<Login/>} path="/" />
    <Route element={< Sidebar />} path="sidebar" />
   </Routes>
   </BrowserRouter>
  );
}

export default App;
