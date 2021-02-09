import React, { useEffect, useState } from 'react'
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, Box, AccordionIcon, useDisclosure, Button, Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton } from "@chakra-ui/react"
import MealEntryForm from "../auth/MealEntryForm"
import "./index.css"

const FoodTracker = ({ userId }) => {
    const [mealEntries, setMealEntries] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`/api/foodtracker/${userId}`);
            const responseData = await response.json();
            setMealEntries(responseData.entries);
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
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat.
                                    </AccordionPanel>
                                </AccordionItem>
                            </Accordion>
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
