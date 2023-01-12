import React from 'react'; 
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Login from './components/pages/Login';
import Navigation from './components/Navigation';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route element={<Login/>} path="/" />
    <Route element={< Navigation />} path="nav" />
   </Routes>
   </BrowserRouter>
  );
}

export default App;
