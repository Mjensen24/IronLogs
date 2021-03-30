import React, { useEffect, useState } from "react";
import { TiDeleteOutline } from 'react-icons/ti';


const ExercisesList = ({ exercises, workout, userId }) => {
    const [workouts, setWorkouts] = useState([]);
    const [exercisesArray, setExercises] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`/api/workouts/${userId}`);
            const responseData = await response.json();
            setWorkouts(responseData.workouts);
        }
        fetchData();
    }, [userId]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`/api/workouts/exercises/${userId}`);
            const responseData = await response.json();
            setExercises(responseData.exercisesArray);
        }
        fetchData();
    }, [userId]);


    {
        exercises.map((exercise) => {
            if (exercise.workoutId === workout.id) {
                return (
                    <div key={exercise.id} className="excercise-container">
                        <div className="exercise-data">
                            <div className="exercise-data_total">
                                <div className="exercise-data_top">
                                    <p>EXERCISE: {exercise.title}</p>
                                    <p>WEIGHT: {exercise.weight}</p>
                                    <p>REPS: {exercise.reps}</p>
                                    <p>SETS: {exercise.sets}</p>
                                </div>
                                <div className="exercise-data_bottom">
                                    <p>NOTES: {exercise.notes}</p>
                                </div>
                            </div>
                        </div>
                        <div className="exercise_delete-button">
                            <p><TiDeleteOutline /></p>
                        </div>
                    </div>
                )
            }
            return (
                null
            )
        })
    }
}

export default ExercisesList;
