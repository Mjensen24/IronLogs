import React, { useState } from "react";
// import { Redirect } from 'react-router-dom';
import { signUp } from '../../services/auth';

const SignUpForm = ({ authenticated, setAuthenticated }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const user = await signUp(username, email, password);
      if (!user.errors) {
        setAuthenticated(true);
      }
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  // if (authenticated) {
  //   return <Redirect to="/" />;
  // }

  return (
    <div className="signup-container">
      <img src="https://ironlogs.s3.amazonaws.com/gympeople.jpg" alt="plant"></img>
      <div className="signup-form_container">
      </div>
      <div className="cooltest">
        <h1>Iron Logs</h1>
        <form className="signup-form" onSubmit={onSignUp}>
          <input
            placeholder="User Name"
            type="text"
            name="username"
            onChange={updateUsername}
            value={username}
          ></input>
          <input
            placeholder="Email"
            type="text"
            name="email"
            onChange={updateEmail}
            value={email}
          ></input>
          <input
            placeholder="Password"
            type="password"
            name="password"
            onChange={updatePassword}
            value={password}
          ></input>
          <input
            placeholder="Confirm Password"
            type="password"
            name="repeat_password"
            onChange={updateRepeatPassword}
            value={repeatPassword}
            required={true}
          ></input>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
