import "../styles/user_table.css"; 
import more from "../icons/more.png";
import prev from "../icons/prev.png";
import next from "../icons/next.png";
import period from "../icons/period.png";
import { BsFilter } from "react-icons/bs" 
import Filter from "./Filter";
import {  useState, useEffect } from "react"; 
import "../styles/options.css"
import activate from "../icons/activate.png"
import view from "../icons/view.png"
import blacklist from "../icons/blacklist.png"
import { Link } from "react-router-dom"
import axios from "axios"
export type User = {
    "createdAt": string,
    "orgName": string,
    "userName": string,
    "email": string,
    "phoneNumber": string,
    "lastActiveDate": string,

    "profile": {
        [key: string]: string
    },
    "accountBalance": string,
    "accountNumber": string,
    "id": string,
    "education": {
        [key: string]: string,
    },
    "guarantor": {
        [key: string]: string
    },
    "socials": {
        [key: string]: string
    },
    "monthlyIncome": [
        "384.23",
        "108.69"
    ]
}
export const url = "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users"
export default function UserTable() {
    const [initial] = useState<{ filter: boolean, options: boolean }>({ filter: false, options: false })
    const [clicked, setClicked] = useState({ ...initial })
    const [optionId, setOptionId] = useState<string>("") 
   


    const [users, setUsers] = useState<User[] | null>([])


    useEffect(() => {
        handleGetUsers()
    }, [])

    const handleGetUsers = async () => {

        try {
            const data = await (await axios.get(url)).data
            setUsers(data)
        } catch (error) {
            console.log(error)
        }

    }
    return (
        <>
            <div className="usertable-container">


                <div className="users-table table-container">


                    <table onClick={() => {
                        setClicked({ ...initial, filter: false, options: false });
                    }}>
                        <thead className="thead">
                        {
                                    clicked.filter ? (<Filter />) : null
                                }

                            <tr className="thead">
                               
                                <td className="organization">
                                    ORGANIZATION   <BsFilter className="pointer" onClick={(e) => { e.stopPropagation(); setClicked({ ...initial, filter: !clicked.filter }) }} />
                                </td>
                                <td>
                                    USERNAME  <BsFilter className="pointer" onClick={(e) => { e.stopPropagation(); setClicked({ ...initial, filter: !clicked.filter }) }} />
                                </td>
                                <td>
                                    EMAIL  <BsFilter className="pointer" onClick={(e) => { e.stopPropagation(); setClicked({ ...initial, filter: !clicked.filter }) }} />
                                </td>

                                <td className="ph <BsFilter/>one">
                                    PHONE NUMBER  <BsFilter className="pointer" onClick={(e) => { e.stopPropagation(); setClicked({ ...initial, filter: !clicked.filter }) }} />
                                </td>

                                <td className="date">
                                    DATE JOINED  <BsFilter className="pointer" onClick={(e) => { e.stopPropagation(); setClicked({ ...initial, filter: !clicked.filter }) }} />
                                </td>

                                <td className="status">
                                    STATUS  <BsFilter className="pointer" onClick={(e) => { e.stopPropagation(); setClicked({ ...initial, filter: !clicked.filter }) }} />
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users ? users.map((user, i) => {
                                    return <tr key={i}>

                                        <td className="organization">
                                            {user.orgName}
                                        </td>

                                        <td>

                                            {user.userName}
                                        </td>

                                        <td>
                                            {user.email.toLowerCase()}
                                        </td>

                                        <td className="phone">
                                            {user.profile.phoneNumber.split("x")[0]}
                                        </td>

                                        <td className="date">
                                            {user.createdAt}
                                        </td>

                                        <td>
                                            <span className="active">
                                                active
                                            </span>
                                        </td>


                                        <td className="pointer" onClick={(e) => { e.stopPropagation(); setClicked({ ...initial, options: !clicked.options }); setOptionId(user.id) }}>
                                            <img src={more} alt="more" />
                                            {
                                                clicked.options && optionId === user.id ? (<div className="options-container">

                                                    <div className="option">
                                                        <div className="icon">
                                                            <img src={view} alt="view" />
                                                        </div>
                                                        <Link to={`user/${user.id}`} className="text" style={{ textDecoration: "none", color: "#213F7D" }} >
                                                            View Details
                                                        </Link>
                                                    </div>
                                                    <div className="option">
                                                        <div className="icon">
                                                            <img src={blacklist} alt="view" />
                                                        </div>
                                                        <div className="text">
                                                            Blacklist User
                                                        </div>
                                                    </div>
                                                    <div className="option">
                                                        <div className="icon">
                                                            <img src={activate} alt="view" />
                                                        </div>
                                                        <div className="text">
                                                            Activate User
                                                        </div>
                                                    </div>

                                                </div>) : null
                                            }
                                        </td>


                                    </tr>

                                }) : null
                            }


                        </tbody>
                    </table>

                </div>
                <div className="table-footer">
                    <div className="showing-section">
                        <div className="showing">
                            Showing <span>
                                <select name="" id="">
                                    <option value="">100</option>
                                </select>
                            </span>
                        </div>

                        <div className="total">out of 100</div>
                    </div>

                    <div className="page-navigation">

                        <span className="icon">
                            <img src={prev} alt="Previous" />
                        </span>


                        <span className="number" >
                            1
                        </span>

                        <span className="number" >
                            2
                        </span>

                        <span className="number" >
                            3
                        </span>
                        <span className="number" >
                            <img src={period} alt="" />
                        </span>


                        <span className="number" >
                            15
                        </span>

                        <span className="number" >
                            16
                        </span>


                        <span className="icon">
                            <img src={next} alt="Next" />
                        </span>



                    </div>



                </div>

            </div>

        </>
    )
}