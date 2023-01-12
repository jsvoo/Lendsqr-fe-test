import "../styles/login.css"
import logo from "../images/logo.svg"
import banner from "../images/loginBanner.png"
export default function Login() {



    return (
        <div className="login_container">
            <div className="logo-section">
                <img src={logo} alt="Lendsqr image" />

            </div>

            <div className="body">
                <div className="banner-section"> 

                        <div className="banner">
                            <img src={banner} alt="welcome banner" />

                        </div>
                    </div>
 

                <div className="form-section">

                <div className="form-width">
             <div className="header">
             <h1 className="welcome">Welcome!</h1>
                    <p>Enter details to login</p>
             </div>

                    <form >
                        <div className="email-section input-container">
                            <input type="email" placeholder="Email" />
                        </div>
                        <div className="password-section input-container">
                            <input type="password" placeholder="Password" />
                            <span className="show">SHOW</span>
                        </div>
                        <p className="forgot-password">
                            FORGOT PASSWORD
                        </p>
                        <button>LOG IN</button>
                    </form>
                </div>

                </div>
            </div>
        </div>
    )
}

