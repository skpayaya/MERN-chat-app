import {
    VStack,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputRightAddon,
    Button,
} from "@chakra-ui/react";
import React, { useState } from "react";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const postDetails = (pics: any) => {};
    const submithandler = () => {};

    return (
        <VStack spacing="20px" align="stretch">
            <FormControl id="name" isRequired>
                <FormLabel htmlFor="name" fontWeight="bold" fontSize="sm">
                    EMAIL ADDRESS
                </FormLabel>
                <Input
                    borderColor="black"
                    bg="#424253"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </FormControl>

            <FormControl isRequired>
                <FormLabel htmlFor="password" fontWeight="bold" fontSize="sm">
                    PASSWORD
                </FormLabel>
                <InputGroup>
                    <Input
                        borderColor="black"
                        bg="#424253"
                        id="password"
                        value={password}
                        type={showPassword ? "text" : "password"}
                        onChange={(e) => setPassword(e.target.value)}
                        isRequired
                    />
                    {password !== "" && (
                        <InputRightAddon
                            width="20"
                            bgColor="#29A235"
                            borderColor="black"
                        >
                            <Button
                                alignItems="center"
                                justifyContent="center"
                                _focus={{
                                    boxShadow: "0 0",
                                }}
                                height="30px"
                                variant="link"
                                colorScheme="white"
                                onClick={handleShowPassword}
                            >
                                {showPassword ? "hide" : "show"}
                            </Button>
                        </InputRightAddon>
                    )}
                </InputGroup>
            </FormControl>

            <Button
                colorScheme="green"
                width="100%"
                style={{ marginTop: 15 }}
                onClick={submithandler}
                variant="solid"
            >
                Log In
            </Button>

            <Button
                colorScheme="red"
                width="100%"
                style={{ marginTop: 15 }}
                onClick={() => {
                    setEmail("guest@example.com");
                    setPassword("123456");
                }}
                variant="solid"
            >
                Get guest User Credentials
            </Button>
        </VStack>
    );
};

export default Login;
