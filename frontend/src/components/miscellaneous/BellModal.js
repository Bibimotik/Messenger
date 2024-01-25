import React, {useState} from "react";
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
import { Input } from '@chakra-ui/react'
import {Box} from "@chakra-ui/layout";
import "./BellModal.css";

const BellModal = ({user, children}) => {
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);
    const addTodo = () => {
        if(todo !== "") {
            setTodos([...todos, todo]);
            setTodo("");
        }
    };

    const deleteTodo = (text) => {
        const newTodos = todos.filter((todo) => {
            return todo !== text;
        });
        setTodos(newTodos);
    }

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
                    >{user.name} Tasks</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Box display="flex">
                            <Input
                                focusBorderColor='purple.200'
                                placeholder='Add task'
                                mr={2}
                                value={todo}
                                onChange={(e) => {setTodo(e.target.value)}}
                            />
                            <Button colorScheme='purple' onClick={addTodo}>Add</Button>
                        </Box>
                        {todos?.length > 0 ? (
                            <ul>
                                {todos.map((todo, index) => (
                                    <div>
                                        <li key={index}>{todo}</li>
                                        <Button colorScheme='red' onClick={() => {
                                            deleteTodo(todo)
                                        }}>Delete</Button>
                                    </div>
                                ))}
                            </ul>
                        ) : (
                            <div className="found">
                                <span>No task found</span>
                            </div>
                        )}
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

export default BellModal;