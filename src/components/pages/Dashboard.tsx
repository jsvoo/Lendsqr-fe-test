import Navigation from "../Navigation";
import Sidebar from "../Sidebar"; 
import { useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import UserDetails from "./UserDetails";
export default function UserDetailsPage(){
    const navigate = useNavigate()

useEffect(() => {
    const loggedInUser = localStorage.getItem("lendsqrUser") || ""
    if (!loggedInUser) {
       navigate("/login")
    }
}, [])
    return(<div>
        <Navigation/>
        <Sidebar/>
        <UserDetails/>
    </div>)
}