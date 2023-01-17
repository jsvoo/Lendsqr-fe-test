import Navigation from "../Navigation";
import Sidebar from "../Sidebar";
import User_details from "./User_details";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
export default function UserDetailsPage(){
    const navigate = useNavigate()

useEffect(() => {
    const loggedInUser = localStorage.getItem("user") || ""
    if (!loggedInUser) {
       navigate("/login")
    }
}, [])
    return(<div>
        <Navigation/>
        <Sidebar/>
        <User_details/>
    </div>)
}