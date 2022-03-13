import { Box } from "@chakra-ui/layout";
import SingleChat from "./SingleChat";
import { useContext } from "react";
import { ChatContext } from "../../context/ChatProvider";

const Chatbox = ({ fetchAgain, setFetchAgain }: any) => {
    const { selectedChat } = useContext(ChatContext);

    return (
        <Box
            d={{ base: selectedChat ? "flex" : "none", md: "flex" }}
            alignItems="center"
            flexDir="column"
            p={3}
            bg="white"
            w={{ base: "100%", md: "68%" }}
            borderRadius="lg"
            borderWidth="1px"
        >
            <SingleChat />
        </Box>
    );
};

export default Chatbox;
