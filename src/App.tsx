import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Login from './components/pages/Login';  
import LandingPage from './components/pages/LandingPage'; 
import UserDetailsPage from './components/pages/Dashboard';

function App() {
  return ( 
<BrowserRouter> 

   <Routes>
    <Route element={<LandingPage/>} path="/" /> 
    <Route element={<Login />} path="login" />
    <Route element={<UserDetailsPage />} path="user/:id" />
   </Routes>
   </BrowserRouter> 
  );
}

export default App;
