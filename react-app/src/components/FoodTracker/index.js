import React, { useEffect, useState } from 'react'
import "./index.css"
import MealEntryDrawer from '../MealEntryDrawer'
import SoloMealEntry from './MealEntry/SoloMealEntry'

const FoodTracker = ({ userId }) => {
    const [mealEntries, setMealEntries] = useState([]);
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`/api/foodtracker/${userId}`);
            const responseData = await response.json();
            setMealEntries(responseData.entries);
        }
        fetchData();
    }, [userId]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`/api/foodtracker/meals/${userId}`);
            const responseData = await response.json();
            setMeals(responseData.meals);
        }
        fetchData();
    }, [meals, userId]);


    return (
        <>
            <div className="mainpage-container">
                <h1>Food Tracker</h1>
                <div className="meals_container">
                    {mealEntries.map((entry) => {
                        return (
                            <SoloMealEntry key={entry.id} entry={entry} meals={meals} setMeals={setMeals} userId={userId} setMealEntries={setMealEntries} />
                        )
                    })}
                </div>
            </div>
            <div className="post-button">
                <MealEntryDrawer setMealEntries={setMealEntries} userId={userId} />
            </div>
        </>
    )
}

export default FoodTracker
