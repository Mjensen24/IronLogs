import React, { useEffect, useState } from 'react'
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, Box, AccordionIcon } from "@chakra-ui/react"
import "./index.css"
import DiaryDrawer from '../DiaryDrawer';

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

    return (
        <>
            <div className="mainpage-container">
                <h1>Diary</h1>
                <div className="entries_container">
                    {entries.map((entry) => {
                        return (
                            <div key={entry.id}>
                                <Accordion allowToggle>
                                    <AccordionItem className="entry">
                                        <h2>
                                            <AccordionButton className="entries_header" _expanded={{ bg: "teal", color: "white" }}>
                                                <Box flex="1" textAlign="left">
                                                    <p>{entry.date}</p>
                                                    <p>{entry.title}</p>
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel className="entry-data" pb={4}>
                                            <p>{entry.notes}</p>
                                        </AccordionPanel>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="post-button">
                <DiaryDrawer setEntries={setEntries} userId={userId} />
            </div>
        </>
    )
}

export default Diary
