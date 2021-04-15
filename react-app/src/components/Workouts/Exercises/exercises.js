import React from "react";
import IndividualExercise from "./Exercise";



// const onWorkout = async (e) => {
//     e.preventDefault();
//     const workout = await postWorkout(userInfo.id, title, date)
//     setWorkouts((currentWorkouts) => {
//         return (
//             [...currentWorkouts, workout]
//         )
//     })
//     onClose()
// }

const ExercisesList = ({ exercises, workout, setExercises }) => {
    return (
        exercises.map((exercise) => {
            if (exercise.workoutId === workout.id) {
                return (
                    <IndividualExercise setExercises={setExercises} key={`${exercise.id}`} exercise={exercise} />
                )
            }
            return (
                null
            )
        })
    )
}

export default ExercisesList;
