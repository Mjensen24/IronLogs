import React from 'react';
import { NavLink } from "react-router-dom";
import "./index.css"

const NavLog = (userId) => {

    return (
        <div className="navlog-container">
            <nav className="navlog-main">
                <ul className="navlog-ul">
                    <div>
                        <li className="navlog-li">
                            <NavLink to={`/workouts/${userId.userId}`} exact={true} activeClassName="navlog-active">
                                Workouts
                            </NavLink>
                        </li>
                    </div>
                    <div>
                        <li className="navlog-li">
                            <NavLink to="/diary" exact={true} activeClassName="navlog-active">
                                Diary
                            </NavLink>
                        </li>
                    </div>
                    <div>
                        <li className="navlog-li">
                            <NavLink to="/foodtracker" exact={true} activeClassName="navlog-active">
                                Food Tracker
                            </NavLink>
                        </li>
                    </div>
                    <div>
                        <li className="navlog-li">
                            <NavLink to="/" exact={true} activeClassName="navlog-active">
                                Home
                            </NavLink>
                        </li>
                    </div>
                </ul>
            </nav>
        </div>
    )
}

export default NavLog
