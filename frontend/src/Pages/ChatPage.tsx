import { Box } from "@chakra-ui/react";
import { useContext } from "react";
import ChatBox from "../components/chat/ChatBox";
import MyChats from "../components/chat/MyChats";
import SideDrawer from "../components/chat/SideDrawer";
import { ChatContext } from "../context/ChatProvider";

const ChatPage = () => {
    const user = useContext(ChatContext);
    console.log(user);
    return (
        <div style={{ width: "100%" }}>
            {" "}
            <Box
                d="flex"
                justifyContent="space-between"
                w="100%"
                h="91.5vh"
                p="10px"
            >
                <Box d="flex" flexDir="column">
                    {user && <SideDrawer />}

                    {user && <MyChats />}
                </Box>

                {user && <ChatBox />}
            </Box>
        </div>
    );
};

export default ChatPage;
