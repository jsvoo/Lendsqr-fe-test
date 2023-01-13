import React from 'react'; 
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Login from './components/pages/Login';
import Navigation from './components/Navigation';
import Sidebar from './components/Sidebar';
import Cards from './components/props/Cards';
import User_table from './components/props/User_table';
import Filter from './components/props/Filter';

function App() {
  return (
   <BrowserRouter>
   <Navigation/>
   <Sidebar/>
   <Filter/>

   <Routes>
    <Route element={<Login/>} path="/" />
    <Route element={< Cards />} path="cards" />
    <Route element={<User_table/>} path="table" />
    <Route element={<Filter/>} path="filter" />
   </Routes>
   </BrowserRouter>
  );
}

export default App;
