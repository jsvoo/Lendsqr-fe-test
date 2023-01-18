import "../styles/filter.css"; 

export default function Filter () {
    return (
        <div className="filter-container" onClick={(e)=>e.stopPropagation()}>
            <div className="parameter-section">
                <div className="parameter">
                    Organization
                </div>
                <div className="select">
                    <select name="" id="">
                        <option value="">Select</option>
                        <option value="">Lendsqr</option>
                        <option value="">Irorun</option>
                    </select>

                </div>
            </div>


            <div className="parameter-section">
                <div className="parameter">
                    Username
                </div>
                <div className="parameter-input">
                    <input type="text" placeholder="User" />

                </div>
            </div>

            <div className="parameter-section">
                <div className="parameter">
                    Email
                </div>
                <div className="parameter-input">
                    <input type="email" placeholder="Email" />

                </div>
            </div>

            <div className="parameter-section">
                <div className="parameter">
                    Date
                </div>
                <label className="parameter-input date-label" htmlFor="date">
                    <input type="date" id="date" placeholder="date"  className="date"/>

                </label>
            </div>

            <div className="parameter-section">
                <div className="parameter">
                    Phone Number
                </div>
                <div className="parameter-input">
                    <input type="text" placeholder="Phone Number" />

                </div>
            </div>

        <div className="parameter-section">
                <div className="parameter">
                    Status
                </div>
                <div className="parameter-input"> 
                <div className="select">
                    <select name="" id="">
                        <option value="">Select</option>
                        <option value="">Active</option>
                        <option value="">Inactive</option>
                        <option value="">Blacklisted</option>
                        <option value="">Pending</option>
                    </select>

                </div>
                </div>
            </div>


            <div className="buttons">
                <button>
                    Reset
                </button>
                <button>
                    Filter
                </button>
            </div>



        </div>
    )
}