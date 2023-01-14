import "../styles/user_details.css";
import back_img from "../icons/back_img.png";
import avatar from "../icons/avatar.png";
import tier from "../icons/tier.png";

export default function User_details() {

    return (
        <div className="userdetails-container">

            <div className="header-section">
                <div className="back-to-users">
                    <div className="back-image">
                        <img src={back_img} alt="Back" />
                    </div>
                    <div className="back-text">
                        Back to Users

                    </div>

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


            <div className="profile-details-navigation">

                <div className="profile-header">
                    <div className="avatar-name-section">

                        <div className="avatar-section">
                            <img src={avatar} alt="user_avatar" />
                        </div>

                        <div className="name-section">
                            <div className="name">
                                Grace Effiom
                            </div>
                            <p>LSQFf587g90</p>
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
                            ₦200,000.00
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
                                    <td>Grace Effiom</td>
                                    <td>07060780922</td>
                                    <td>grace@gmail.com</td>
                                    <td>07060780922</td>
                                    <td>Female</td>
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
                                    <td>Single</td>
                                    <td>None</td>
                                    <td>Parent's Apartment</td>
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
                                    <td>B.Sc</td>
                                    <td>Employed</td>
                                    <td>FinTech</td>
                                    <td>2 years</td>
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
                                    <td>grace@lendsqr.com</td>
                                    <td > ₦200,000.00 -  ₦400,000.00</td>
                                    <td>Parent's Apartment</td>
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
                                        {/* <td className="hide"> INSTAGRAM</td> 
                                    <td className="hide"> INSTAGRAM</td>  */}
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>@grace_effiom</td>
                                        <td>@grace_effiom</td>
                                        <td>@grace_effiom</td>
                                        {/* <td className="hide">@grace_effiom</td> 
                                    <td className="hide">@grace_effiom</td>  */}
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
                                        <td>Debby Ogana</td>
                                        <td>07060780922</td>
                                        <td>debby@gmail.com</td>
                                        <td>Sister</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>


                    </div>



                </div>








            </div>






        </div>
    )
}