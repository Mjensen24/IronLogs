import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { login } from "../../services/auth";

const LoginForm = ({ userId, authenticated, setAuthenticated }) => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = async (e) => {
    e.preventDefault();
    const user = await login(email, password);
    if (!user.errors) {
      setAuthenticated(true);
    } else {
      setErrors(user.errors);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (authenticated) {
    return <Redirect to={`/workouts/${userId}`} />;
    // need userid to redirect to workouts/userid (userid in navlink =undefined error)
  }

  const demoLogin = () => {
    setEmail("demo@aa.io")
    setPassword("password")
  }

  return (
    <div className="login-container">
      <img src="https://ironlogs.s3.amazonaws.com/gympeople.jpg" alt="plant"></img>
      <div className="form-info-background"></div>
      <div className="form-container">
        <div className="form-info">
          <img className="form-img" src="https://ironlogs.s3.amazonaws.com/Ironlogss.png" alt="IronLogs"></img>
          <h1>Login</h1>
          <div className="form-inner">
            <form className="content" onSubmit={onLogin}>
              <div>
                {errors.map((error) => (
                  <div>{error}</div>
                ))}
              </div>
              <div>
                <label htmlFor="email"></label>
                <input
                  className="login-input"
                  name="email"
                  type="text"
                  placeholder="Email"
                  value={email}
                  onChange={updateEmail}
                />
              </div>
              <div>
                <label htmlFor="password"></label>
                <input
                  className="login-input"
                  name="password"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={updatePassword}
                />
              </div>
              <div className="form-buttons">
                <button type="submit">Login</button>
                <button onClick={demoLogin} type="submit">Demo</button>
              </div>
            </form>
          </div>
          <div className="form-footer">
            <p>Dont have an account?</p>
            <Link to="/sign-up">
              Sign Up
            </Link>
          </div>
        </div>
        {/* <div className="form-photo">
          <img src="/images/loginlogo.png" alt="IronLogs"></img>
        </div> */}
      </div>
    </div>
  );
};

export default LoginForm;
