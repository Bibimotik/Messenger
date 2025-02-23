import React from "react";
import {
    IconButton, Image, Text,
    Modal, ModalBody,
    ModalCloseButton,
    ModalContent, ModalFooter,
    ModalHeader,
    ModalOverlay,
    useDisclosure
} from "@chakra-ui/react";
import {ViewIcon} from "@chakra-ui/icons";
import {Button} from "@chakra-ui/button";

const ProfileModel = ({user, children}) => {

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            {children ? (
                <span onClick={onOpen}>{children}</span>
            ) : (
                <IconButton display="flex" icon={<ViewIcon/>} onClick={onOpen}/>
            )}
            <Modal size="lg" isOpen={isOpen} onClose={onClose} isCentered>
                <ModalOverlay />
                <ModalContent h="410px">
                    <ModalHeader
                        display="flex"
                        fontSize="40px"
                        justifyContent="center"
                        fontFamily="Work sans"
                    >{user.name}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        justifyContent="space-between"
                    >
                        <Image
                            borderRadius="full"
                            boxSize="150px"
                            src={user.pic}
                            alt={user.name}
                        />
                        <Text fontSize={{base: "20px", md: "30px"}} fontFamily="Work sans">Email: {user.email}</Text>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='purple' mr={3} onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default ProfileModel;