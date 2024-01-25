import React, {useEffect} from 'react';
import {Container, Box, Text, Tabs, TabList, Tab, TabPanel, TabPanels} from '@chakra-ui/react';
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";
import {useHistory} from "react-router-dom";

const Homepage = () => {
    const history = useHistory();

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("userInfo"));

        if (user) {
            history.push('/chats');
        }
    }, [history]);

    return (
        <Container maxW="xl" centerContent>
            <Box
                display="flex"
                justifyContent="center"
                p={3}
                backgroundColor={"white"}
                w="100%"
                m="40px 0 15px 0"
                borderRadius="lg"
                borderWidth="1px"
            >
                <Text fontSize="4xl" fontFamily="Work sans">Messenger</Text>
            </Box>
            <Box
                backgroundColor="white"
                w="100%"
                p={3}
                borderRadius="lg"
                borderWidth="1px"
            >
                <Tabs variant="soft-rounded" colorScheme="purple">
                    <TabList mb="1em">
                        <Tab width="50%">Login</Tab>
                        <Tab width="50%">Sign Up</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <Login/>
                        </TabPanel>
                        <TabPanel>
                            <Signup/>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </Container>
    );
}

export default Homepage;