import "../styles/user_details.css";
import back_img from "../icons/back_img.png";
import avatar from "../icons/avatar.png";
import tier from "../icons/tier.png";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react"
import { url, User } from "../props/UserTable";
import axios from "axios"

export default function UserDetails() {

    const [user, setUser] = useState<User>()
    const { id } = useParams()
    const [incomeRange, setIncomeRange] = useState<{ lower: number, higher: number }>({ lower: 0, higher: 0 })



    useEffect(() => {
        axios.get(`${url}/${id}`).then((response) => {
            const data = response.data
            setUser(data)

            if (+data.education.monthlyIncome[0] < +data.education.monthlyIncome[1]) {
                setIncomeRange({ ...incomeRange, lower: +data.education.monthlyIncome[0], higher: +data.education.monthlyIncome[1] })
            } else {
                setIncomeRange({ ...incomeRange, lower: +data.education.monthlyIncome[1], higher: +data.education.monthlyIncome[0] })
            }

        })
    }, [])

    return (
        <div className="userdetails-container">

            <div className="header-section">
                <div className="back-to-users">
                    <Link to={"/"} className="back-image">
                        <img src={back_img} alt="Back" />
                    </Link>
                    <Link to={"/"} className="back-text">
                        Back to Users

                    </Link>

                </div>
                <div className="details-buttons-section">
                    <div className="user-details-header-text">
                        User Details
                    </div>
                    <div className="buttons">
                        <button>BLACKLIST USER</button>
                        <button>ACTIVATE USER</button>
                    </div>
                </div>
            </div>

            {
                user ? (

                    <div className="profile-details-navigation">

                        <div className="profile-header">
                            <div className="avatar-name-section">

                                <div className="avatar-section">
                                    <img src={avatar} alt="user avatar" />
                                </div>

                                <div className="name-section">
                                    <div className="name">
                                        { `${user.profile.firstName} ${user.profile.lastName}`}
                                    </div>
                                    <p>{user.accountNumber}</p>
                                </div>

                            </div>

                            <div className="tier-section">
                                <div className="tier-text">
                                    User's Tier
                                </div>
                                <div className="tier-icon">
                                    <img src={tier} alt="Tier-1" />
                                </div>

                            </div>
                            <div className="amount-section">
                                <div className="amount">
                                    ₦{user.accountBalance}
                                </div>

                                <div className="account-details">
                                    9912345678/Providus Bank
                                </div>

                            </div>
                        </div>

                        <div className="navigation-section">
                            <span>General Details</span>
                            <span>Documents</span>
                            <span> Bank Details</span>
                            <span> Loans</span>
                            <span> Savings</span>
                            <span> App and System</span>
                        </div>


                    </div>
                ) : <p>Loading user information, please wait...</p>
            }

            {
                user ? (
                    <div className="userdetails-body">

                        <div className="personal-information-section">

                            <div className="personal infomation">
                                <p>Personal information</p>

                                <div className="table-container">
                                    <table>
                                        <thead>
                                            <tr>
                                                <td>FULL NAME</td>
                                                <td>PHONE NUMBER</td>
                                                <td> EMAIL ADDRESS</td>
                                                <td>BVN</td>
                                                <td>GENDER</td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>{user.profile.firstName} {user.profile.lastName}</td>
                                                <td>{user.phoneNumber.split('x')[0]}</td>
                                                <td>{user.email.toLowerCase()}</td>
                                                <td>{user.profile.bvn}</td>
                                                <td>{user.profile.gender}</td>
                                            </tr>
                                        </tbody>

                                        <thead className="thead">
                                            <tr>
                                                <td>MARITAL STATUS</td>
                                                <td>CHILDREN</td>
                                                <td> TYPE OF RESIDENCE</td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>UNKNOWN</td>
                                                <td>UNKNOWN</td>
                                                <td>UNKNOWN</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>


                            </div>

                            <div className="education infomation">
                                <p>Education and Employment</p>

                                <div className="table-container">
                                    <table>
                                        <thead>
                                            <tr>
                                                <td>LEVEL OF EDUCATION</td>
                                                <td>EMPLOYMENT STATUS</td>
                                                <td> EMPLOYMENT SECTOR</td>
                                                <td>DURATION OF EMPLOYMENT</td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>{user.education.level}</td>
                                                <td>{user.education.employmentStatus}</td>
                                                <td>{user.education.sector}</td>
                                                <td>{user.education.duration}</td>
                                            </tr>
                                        </tbody>

                                        <thead className="thead">
                                            <tr>
                                                <td> OFFICE EMAIL</td>
                                                <td>MONTHLY INCOME</td>
                                                <td> LOAN REPAYMENT</td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>{user.education.officeEmail}</td>
                                                <td > ₦{incomeRange.lower}-{incomeRange.higher}</td>
                                                <td>₦{user.education.loanRepayment}</td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </div>

                            </div>

                            <div className="socials infomation">
                                <p>Socials</p>
                                <div className="table-container">

                                    <table>
                                        <thead>
                                            <tr>
                                                <td>TWITTER</td>
                                                <td>FACEBOOK</td>
                                                <td> INSTAGRAM</td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>{user.socials.twitter}</td>
                                                <td>{user.socials.facebook}</td>
                                                <td> {user.socials.instagram}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>


                            </div>

                            <div className="guarantor infomation">
                                <p>Guarantor</p>

                                <div className="table-container">
                                    <table>
                                        <thead>
                                            <tr>
                                                <td>FULL NAME</td>
                                                <td> PHONE NUMBER</td>
                                                <td>EMAIL ADDRESS</td>
                                                <td>RELATIONSHIP</td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>{`${user.guarantor.firstName} ${user.guarantor.lastName}`} </td>
                                                <td>{user.guarantor.phoneNumber.split("x")[0]}</td>
                                                <td>UNKNOWN</td>
                                                <td>UNKNOWN</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>


                            </div>



                        </div>








                    </div>
                ) : null
            }






        </div>
    )
}