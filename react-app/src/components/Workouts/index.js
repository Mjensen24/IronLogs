import React, { useEffect, useState } from "react";
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, Box, AccordionIcon, useDisclosure, Button, Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton } from "@chakra-ui/react"
import "./index.css"
// import { useSelector } from 'react-redux'
import WorkoutForm from "../auth/WorkoutForm";
import ExerciseForm from "../auth/ExerciseForm";
import WorkoutDrawer from "../WorkoutDrawer";


const Workouts = ({ userId }) => {
    const [workouts, setWorkouts] = useState([]);
    const [exercises, setExercises] = useState([]);
    // const workoutChecker = useSelector()


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
            setExercises(responseData.exercises);
        }
        fetchData();
    }, [userId]);

    return (
        <>
            <div className="mainpage-container">
                <h1>Workouts</h1>
                <div className="workouts_container">
                    {workouts.map((workout) => {
                        return (
                            <div key={workout.id}>
                                <Accordion allowToggle>
                                    <AccordionItem className="indiviual-workout_container">
                                        <AccordionButton className="indiviual-workout_header">
                                            <Box flex="1" textAlign="left">
                                                <p>{workout.date}</p>
                                                <p>{workout.title}</p>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pb={4}>
                                            {exercises.map((exercise) => {
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
                                                        </div>
                                                    )
                                                }
                                                return (
                                                    null
                                                )
                                            })}
                                            <Accordion allowMultiple>
                                                <AccordionItem>
                                                    <AccordionButton>
                                                        <Box flex="1" textAlign="left">
                                                            Add Exercise
                                                        </Box>
                                                        <AccordionIcon />
                                                    </AccordionButton>
                                                    <AccordionPanel pb={4}>
                                                        <ExerciseForm workoutId={workout.id} userId={userId} />
                                                    </AccordionPanel>
                                                </AccordionItem>
                                            </Accordion>
                                        </AccordionPanel>
                                    </AccordionItem>
                                </Accordion>
                            </div>
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
