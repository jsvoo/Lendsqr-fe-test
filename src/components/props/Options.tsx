import "../styles/options.css"
import activate from "../icons/activate.png"
import view from "../icons/view.png"
import blacklist from "../icons/blacklist.png"
export default function Options(){
    return(
        <div className="options-container"> 

        <div className="option">
            <div className="icon">
                <img src={view} alt="view" />
            </div>
            <div className="text">
                View Details
            </div>
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

        </div>
    )
}