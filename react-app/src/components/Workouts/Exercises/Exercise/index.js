import React from "react";
import { deleteExercise } from "../../../../services/auth";
import { TiDeleteOutline } from 'react-icons/ti';
import { Link } from "react-router-dom";

const IndividualExercise = ({ setExercises, exercise, userId }) => {

    const onDeleteEx = async (e) => {
        e.preventDefault();
        await deleteExercise(exercise.id);
        setExercises((currentExercises) => {
            // const exercise = [currentExercises.splice([...currentExercises].indexOf(deleted), currentExercises.length)]
            return (
                [...currentExercises]
                // [[...currentExercises].splice([...currentExercises].indexOf(deleted), 1)]
            )
        })
    }

    // console.log(exercise)

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
                <p onClick={onDeleteEx}>
                    <TiDeleteOutline>
                        <Link to={`/workouts/${userId}`} />
                    </TiDeleteOutline></p>

            </div>
        </div>
    )
}

export default IndividualExercise;
