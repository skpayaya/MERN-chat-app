import {
    VStack,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputRightAddon,
    Button,
    useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const toast = useToast();
    const navigate = useNavigate();

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const submithandler = async () => {
        setLoading(true);
        if (!email || !password) {
            toast({
                title: "Please Fill all the Feilds",
                status: "warning",
                duration: 5000,
                isClosable: true,
                position: "bottom",
            });
            setLoading(false);
            return;
        }

        // console.log(email, password);
        try {
            const config = {
                headers: {
                    "Content-type": "application/json",
                },
            };

            const { data } = await axios.post(
                "/api/user/login",
                { email, password },
                config
            );

            // console.log(JSON.stringify(data));
            toast({
                title: "Login Successful",
                status: "success",
                duration: 5000,
                isClosable: true,
                position: "bottom",
            });
            localStorage.setItem("userInfo", JSON.stringify(data));
            setLoading(false);
            navigate("/chats");
        } catch (error: any) {
            toast({
                title: "Error Occured!",
                description: error.response.data.message,
                status: "error",
                duration: 5000,
                isClosable: true,
                position: "bottom",
            });
            setLoading(false);
        }
    };

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
                isLoading={loading}
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
