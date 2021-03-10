import React from 'react';
import { Link } from 'react-router-dom';
import './index.css'

const HomePage = ({userId}) => {
    return (
        <div className="homepage-container">
            <div className="homepage-layer1">
                <div className="intro">
                    <h1>It's Time to Get Moving</h1>
                    <h4>IronLogs will help you get your life together man I promise you're gunna love this app</h4>
                    <div className="intro-links">
                        <div className="link-div">
                            <Link to="/sign-up">
                                Sign Up
                            </Link>
                        </div>
                        <div className="link-div">
                            <Link to="/login">
                                Login
                            </Link>
                        </div>
                    </div>
                </div>
                <img className="intro-img" src="/images/workout.gif" alt="workout-gif"></img>
            </div>
            <div className="homepage-layer2">
                <div className="description">
                    <h1>Start Counting on Genuine Results</h1>
                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
                </div>
            </div>
            <div className="homepage-layer3">
                <div className="features">
                    <img src="/images/geometric.jpg" alt="workout-gif"></img>
                    <div className="features-info">
                        <h1>Introduce a New Lifestyle</h1>
                        <p>Start investing if your health for free.</p>
                        <div className="features-info_list">
                            <div className="feature-item">
                                <Link
                                    to={`/workouts/${userId}`}>
                                    Workouts
                                </Link>
                                <p>Create daily workouts with a variety of personalized exercises</p>
                            </div>
                            <div className="feature-item">
                                <Link
                                    to={`/diary/${userId}`}>
                                    Diary
                                </Link>
                                <p>Track your personalized progress with your own diary entries</p>
                            </div>
                            <div className="feature-item">
                                <Link
                                    to={`/foodtracker/${userId}`}>
                                    Food Tracker
                                </Link>
                                <p>Keep updated records of your daily meals with a calorie counter and more!</p>
                            </div>
                        </div>
                        <Link to="/sign-up">
                            Sign Up
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;
