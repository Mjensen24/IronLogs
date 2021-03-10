import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/NavBar/index";
import Footer from "./components/Footer/index";
import Footer2 from "./components/Footer2/index";
import HomePage from "./components/Homepage/index"
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import Workouts from './components/Workouts/index'
import User from "./components/User";
import { authenticate } from "./services/auth";
import NavLog from "./components/NavLog";
import Diary from "./components/Diary";
import FoodTracker from "./components/FoodTracker";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [userInfo, setUserInfo] = useState([])
  const userId = userInfo.id

  useEffect(() => {
    (async () => {
      const user = await authenticate();
      if (!user.errors) {
        setUserInfo(user)
        setAuthenticated(true);
      }
      setLoaded(true);
    })();
  }, [authenticated]);

  if (!loaded) {
    return null;
  }



  return (
    <BrowserRouter>
      <NavBar authenticated={authenticated} userId={userId} setAuthenticated={setAuthenticated} />
      <Switch>
        <Route path={`/workouts/:${userId}`} exact={true} authenticated={authenticated}>
          <div className="homepage-layout">
            <NavLog userId={userId} />
            <Workouts userId={userId} />
          </div>
        </Route>
        <Route path={`/diary/:${userId}`}>
          <div className="homepage-layout">
            <NavLog userId={userId} />
            <Diary userId={userId} />
          </div>
        </Route>
        <Route path={`/foodtracker/:${userId}`}>
          <div className="homepage-layout">
            <NavLog userId={userId} />
            <FoodTracker userId={userId} />
          </div>
        </Route>
        <Route path="/login" exact={true}>
          <LoginForm
            userId={userId}
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
          />
        </Route>
        <Route path="/sign-up" exact={true}>
          <SignUpForm authenticated={authenticated} setAuthenticated={setAuthenticated} />
        </Route>
        <ProtectedRoute path="/users" exact={true} authenticated={authenticated}>
          <UsersList />
        </ProtectedRoute>
        <ProtectedRoute path="/users/:userId" exact={true} authenticated={authenticated}>
          <User />
        </ProtectedRoute>
        <Route path="/" exact={true} authenticated={authenticated}>
          <HomePage userId={userId}/>
        </Route>
      </Switch>
      {!userId && (
        <Footer2 />
      )}
      {userId && (
        <Footer />
      )}
    </BrowserRouter>
  );
}

export default App;
