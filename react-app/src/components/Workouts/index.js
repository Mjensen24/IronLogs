import React from 'react'
import "./index.css"

const Workouts = () => {

    const data = [
        { 'title': "chest day", "date": "10/24/2020" },
        { 'title': "leg day", "date": "10/24/2010" },
        { 'title': "back day", "date": "10/24/2000" },
        { 'title': "arm day", "date": "10/24/2009" },
        { 'title': "neck day", "date": "10/24/2080" },
    ];


    return (
        <div className="workouts-container">
            <h1>Workouts</h1>
            <div className="workout-entry_container">

                {data.map((entry) => {
                    return (
                        <>
                            <div className="workout-entry">
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
