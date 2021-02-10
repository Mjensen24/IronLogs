import React from "react";
import { logout } from "../../services/auth";
import { Redirect } from "react-router-dom";

const LogoutButton = ({ authenticated, setAuthenticated }) => {
  const onLogout = async (e) => {
    await logout();
    setAuthenticated(false);
  };

  if (!authenticated) {
    return <Redirect to="/login" />;
  }

  return <button onClick={onLogout}>Logout</button>;
};

export default LogoutButton;
