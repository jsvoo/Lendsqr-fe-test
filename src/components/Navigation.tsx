import "./styles/navigation.css"
import logo from "./images/logo.svg"
import bell from "./images/bell.png"
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineSearch, AiFillCaretDown, AiOutlineMenu, AiOutlineClose, AiOutlineLogout } from "react-icons/ai"
import { useState, useEffect } from "react";
import { User } from "./props/UserTable";

export default function Navigation() {
    const [clickedMenu, setClickedMenu] = useState<boolean>(false)
    const [clickedDropdown, setClickedDropdown] = useState<boolean>(false)
    const [user, setUser] = useState<User | null>(null)
    const navigate = useNavigate()

    useEffect(() => {
        const loggedInUser = localStorage.getItem("lendsqrUser") || ""
        if (loggedInUser) {

            setUser(JSON.parse(loggedInUser))
        }
    }, [])


    function handleLogout() {
        localStorage.removeItem("lendsqrUser")
        navigate("/login")
    }


    return (
        <div className="all-screen-navs-container">

            <nav className="navigation-container">
                {
                    user && (<div className="navigation-body">
                        <div className="logo-section">
                            <img src={logo} alt="lendsqr logo" />

                        </div>

                        <div className="search-section">
                            <div className="input">
                                <input type="search" placeholder="Search for anything" /> <div className="icon"><AiOutlineSearch /></div>
                            </div>

                        </div>
                        <div className="docs-section">
                            <Link to={"/"}>Docs</Link>

                            <div className="alert">
                                <img src={bell} alt="Alerts" />
                            </div>

                            <div className="profile-section">
                                <div className="avatar">
                                    <img src={user.profile.avatar} alt="User avatar" />
                                </div>

                                <div className="dropdown">
                                    <span>{user.profile.firstName} <span className="icon" onClick={()=>setClickedDropdown(!clickedDropdown)}><AiFillCaretDown /></span></span>
                                </div>

                                {
                                    clickedDropdown && (
                                        <div className="dropdown-content">

                                            <div className="logout-section">


                                                <button className="pointer" onClick={(e) => {
                                                    e.preventDefault();
                                                    handleLogout()
                                                }}>
                                                    <AiOutlineLogout className="icon" />

                                                    Logout
                                                </button>

                                            </div>
                                        </div>
                                    )
                                }




                            </div>

                        </div>

                    </div>)
                }
            </nav>

            {
                user && (<nav className="mobile-nav "  >
                    <div className="navigation-body">
                        <div className="logo-section">
                            <img src={logo} alt="lendsqr logo" />

                        </div>
                        <div className="profile-section">
                            <div className="avatar">
                                <img src={user.profile.avatar} alt="User avatar" />
                            </div>

                            <div className="dropdown">
                                <span>{user.profile.firstName} <span className="icon"><AiFillCaretDown /></span></span>
                            </div>

                        </div>
                        <button type="button" className="menu" onClick={() => setClickedMenu(!clickedMenu)}>
                            {
                                clickedMenu ? (
                                    <AiOutlineClose />
                                ) : (

                                    <AiOutlineMenu />
                                )
                            }
                        </button>




                    </div>

                </nav>)
            }

            {
                clickedMenu && (
                    <div className="mobile-menu-content">
                        <div className="mobile-search-section">
                            <div className="input">
                                <input type="search" placeholder="Search for anything " /> <div className="icon"><AiOutlineSearch /></div>
                            </div>
                            <div className="docs-section">
                                <Link to={"/"}>Docs</Link>

                                <div className="alert">
                                    <img src={bell} alt="Alerts" />
                                </div>

                            </div>

                            <div className="logout-section">


                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleLogout()
                                    }}
                                ><AiOutlineLogout className="logout-icon" />

                                    <div className="link">Logout</div></button>

                            </div>
                        </div>
                    </div>
                )
            }


        </div>
    )
}