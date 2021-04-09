import React from 'react'
import { useDisclosure, Button, Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton } from "@chakra-ui/react"
import DiaryForm from '../auth/DiaryForm'
import { BsPlusCircle } from 'react-icons/bs';


function DiaryDrawer({ setEntries, userId }) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()


    return (
        <>
            <Button className="creation-button" ref={btnRef} colorScheme="white" onClick={onOpen}>
                <BsPlusCircle color="#008080" />
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
                        <DrawerHeader>Create your Diary Entry</DrawerHeader>

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
