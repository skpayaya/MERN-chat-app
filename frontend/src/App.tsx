import { Box, Spinner } from "@chakra-ui/react";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage";

const ChatPage = lazy(() => import("./Pages/ChatPage"));

function App() {
    return (
        <Box className="App" fontFamily="Poppins">
            <Routes>
                <Route path="/" element={<HomePage />} />

                <Route
                    path="/chats"
                    element={
                        <Suspense fallback={<Spinner size="xl" />}>
                            <ChatPage />
                        </Suspense>
                    }
                />
            </Routes>
        </Box>
    );
}

export default App;
