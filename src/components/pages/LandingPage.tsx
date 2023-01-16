import Navigation from "../Navigation";
import Sidebar from "../Sidebar";
import User_details from "./User_details";
import User_table from "../props/User_table";
import Cards from "../props/Cards";

export default function(){
    return(
        <div className="landing-page-container">
            <Navigation/>
            <Sidebar/> 
            <Cards/> 
            <User_details />
        </div>
    )
}