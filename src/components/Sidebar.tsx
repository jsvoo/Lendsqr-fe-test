import "./styles/sidebar.css"
import { AiFillLeftCircle, AiOutlineDown, AiFillRightCircle } from "react-icons/ai";
import users from "./icons/users.png"
import home from "./icons/home.png"
import guarantors from "./icons/guarantors.png"
import loans from "./icons/loans.png"
import decision from "./icons/decision.png"
import savings from "./icons/savings.png"
import loan_request from "./icons/loan-request.png"
import whitelist from "./icons/whitelist.png"
import karma from "./icons/karma.png"
import briefcase from "./icons/briefcase.png"
import savings_products from "./icons/savings-products.png"
import fees_and_pricing from "./icons/fees-and-pricing.png"
import fees_and_charges from "./icons/fees.png"
import transactions from "./icons/transactions.png"
import services from "./icons/services.png"
import service_account from "./icons/service-account.png"
import settlements from "./icons/settlements.png"
import reports from "./icons/reports.png"
import preferences from "./icons/preferences.png"
import audit from "./icons/audit.png"
import { useState } from "react";
export default function Sidebar() {

    const [toggleSidebar, setToggleSidebar] = useState<boolean>(false)

    return (
        <div className={toggleSidebar?"sidebar-container ":"sidebar-container hide-sidebar"} >
            {
                toggleSidebar ? (
                    <button className="sidebar-toggle-off" onClick={()=>setToggleSidebar(false)}>
                        <AiFillLeftCircle />
                    </button>
                ) : (
                    <button className="sidebar-toggle-on" onClick={()=>setToggleSidebar(true)}>
                        <AiFillRightCircle />
                    </button>
                )
            }



            <div className="sidebar-item">
                <div className="icon">
                    <img src={briefcase} alt="icon" />
                </div>
                <div className="text flex-center-center">
                    Switch Organization <AiOutlineDown className="icon" />
                </div>
            </div>

            <div className="sidebar-item">
                <div className="icon">
                    <img src={home} alt="icon" />
                </div>
                <div className="text flex-center-center">
                    Dashboard <span className="icon"></span>
                </div>
            </div>


            <div className="sidebar-item">

                <div className="text head flex-center-center">
                    CUSTOMERS <span className="icon"></span>
                </div>
            </div>


            <div className="sidebar-item selected">
                <div className="icon">
                    <img src={users} alt="icon" />
                </div>
                <div className="text flex-center-center">
                    Users <span className="icon"></span>
                </div>
            </div>


            <div className="sidebar-item">
                <div className="icon">
                    <img src={guarantors} alt="icon" />
                </div>
                <div className="text flex-center-center">
                    Guarantors <span className="icon"></span>
                </div>
            </div>


            <div className="sidebar-item">
                <div className="icon">
                    <img src={loans} alt="icon" />
                </div>
                <div className="text flex-center-center">
                    Loans <span className="icon"></span>
                </div>
            </div>

            <div className="sidebar-item">
                <div className="icon">
                    <img src={decision} alt="icon" />
                </div>
                <div className="text flex-center-center">
                    Decision Models <span className="icon"></span>
                </div>
            </div>

            <div className="sidebar-item">
                <div className="icon">
                    <img src={savings} alt="icon" />
                </div>
                <div className="text flex-center-center">
                    Savings <span className="icon"></span>
                </div>
            </div>

            <div className="sidebar-item">
                <div className="icon">
                    <img src={loan_request} alt="icon" />
                </div>
                <div className="text flex-center-center">
                    Loan Requests <span className="icon"></span>
                </div>
            </div>

            <div className="sidebar-item">
                <div className="icon">
                    <img src={home} alt="icon" />
                </div>
                <div className="text flex-center-center">
                    Dashboard <span className="icon"></span>
                </div>
            </div>

            <div className="sidebar-item">
                <div className="icon">
                    <img src={whitelist} alt="icon" />
                </div>
                <div className="text flex-center-center">
                    Whitelist <span className="icon"></span>
                </div>
            </div>

            <div className="sidebar-item">
                <div className="icon">
                    <img src={karma} alt="icon" />
                </div>
                <div className="text flex-center-center">
                    Karma <span className="icon"></span>
                </div>
            </div>

            <div className="sidebar-item">

                <div className="text head flex-center-center">
                    BUSINESSES <span className="icon"></span>
                </div>
            </div>

            <div className="sidebar-item">
                <div className="icon">
                    <img src={briefcase} alt="icon" />
                </div>
                <div className="text flex-center-center">
                    Organization <span className="icon"></span>
                </div>
            </div>

            <div className="sidebar-item">
                <div className="icon">
                    <img src={loan_request} alt="icon" />
                </div>
                <div className="text flex-center-center">
                    Loan products <span className="icon"></span>
                </div>
            </div>

            <div className="sidebar-item">
                <div className="icon">
                    <img src={savings_products} alt="icon" />
                </div>
                <div className="text flex-center-center">
                    Savings Products <span className="icon"></span>
                </div>
            </div>

            <div className="sidebar-item">
                <div className="icon">
                    <img src={fees_and_charges} alt="icon" />
                </div>
                <div className="text flex-center-center">
                    Fees and Charges <span className="icon"></span>
                </div>
            </div>

            <div className="sidebar-item">
                <div className="icon">
                    <img src={transactions} alt="icon" />
                </div>
                <div className="text flex-center-center">
                    Transactions <span className="icon"></span>
                </div>
            </div>

            <div className="sidebar-item">
                <div className="icon">
                    <img src={services} alt="icon" />
                </div>
                <div className="text flex-center-center">
                    Services <span className="icon"></span>
                </div>
            </div>

            <div className="sidebar-item">
                <div className="icon">
                    <img src={service_account} alt="icon" />
                </div>
                <div className="text flex-center-center">
                    Service Account <span className="icon"></span>
                </div>
            </div>

            <div className="sidebar-item">
                <div className="icon">
                    <img src={settlements} alt="icon" />
                </div>
                <div className="text flex-center-center">
                    Settlements <span className="icon"></span>
                </div>
            </div>

            <div className="sidebar-item">
                <div className="icon">
                    <img src={reports} alt="icon" />
                </div>
                <div className="text flex-center-center">
                    Reports <span className="icon"></span>
                </div>
            </div>



            <div className="sidebar-item">

                <div className="text head flex-center-center">
                    SETTINGS <span className="icon"></span>
                </div>
            </div>



            <div className="sidebar-item">
                <div className="icon">
                    <img src={preferences} alt="icon" />
                </div>
                <div className="text flex-center-center">
                    Preferences <span className="icon"></span>
                </div>
            </div>

            <div className="sidebar-item">
                <div className="icon">
                    <img src={fees_and_pricing} alt="icon" />
                </div>
                <div className="text flex-center-center">
                    Fees and Pricing <span className="icon"></span>
                </div>
            </div>

            <div className="sidebar-item">
                <div className="icon">
                    <img src={audit} alt="icon" />
                </div>
                <div className="text flex-center-center">
                    Audit Logs <span className="icon"></span>
                </div>
            </div>





        </div>
    )
}