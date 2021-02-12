import React from 'react'

import { useDisclosure, Button, Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton } from "@chakra-ui/react"
import MealEntryForm from "../auth/MealEntryForm"

function MealEntryDrawer({ setMealEntries, userId }) {
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
                        <DrawerHeader>Create your Meal Entry</DrawerHeader>

                        <DrawerBody>
                            <MealEntryForm onClose={onClose} setMealEntries={setMealEntries} userId={userId} />

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

export default MealEntryDrawer;
