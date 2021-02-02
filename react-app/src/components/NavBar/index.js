import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import "./index.css"

const NavBar = ({ setAuthenticated }) => {
  return (
    <div className="navbar-container">
      <h3>Iron Logs</h3>
      <nav>
        <ul>
          <li className="navbar-element">
            <NavLink to="/" exact={true} activeClassName="active">
              Home
            </NavLink>
          </li>
          <li className="navbar-element">
            <NavLink to="/login" exact={true} activeClassName="active">
              Login
            </NavLink>
          </li>
          <li className="navbar-element">
            <NavLink to="/sign-up" exact={true} activeClassName="active">
              Sign Up
            </NavLink>
          </li>
          <li className="navbar-element">
            <NavLink to="/users" exact={true} activeClassName="active">
              Users
            </NavLink>
          </li>
          <li className="navbar-element">
            <LogoutButton setAuthenticated={setAuthenticated} />
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
