import Navigation from "../Navigation";
import Sidebar from "../Sidebar"; 
import Cards from "../props/Cards";
import {useEffect } from "react"; 
import { useNavigate } from "react-router-dom";

export default function LandingPage(){ 

const navigate = useNavigate()

useEffect(() => {
    const loggedInUser = localStorage.getItem("lendsqrUser") || ""
    if (!loggedInUser) {
       navigate("/login")
    }
}, [])
    return(
        <div className="landing-page-container"> 
            <Navigation/>
            <Sidebar/> 
            <Cards/>  
        </div>
    )
}