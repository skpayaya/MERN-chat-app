import { Box, Button, Container, Text } from "@chakra-ui/react";
import { useState } from "react";
import Login from "../components/authentication/Login";
import SignUp from "../components/authentication/SignUp";

const HomePage = () => {
    const [loginMode, setLoginMode] = useState(true);

    return (
        <Container color="#E3E5E3" maxW="container.md" centerContent>
            <Box
                width="100%"
                d="flex"
                justifyContent="center"
                p="3"
                bgColor="#2C2D37"
                borderRadius="5px"
                borderWidth="1px"
            >
                <Text fontSize="4xl" fontWeight="extrabold">
                    Chat App
                </Text>
            </Box>
            {loginMode && (
                <Box
                    width="100%"
                    d="flex"
                    flexDirection="column"
                    justifyContent="center"
                    p="4"
                    bgColor="#2C2D37"
                    borderRadius="5px"
                    borderWidth="1px"
                    m="20px 0 0 0"
                >
                    <Login />
                    <Text m="10px 0" color="gray">
                        Need an account?{" "}
                        <Button
                            colorScheme="teal"
                            variant="link"
                            onClick={() => setLoginMode(false)}
                        >
                            Register
                        </Button>
                    </Text>
                </Box>
            )}

            {!loginMode && (
                <Box
                    width="100%"
                    d="flex"
                    flexDirection="column"
                    justifyContent="center"
                    p="4"
                    bgColor="#2C2D37"
                    borderRadius="5px"
                    borderWidth="1px"
                    m="20px 0 0 0"
                >
                    <SignUp />
                    <Box m="10px 0">
                        <Button
                            colorScheme="teal"
                            variant="link"
                            onClick={() => setLoginMode(true)}
                        >
                            Already have an account?
                        </Button>
                    </Box>
                </Box>
            )}
        </Container>
    );
};

export default HomePage;
