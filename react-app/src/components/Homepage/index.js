import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Diary from '../Diary';
import FoodTracker from '../FoodTracker';
import NavLog from '../NavLog';
import Workouts from '../Workouts';

const HomePage = () => {
    return (
        <div className="homepage-container">
            <NavLog />
            <Switch>
                <Route path="/workouts:id" exact={true}>
                    <Workouts />
                </Route>
                <Route path="/diary">
                    <Diary />
                </Route>
                <Route path="/foodtracker">
                    <FoodTracker />
                </Route>
            </Switch >
            {/* <div className="navlog-container">
                <h1>test</h1>
            </div> */}
        </div >
    )
}

export default HomePage;
