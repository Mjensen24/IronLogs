import React, { useEffect, useState } from "react";

const Exercises = ({ exercise }) => {
    if (exercise.workoutId === workout.id) {
        return (
            <div key={exercise.id} className="excercise-container">
                <div className="exercise-data">
                    <p>Exercise: {exercise.title}</p>
                    <p>Weight: {exercise.weight}</p>
                    <p>Reps: {exercise.reps}</p>
                    <p>Sets: {exercise.sets}</p>
                </div>
                <p>Notes: {exercise.notes}</p>
                <button>test</button>
            </div>
        )
    }
    return (
        null
    )
}
