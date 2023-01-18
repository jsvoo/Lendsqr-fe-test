import "../styles/login.css"
import logo from "../images/logo.svg"
import banner from "../images/loginBanner.png"
import { useState, useEffect } from "react"
import { url, User } from "../props/UserTable"
import axios from "axios"
import { useNavigate } from "react-router-dom"
export default function Login() {
    const [users, setUsers] = useState<User[]>([]) 
    const [input, setInput] = useState<{ email: string, password: string, error: string }>({ email: "", password: "", error: "" })
    const [emptyField, setEmptyField] = useState<boolean>(false)
    const navigate = useNavigate()

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setInput((prev) => {
            return { ...prev, [name]: value.toLowerCase() }
        })

    }

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
    const handleFieldValidation = () => {
        if (input.email === "" || input.email === null || input.password === "" || input.password === null) {
            setEmptyField(true)
        } else {
            handleLogin()
        }
    }


    const handleLogin = () => {

        for (const user of users) {
            if (user.email.toLowerCase() === input.email.toLowerCase()) { 
                if (user.profile.bvn === input.password) {
                    setInput({ ...input, error: " " })
                    localStorage.setItem("lendsqrUser", JSON.stringify(user))
                    navigate("/")
                } else {
                    setInput({ ...input, error: "Invalid password. Please use your BVN as password" })
                }
                break;
            } else {
                setInput({ ...input, error: "Account not found. Please log in with a registered email or signup to continue" })
            }
        }

    }


    return (
        <div className="login_container">


            <div className="body">
                <div className="banner-section">
                    <div className="logo-section">
                        <img src={logo} alt="Lendsqr logo" />

                    </div>
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
                            <div className="email-section input-container ">
                                <input type="text"
                                    className={!emptyField && input.email === "" ? "" : "error"}
                                    placeholder={!emptyField && input.email === "" ? "Email" : ("Email is required")}
                                    name="email"
                                    onChange={(event) => { handleChange(event); setEmptyField(false) }}
                                    value={input.email}
                                />

                            </div>
                            <div className="password-section input-container">
                                <input type="password"
                                    name="password"
                                    onChange={(event) => handleChange(event)}
                                    value={input.password}
                                    className={!emptyField && input.password === "" ? "" : "error"}
                                    placeholder={!emptyField && input.password === "" ? "Password" : ("Password is required ")}
                                />
                                <span className="show">SHOW</span>
                            </div>

                            <p style={{ fontSize: "10px", color: "red" }}>{input.error !== "" && input.error}</p>

                            <p className="forgot-password">
                                FORGOT PASSWORD
                            </p>
                            <button type="button"
                                onClick={() => handleFieldValidation()}
                            >LOG IN</button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}

