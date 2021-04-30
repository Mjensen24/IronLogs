import React, { useEffect, useState } from "react";
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, Box, AccordionIcon } from "@chakra-ui/react"
import ExerciseForm from "../../../auth/ExerciseForm";
import ExercisesList from "../exercises";
import { TiDeleteOutline } from 'react-icons/ti';




const SoloWorkout = ({ workout, onClose, userId }) => {

    const [exercises, setExercises] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`/api/workouts/exercises/${userId}`);
            const responseData = await response.json();
            setExercises(responseData.exercises);
        }
        fetchData();
    }, [exercises, userId]);

    return (
        <div key={workout.id}>
            <Accordion allowToggle>
                <AccordionItem className="individual-workout_container">
                    <AccordionButton _expanded={{ bg: "teal", color: "white" }} className="individual-workout_header">
                        <Box flex="1" textAlign="left">
                            <p>{workout.date}</p>
                            <p>{workout.title}</p>
                        </Box>
                        <div className="diary-delete">
                            <TiDeleteOutline />
                        </div>
                        <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel className="individual-workout_data" pb={4}>
                        <ExercisesList setExercises={setExercises} exercises={exercises} workout={workout} userId={userId} />
                        <Accordion allowMultiple>
                            <AccordionItem>
                                <AccordionButton _expanded={{ bg: "teal", color: "white" }}>
                                    <Box flex="1" textAlign="left">
                                        Add Exercise
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                <AccordionPanel pb={4}>
                                    <ExerciseForm onClose={onClose} setExercises={setExercises} workoutId={workout.id} userId={userId} />
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </div>
    )
}

export default SoloWorkout;
