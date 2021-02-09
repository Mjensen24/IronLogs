import React, { useEffect, useState } from 'react'
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, Box, AccordionIcon, useDisclosure, Button, Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton } from "@chakra-ui/react"
import MealEntryForm from "../auth/MealEntryForm"
import "./index.css"
import MealForm from '../auth/MealForm'

const FoodTracker = ({ userId }) => {
    const [mealEntries, setMealEntries] = useState([]);
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`/api/foodtracker/${userId}`);
            const responseData = await response.json();
            setMealEntries(responseData.entries);
        }
        fetchData();
    }, [userId]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`/api/foodtracker/meals/${userId}`);
            const responseData = await response.json();
            setMeals(responseData.meals);
        }
        fetchData();
    }, [userId]);

    function DrawerExample() {
        const { isOpen, onOpen, onClose } = useDisclosure()
        const btnRef = React.useRef()

        return (
            <>
                <Button className="creation-button" ref={btnRef} colorScheme="teal" onClick={onOpen}>
                    +
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
                                <MealEntryForm userId={userId} />
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
        <>
            <div className="mainpage-container">
                <h1>Food Tracker</h1>
                <div className="meals_container">
                    {mealEntries.map((entry) => {
                        return (
                            <>
                                <Accordion allowMultiple>
                                    <AccordionItem>
                                        <h2>
                                            <AccordionButton>
                                                <Box flex="1" textAlign="left">
                                                    <p>{entry.date}</p>
                                                    <p>{entry.title}</p>
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4}>
                                            {meals.map((meal) => {
                                                if (meal.mealEntryId === entry.id) {
                                                    return (
                                                        <div className="meal-container">
                                                            <div className="meal-data">
                                                                <p className="meal-data_entry">{meal.title}</p>
                                                                <p className="meal-data_entry">Calories: {meal.calories}</p>
                                                                <p className="meal-data_entry">Fat: {meal.fat}</p>
                                                                <p className="meal-data_entry">Carbs: {meal.carbs}</p>
                                                                <p className="meal-data_entry">Water: {meal.water} oz.</p>
                                                            </div>
                                                        </div>
                                                    )
                                                }
                                                return null;
                                            })}
                                            <Accordion allowMultiple>
                                                <AccordionItem>
                                                    <h2>
                                                        <AccordionButton>
                                                            <Box flex="1" textAlign="left">
                                                                Add Meal
                                                            </Box>
                                                            <AccordionIcon />
                                                        </AccordionButton>
                                                    </h2>
                                                    <AccordionPanel pb={4}>
                                                        <MealForm userId={userId} mealEntryId={entry.id} />
                                                    </AccordionPanel>
                                                </AccordionItem>
                                            </Accordion>
                                        </AccordionPanel>
                                    </AccordionItem>
                                </Accordion>

                            </>
                        )
                    })}
                </div>
            </div>
            <div className="post-button">
                {DrawerExample()}
            </div>
        </>
    )
}

export default FoodTracker
