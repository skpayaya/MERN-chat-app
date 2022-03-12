import axios from "axios";
import { useEffect, useState } from "react";
import { Chat } from "../models/Chat";
// const baseUrl = "";

const ChatPage = () => {
    const [chats, setChats] = useState<Array<Chat>>([]);
    const fetchChats = async () => {
        const { data } = await axios.get<Array<Chat>>("/api/chat");
        setChats(data);
    };

    useEffect(() => {
        fetchChats();
    }, []);

    return (
        <div>
            {chats.map((chat) => (
                <div key={chat._id}>{chat.chatName}</div>
            ))}
        </div>
    );
};

export default ChatPage;
