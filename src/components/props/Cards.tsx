import "../styles/cards.css"
import d_users from "../icons/d_users.png";
import active_users from "../icons/active_users.png";
import loaned_users from "../icons/loaned_users.png";
import saving_users from "../icons/saving_users.png";
import filter from "../icons/filter.png";
import more from "../icons/more.png";
import prev from "../icons/prev.png";
import next from "../icons/next.png";
import period from "../icons/period.png";
export default function Cards() {
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
                        <p>2,453</p>

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
                        <p>2,453</p>

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
                        <p>12,453</p>

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
                        <p>102,453</p>

                    </div>
                </div>

            </div>


         





        </div>
    )
}