import React from 'react'; 
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Login from './components/pages/Login';
import User_details from './components/pages/User_details';
import Navigation from './components/Navigation';
import Sidebar from './components/Sidebar';
import Cards from './components/props/Cards';
import User_table from './components/props/User_table';
import Filter from './components/props/Filter';
import Options from './components/props/Options';

function App() {
  return (
   <BrowserRouter>
   {/* <Navigation/>
   <Sidebar/> */}
   {/* <Filter/>
   <Options/> */}

   <Routes>
    <Route element={<Login/>} path="/" />
    <Route element={< Cards />} path="cards" />
    <Route element={<User_table/>} path="table" />
    <Route element={<User_details />} path="details" />
   </Routes>
   </BrowserRouter>
  );
}

export default App;
