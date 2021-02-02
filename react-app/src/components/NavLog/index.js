import React from 'react';
import { NavLink } from 'react-router-dom';
import "./index.css"

const NavLog = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/workouts" exact={true} activeClassName="navlog-active">
                        Workouts
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/diary" exact={true} activeClassName="navlog-active">
                        Diary
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/foodtracker" exact={true} activeClassName="navlog-active">
                        Food Tracker
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavLog
