import Navigation from "../Navigation";
import Sidebar from "../Sidebar";
import User_details from "./User_details";
import User_table from "../props/User_table";
import Cards from "../props/Cards";
import { useState, useContext } from "react";
import { LendsqrUserContextManager } from "../../context/LendsqrUserContext";

export default function(){
    // const [clicked, setClicked] = useState<{userDetails:boolean}>({userDetails:false})
    const {clicked} = useContext(LendsqrUserContextManager)  
//  console.log({...clicked, filter})
console.log(clicked)
// setClicked()
    return(
        <div className="landing-page-container"> 
            <Navigation/>
            <Sidebar/> 
            <Cards/> 
            {/* <User_details /> */}
        </div>
    )
}