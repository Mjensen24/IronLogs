import React, { useEffect, useState } from "react";
import "./index.css"

const Workouts = (userId) => {
    const [workouts, setWorkouts] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`/api/workouts/${userId.userId}`);
            const responseData = await response.json();
            setWorkouts(responseData.workouts);
        }
        fetchData();
    }, []);

    console.log('workouts', userId)

    return (
        <div className="workouts-container">
            <h1>Workouts</h1>
            <div className="workout-entry_container">

                {workouts.map((entry) => {
                    return (
                        <>
                            <div key={entry.userId} className="workout-entry">
                                <p>{entry.date}</p>
                                <p>{entry.title}</p>
                            </div>
                        </>
                    )
                })}
            </div>
        </div>
    )
}

export default Workouts;
