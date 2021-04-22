import React from 'react';
import { TiDeleteOutline } from 'react-icons/ti';
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, Box, AccordionIcon } from "@chakra-ui/react"
import { deleteEntry } from "../../../services/auth"

const SoloEntry = ({ setEntries, entry }) => {

    const deleteDiary = async (e) => {
        e.preventDefault();
        await deleteEntry(entry.id);
        setEntries((currentEntries) => {
            return (
                [...currentEntries]
            )
        })
    }

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
                            <div className="diary-delete">
                                <TiDeleteOutline onClick={deleteDiary} />
                            </div>
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
}

export default SoloEntry;
