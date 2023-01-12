import React from 'react'; 
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Login from './components/pages/Login';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route element={<Login/>} path="/" />
   </Routes>
   </BrowserRouter>
  );
}

export default App;
