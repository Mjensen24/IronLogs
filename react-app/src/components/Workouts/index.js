import React, { useEffect, useState } from "react";
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, Box, AccordionIcon } from "@chakra-ui/react"
import "./index.css"

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
    }, []);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`/api/workouts/test`);
            const responseData = await response.json();
            setExercises(responseData.exercises);
        }
        fetchData();
    }, []);

    console.log(exercises)

    const data = [
        {
            "workoutId": 1,
            "title": "Chest press",
            "reps": 10,
            "sets": 3,
            "notes": "I felt tired by the end of this exercise but could keep going Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            "workoutId": 1,
            "title": "Leg press",
            "reps": 10,
            "sets": 3,
            "notes": "This is totally a test please dont look at any of what i'm writing please."
        },
        {
            "workoutId": 1,
            "title": "Shoulder press",
            "reps": 10,
            "sets": 3,
            "notes": "Chicken noodle soup!!."
        }
    ]

    return (
        <div className="workouts-container">
            <h1>Workouts</h1>
            <div className="workout-entry_container">

                {workouts.map((entry) => {
                    return (
                        <>
                            <Accordion allowToggle>
                                <AccordionItem>
                                    <AccordionButton>
                                        <Box flex="1" textAlign="left">
                                            <p>{entry.date}</p>
                                            <p>{entry.title}</p>
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                    <AccordionPanel pb={4}>
                                        {data.map((exercise) => {
                                            return (
                                                <div className="excercise-container">
                                                    <div className="exercise-data">
                                                        <p>Exercise: {exercise.title}</p>
                                                        <p>Reps: {exercise.reps}</p>
                                                        <p>Sets: {exercise.sets}</p>
                                                    </div>
                                                    <p>Notes: {exercise.notes}</p>
                                                </div>
                                            )
                                        })}
                                    </AccordionPanel>
                                </AccordionItem>
                            </Accordion>
                        </>
                    )
                })}
            </div>
        </div >
    )
}

export default Workouts;
