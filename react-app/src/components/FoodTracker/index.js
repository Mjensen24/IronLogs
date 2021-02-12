import React, { useEffect, useState } from 'react'
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, Box, AccordionIcon } from "@chakra-ui/react"
import "./index.css"
import MealForm from '../auth/MealForm'
import MealEntryDrawer from '../MealEntryDrawer'

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


    return (
        <>
            <div className="mainpage-container">
                <h1>Food Tracker</h1>
                <div className="meals_container">
                    {mealEntries.map((entry) => {
                        return (
                            <div key={entry.id}>
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
                                                        <div key={meal.id} className="meal-container">
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
                                                        <MealForm setMeals={setMeals} userId={userId} mealEntryId={entry.id} />
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
            </div>
            <div className="post-button">
                <MealEntryDrawer setMealEntries={setMealEntries} userId={userId} />
            </div>
        </>
    )
}

export default FoodTracker
