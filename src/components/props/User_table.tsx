import "../styles/user_table.css";
import filter from "../icons/filter.png";
import more from "../icons/more.png";
import prev from "../icons/prev.png";
import next from "../icons/next.png";
import period from "../icons/period.png";
import {BsFilter} from "react-icons/bs"

export default function () {
    return (
        <div className="usertable-container">

            <div className="users-table table-container">
                <table>
                    {/* <thead> */}
                        <tr className="thead">
                            <th className="organization">
                                ORGANIZATION  <BsFilter/>
                            </th>
                            <th>
                                USERNAME  <BsFilter/>
                            </th>
                            <th>
                                EMAIL  <BsFilter/>
                            </th>

                            <th className="ph <BsFilter/>one">
                                PHONE NUMBER  <BsFilter/>
                            </th>

                            <th className="date">
                                DATE JOINED  <BsFilter/>
                            </th>

                            <th className="status">
                                STATUS  <BsFilter/>
                            </th>
                        </tr>
                    {/* </thead> */}
                    <tbody>
                        <tr>

                            <td className="organization">
                                Lendsqr
                            </td>

                            <td>
                                Adedeji
                            </td>

                            <td>
                                adedeji@lendsqr.com
                            </td>

                            <td className="phone">
                                08092876655
                            </td>

                            <td className="date">
                                MAY 15, 2020 10:00 AM
                            </td>

                            <td>
                                <span className="active">
                                    active
                                </span>
                            </td>

                            <td>
                                <img src={more} alt="more" />
                            </td>


                        </tr>

                        <tr>

                            <td className="organization">
                                Lendsqr
                            </td>

                            <td>
                                Adedeji Chimbusoma roselinena
                            </td>

                            <td>
                                adedeji@lendsqr.com
                            </td>

                            <td className="phone">
                                08092876655
                            </td>

                            <td className="date">
                                MAY 15, 2020 10:00 AM
                            </td>

                            <td className="">
                                <span className="inactive"> Inactive</span>
                            </td>

                            <td>
                                <img src={more} alt="more" />
                            </td>


                        </tr>

                        <tr>

                            <td className="organization">
                                Lendsqr
                            </td>

                            <td>
                                Adedeji
                            </td>

                            <td>
                                adedeji@lendsqr.com
                            </td>

                            <td className="phone">
                                08092876655
                            </td>

                            <td className="date">
                                MAY 15, 2020 10:00 AM
                            </td>

                            <td >
                                <span className="active">
                                    Active
                                </span>
                            </td>

                            <td>
                                <img src={more} alt="more" />
                            </td>


                        </tr>

                        <tr>

                            <td className="organization">
                                Lendsqr
                            </td>

                            <td>
                                Adedeji
                            </td>

                            <td>
                                adedeji@lendsqr.com
                            </td>

                            <td className="phone">
                                08092876655
                            </td>

                            <td className="date">
                                MAY 15, 2020 10:00 AM
                            </td>

                            <td >
                                <span className="blacklisted">
                                    Blacklisted
                                </span>
                            </td>

                            <td>
                                <img src={more} alt="more" />
                            </td>


                        </tr>

                        <tr>

                            <td className="organization">
                                Lendsqr
                            </td>

                            <td>
                                Adedeji
                            </td>

                            <td>
                                adedeji@lendsqr.com
                            </td>

                            <td className="phone">
                                08092876655
                            </td>

                            <td className="date">
                                MAY 15, 2020 10:00 AM
                            </td>

                            <td >
                                <span className="pending">
                                    Pending
                                </span>
                            </td>

                            <td>
                                <img src={more} alt="more" />
                            </td>


                        </tr>

                        <tr>

                            <td className="organization">
                                Lendsqr
                            </td>

                            <td>
                                Adedeji
                            </td>

                            <td>
                                adedeji@lendsqr.com
                            </td>

                            <td className="phone">
                                08092876655
                            </td>

                            <td className="date">
                                MAY 15, 2020 10:00 AM
                            </td>

                            <td>
                                <span className="inactive">
                                    Inactive
                                </span>
                            </td>

                            <td>
                                <img src={more} alt="more" />
                            </td>


                        </tr>




                    </tbody>

                </table>

            </div>
            <div className="table-footer">
                <div className="showing-section">
                    <div className="showing">
                        Showing <span>
                            <select name="" id="">
                                <option value="">100</option>
                            </select>
                        </span>
                    </div>

                    <div className="total">out of 100</div>
                </div>

                <div className="page-navigation">

                    <span className="icon">
                        <img src={prev} alt="Previous" />
                    </span>


                    <span className="number" >
                        1
                    </span>

                    <span className="number" >
                        2
                    </span>

                    <span className="number" >
                        3
                    </span>
                    <span className="number" >
                        <img src={period} alt="" />
                    </span>


                    <span className="number" >
                        15
                    </span>

                    <span className="number" >
                        16
                    </span>


                    <span className="icon">
                        <img src={next} alt="Next" />
                    </span>



                </div>



            </div>

        </div>
    )
}