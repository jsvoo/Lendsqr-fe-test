import "./styles/navigation.css"
import logo from "./images/logo.svg"
import bell from "./images/bell.png" 
import avatar1 from "./images/avatar.png"
import { Link } from "react-router-dom";
import {AiOutlineSearch, AiFillCaretDown} from"react-icons/ai"

export default function Navigation(){
    return(
        <nav className="navigation-container">
            <div className="navigation-body">
            <div className="logo-section">
                <img src={logo} alt="lendsqr logo" />

            </div>

            <div className="search-section">
                <div className="input">
                    <input type="search" placeholder="Search for anything" /> <div className="icon"><AiOutlineSearch/></div>
                </div>

            </div>
            <div className="docs-section">
                <Link to={"/"}>Docs</Link>

                <div className="alert">
                    <img src={bell} alt="Alerts" />
                </div>

                <div className="profile-section">
                    <div className="avatar">
                        <img src={avatar1} alt="User avatar" />
                    </div>

                    <div className="dropdown">
                      <span>Adedeji <span className="icon"><AiFillCaretDown/></span></span>
                    </div>
                </div>

            </div>
            
        </div>
        </nav>
    )
}