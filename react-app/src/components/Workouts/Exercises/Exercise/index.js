import React from "react";
import { deleteExercise } from "../../../../services/auth";
import { TiDeleteOutline } from 'react-icons/ti';


const IndividualExercise = ({ exercise, setExercises }) => {

    const onDeleteEx = async (e) => {
        e.preventDefault();
        const deletedExcercise = await deleteExercise(exercise.id);
        return deletedExcercise;
    }


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
                <p onClick={onDeleteEx}><TiDeleteOutline /></p>
            </div>
        </div>
    )
}

export default IndividualExercise;
