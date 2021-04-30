import React from "react";
import IndividualExercise from "./Exercise";

const ExercisesList = ({ setExercises, exercises, workout, userId }) => {

    return (
        exercises.map((exercise) => {
            if (exercise.workoutId === workout.id) {
                return (
                    <IndividualExercise setExercises={setExercises} userId={userId} key={`${exercise.id}`} exercise={exercise} exercises={exercises} />
                )
            }
            return (
                null
            )
        })
    )
}

export default ExercisesList;
