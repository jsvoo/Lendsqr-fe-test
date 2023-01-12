import "./styles/navigation.css"
import logo from "./images/logo.svg"
import bell from "./images/bell.png"
import avatar from "./images/avatar.jpg"
import { Link } from "react-router-dom";
import {AiOutlineSearch, AiFillCaretDown} from"react-icons/ai"

export default function Navigation(){
    return(
        <div className="navigation-container">
            <div className="logo-section">
                <img src={logo} alt="lendsqr logo" />

            </div>

            <div className="search-section">
                <div className="input">
                    <input type="search" placeholder="Search for anything" /> <span><AiOutlineSearch/></span>
                </div>

            </div>
            <div className="docs-section">
                <Link to={"/"}>Docs</Link>

                <div className="alert">
                    <img src={bell} alt="Alerts" />
                </div>

                <div className="profile-section">
                    <div className="avatar">
                        <img src={avatar} alt="User avatar" />
                    </div>

                    <div className="dropdown">
                      <span>Adedeji <div className="icon"><AiFillCaretDown/></div></span>
                    </div>
                </div>

            </div>
            
        </div>
    )
}