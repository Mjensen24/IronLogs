import React, { useEffect, useState } from "react";
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, Box, AccordionIcon, useDisclosure, Button, AddIcon, Stack, FormLabel, Input, InputGroup, InputLeftAddon, InputRightAddon, Select, Textarea, Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton } from "@chakra-ui/react"
import "./index.css"
import WorkoutForm from "../auth/WorkoutForm";


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

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`/api/workouts/exercises/${userId}`);
            const responseData = await response.json();
            setExercises(responseData.exercises);
        }
        fetchData();
    }, [userId]);

    function DrawerExample() {
        const { isOpen, onOpen, onClose } = useDisclosure()
        const btnRef = React.useRef()

        return (
            <>
                <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
                    Create Workout
                </Button>
                <Drawer
                    isOpen={isOpen}
                    placement="right"
                    onClose={onClose}
                    finalFocusRef={btnRef}
                >
                    <DrawerOverlay>
                        <DrawerContent>
                            <DrawerCloseButton />
                            <DrawerHeader>Create your account</DrawerHeader>

                            <DrawerBody>
                                <WorkoutForm userId={userId} />
                                {/* <Input placeholder="Type here..." /> */}
                            </DrawerBody>

                            <DrawerFooter>
                                <Button variant="outline" mr={3} onClick={onClose}>
                                    Cancel
                                </Button>
                                <Button color="blue">Save</Button>
                            </DrawerFooter>
                        </DrawerContent>
                    </DrawerOverlay>
                </Drawer>
            </>
        )
    }

    return (
        <div className="workouts-container">
            <h1>Workouts</h1>
            <div className="workout-entry_container">
                {DrawerExample()}
                {workouts.map((workout) => {
                    return (
                        <>
                            <Accordion allowToggle>
                                <AccordionItem>
                                    <AccordionButton>
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
                                                    <div className="excercise-container">
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
