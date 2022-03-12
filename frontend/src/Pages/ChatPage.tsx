import axios from "axios";
import React, { useEffect } from "react";

// const baseUrl = "";

const ChatPage = () => {
    const fetchChats = async () => {
        const data = await axios.get("/api/chat");
        console.log(data);
    };

    useEffect(() => {
        fetchChats();
    }, []);

    return <div>ChatPage</div>;
};

export default ChatPage;
