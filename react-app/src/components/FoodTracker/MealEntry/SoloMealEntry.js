import React from 'react';
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, Box, AccordionIcon } from "@chakra-ui/react"
import MealForm from '../../auth/MealForm';
import MealList from '../Meal/mealList';
import { deleteMealEntry } from '../../../services/auth';

const SoloMealEntry = ({ entry, meals, setMeals, userId, setMealEntries }) => {

    const onDeleteMealEntry = async (e) => {
        e.preventDefault();
        await deleteMealEntry(entry.id);
        setMealEntries((currentEntries) => {
            // const exercise = [currentExercises.splice([...currentExercises].indexOf(deleted), currentExercises.length)]
            return (
                [...currentEntries]
                // [[...currentExercises].splice([...currentExercises].indexOf(deleted), 1)]
            )
        })
    }

    return (
        <div key={entry.id}>
            <Accordion allowMultiple>
                <AccordionItem className="entry_container">
                    <h2>
                        <AccordionButton _expanded={{ bg: "teal", color: "white" }}>
                            <Box flex="1" textAlign="left">
                                <p>{entry.date}</p>
                                <p>{entry.title}</p>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel className="total-meals" pb={4}>
                        <MealList entry={entry} meals={meals} setMeals={setMeals} />
                        <Accordion allowMultiple>
                            <AccordionItem>
                                <h2>
                                    <AccordionButton _expanded={{ bg: "teal", color: "white" }}>
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
                        <h1>hi</h1>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </div>
    )
}

export default SoloMealEntry
