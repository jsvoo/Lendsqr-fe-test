import "../styles/cards.css"
import d_users from "../icons/d_users.png";
import active_users from "../icons/active_users.png";
import loaned_users from "../icons/loaned_users.png";
import saving_users from "../icons/saving_users.png";
import User_table from "./User_table";
import User_details from "../pages/User_details";
import axios from "axios"
import { useEffect, useState } from "react"; 

export default function Cards() {
    const [users, setUsers] = useState<object[]>([])

 
    useEffect(()=>{
        handleGetUsers()
    },[])

    const handleGetUsers = async () => {
        const url ="https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users"
        try {
            const data = await (await axios.get(url)).data
            setUsers(data)
        } catch (error) {
            console.log(error)
        }

    }


    return (
        <div className="cards-container">
            <p className="header">Users</p>
            <div className="cards-body">
                <div className="card">
                    <div className="icon">
                        <img src={d_users} alt="card icon" />

                    </div>
                    <div className="text">
                        <p>USERS</p>

                    </div>
                    <div className="number">
                        <p>{users.length}</p>

                    </div>
                </div>



                <div className="card">
                    <div className="icon">
                        <img src={active_users} alt="card icon" />

                    </div>
                    <div className="text">
                        <p>ACTIVE USERS</p>

                    </div>
                    <div className="number">
                        <p>{users.length}</p>

                    </div>
                </div>

                <div className="card">
                    <div className="icon">
                        <img src={loaned_users} alt="card icon" />

                    </div>
                    <div className="text">
                        <p>USERS WITH LOANS</p>

                    </div>
                    <div className="number">
                        <p>{users.length}</p>

                    </div>
                </div>


                <div className="card">
                    <div className="icon">
                        <img src={saving_users} alt="card icon" />

                    </div>
                    <div className="text">
                        <p>USERS WITH SAVINGS</p>

                    </div>
                    <div className="number">
                        <p>{users.length}</p>

                    </div>
                </div>

            </div>

            <User_table />








        </div>
    )
}