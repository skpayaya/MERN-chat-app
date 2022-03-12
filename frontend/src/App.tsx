import { Spinner } from "@chakra-ui/react";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage";

const ChatPage = lazy(() => import("./Pages/ChatPage"));

function App() {
    return (
        <div className="App">
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
        </div>
    );
}

export default App;
