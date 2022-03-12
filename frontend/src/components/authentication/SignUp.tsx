import {
    Box,
    Button,
    FormControl,
    FormHelperText,
    FormLabel,
    HStack,
    Input,
    InputGroup,
    InputRightAddon,
    InputRightElement,
    StackDivider,
    VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const postDetails = (pics: any) => {
        setLoading(true);
        if (pic) {
        }
    };
    const submithandler = () => {};

    return (
        <VStack spacing="20px" align="stretch">
            <FormControl id="name" isRequired>
                <FormLabel htmlFor="name" fontWeight="bold" fontSize="sm">
                    NAME
                </FormLabel>
                <Input
                    borderColor="black"
                    bg="#424253"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </FormControl>

            <FormControl isRequired>
                <FormLabel htmlFor="email" fontWeight="bold" fontSize="sm">
                    EMAIL ADDRESS
                </FormLabel>
                <Input
                    borderColor="black"
                    bg="#424253"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    isRequired
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

            <FormControl isRequired>
                <FormLabel
                    htmlFor="confirm-password"
                    fontWeight="bold"
                    fontSize="sm"
                >
                    CONFIRM PASSWORD
                </FormLabel>
                <InputGroup>
                    <Input
                        borderColor="black"
                        bg="#424253"
                        id="confirm-password"
                        value={confirmPassword}
                        type={showPassword ? "text" : "password"}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    {confirmPassword !== "" && (
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
            <FormControl id="pic">
                <FormLabel fontWeight="bold" fontSize="sm">
                    UPLOAD YOUR PROFILE PICTURE
                </FormLabel>
                <Input
                    borderColor="black"
                    bg="#424253"
                    type="file"
                    p={1.5}
                    accept="image/*"
                    onChange={(e: any) => postDetails(e.target.files[0])}
                />
            </FormControl>

            <Button
                colorScheme="green"
                width="100%"
                style={{ marginTop: 15 }}
                onClick={submithandler}
                variant="solid"
            >
                Sign Up
            </Button>
        </VStack>
    );
};

export default SignUp;
