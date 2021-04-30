import React, { useEffect, useState } from "react";
import { useDisclosure } from "@chakra-ui/react"
import "./index.css"
// import ExerciseForm from "../auth/ExerciseForm";
import WorkoutDrawer from "../WorkoutDrawer";
// import ExercisesList from "./Exercises/exercises";
import SoloWorkout from "./Exercises/Workout";


const Workouts = ({ userId }) => {
    const [workouts, setWorkouts] = useState([]);
    const [exercises, setExercises] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`/api/workouts/${userId}`);
            const responseData = await response.json();
            setWorkouts(responseData.workouts);
        }
        fetchData();
    }, [userId]);


    const { onClose } = useDisclosure()

    return (
        <>
            <div className="mainpage-container">
                <h1>Workouts</h1>
                <div className="workouts_container">
                    {workouts.map((workout) => {
                        return (
                            <SoloWorkout key={workout.id} workout={workout} setExercises={setExercises} onClose={onClose} userId={userId} exercises={exercises} />
                        )
                    })}
                </div>
            </div >
            <div className="post-button">
                <WorkoutDrawer setWorkouts={setWorkouts} userId={userId} />
            </div>
        </>
    )
}

export default Workouts;
