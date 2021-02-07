import React, { useEffect, useState } from 'react'
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, Box, AccordionIcon, useDisclosure, Button, Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton } from "@chakra-ui/react"
import DiaryForm from '../auth/DiaryForm';
import "./index.css"

const Diary = ({ userId }) => {
    const [entries, setEntries] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`/api/diaryentries/${userId}`);
            const responseData = await response.json();
            setEntries(responseData.entries);
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
                                <DiaryForm userId={userId} />
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
        <>
            <div className="mainpage-container">
                <h1>Diary</h1>
                <div className="entries_container">
                    {/* {DrawerExample()} */}
                    {entries.map((entry) => {
                        return (
                            <Accordion allowToggle>
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
                                        <p>{entry.notes}</p>
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

export default Diary
