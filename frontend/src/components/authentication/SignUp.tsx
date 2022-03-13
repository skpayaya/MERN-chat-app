import {
    Button,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputRightAddon,
    useToast,
    VStack,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [pic, setPic] = useState();
    const [picLoading, setPicLoading] = useState(false);
    const toast = useToast();
    const navigate = useNavigate();

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const postDetails = (pics: any) => {
        setPicLoading(true);
        if (pics === undefined) {
            toast({
                title: "Please select an image",
                status: "warning",
                duration: 5000,
                isClosable: true,
                position: "bottom",
            });
            return;
        }

        console.log(pics);
        if (pics.type === "image/jpeg" || pics.type === "image/png") {
            const data = new FormData();
            data.append("file", pics);
            data.append("upload_preset", "chat-app");
            data.append("cloud_name", "diqyvpb4w");
            fetch("https://api.cloudinary.com/v1_1/diqyvpb4w/image/upload", {
                method: "post",
                body: data,
            })
                .then((res) => res.json())
                .then((data) => {
                    setPic(data.url.toString());
                    console.log(data.url.toString());
                    setPicLoading(false);
                })
                .catch((err) => {
                    console.log(err);
                    setPicLoading(false);
                });
        } else {
            toast({
                title: "Please Select an Image!",
                status: "warning",
                duration: 5000,
                isClosable: true,
                position: "bottom",
            });
            setPicLoading(false);
            return;
        }
    };
    const submithandler = async () => {
        setPicLoading(true);
        if (!name || !email || !password || !confirmPassword) {
            toast({
                title: "Please fill all the fields",
                status: "warning",
                duration: 5000,
                isClosable: true,
                position: "bottom",
            });
            setPicLoading(false);
            return;
        }
        if (password !== confirmPassword) {
            toast({
                title: "Passwords do not match!",
                status: "warning",
                duration: 5000,
                isClosable: true,
                position: "bottom",
            });
            setPicLoading(false);
            return;
        }

        try {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                },
            };
            console.log(pic);
            const data = await axios.post(
                "/api/user",
                {
                    name,
                    email,
                    password,
                    pic,
                },
                config
            );

            if (password !== confirmPassword) {
                toast({
                    title: "Registration Successful!",
                    status: "success",
                    duration: 5000,
                    isClosable: true,
                    position: "bottom",
                });
                localStorage.setItem("userInfo", JSON.stringify(data));
                setPicLoading(false);
                navigate("/chats");
            }
        } catch (error: any) {
            toast({
                title: "Error occured",
                description: error.response.data.message,
                status: "warning",
                duration: 5000,
                isClosable: true,
                position: "bottom",
            });
        }
    };

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
                isLoading={picLoading}
            >
                Sign Up
            </Button>
        </VStack>
    );
};

export default SignUp;
