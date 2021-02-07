import React from 'react';
// import { Route, Switch } from 'react-router-dom';
// import Diary from '../Diary';
// import FoodTracker from '../FoodTracker';
import NavLog from '../NavLog';
// import Workouts from '../Workouts';

const HomePage = () => {
    return (
        <div className="mainpage-container">
            <NavLog />
            <h1>homepage</h1>
        </div>
    )
}

export default HomePage;
