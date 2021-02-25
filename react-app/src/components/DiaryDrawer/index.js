import React from 'react'

import { useDisclosure, Button, Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton } from "@chakra-ui/react"
import DiaryForm from '../auth/DiaryForm'

function DiaryDrawer({ setEntries, userId }) {
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
                        <DrawerHeader>Create your Daiary Entry</DrawerHeader>

                        <DrawerBody>
                            <DiaryForm onClose={onClose} setEntries={setEntries} userId={userId} />

                        </DrawerBody>

                        <DrawerFooter>
                            <Button variant="outline" mr={3} onClick={onClose}>
                                Cancel
                            </Button>
                        </DrawerFooter>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        </>
    )
}

export default DiaryDrawer;
