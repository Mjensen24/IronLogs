import React, { useEffect, useState } from 'react'
import "./index.css"

const FoodTracker = ({ userId }) => {
    const [mealEntries, setMealEntries] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`/api/foodtracker/${userId}`);
            const responseData = await response.json();
            setMealEntries(responseData.entries);
        }
        fetchData();
    }, [userId]);

    console.log(mealEntries)

    return (
        <div className="mainpage-container">
            <h1>Food Tracker</h1>
        </div>
    )
}

export default FoodTracker
