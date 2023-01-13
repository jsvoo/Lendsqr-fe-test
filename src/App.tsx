import React from 'react'; 
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Login from './components/pages/Login';
import Navigation from './components/Navigation';
import Sidebar from './components/Sidebar';
import Cards from './components/props/Cards';

function App() {
  return (
   <BrowserRouter>
   <Navigation/>
   <Sidebar/>
   <Routes>
    <Route element={<Login/>} path="/" />
    <Route element={< Cards />} path="cards" />
   </Routes>
   </BrowserRouter>
  );
}

export default App;
