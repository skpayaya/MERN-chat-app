import "./App.css";
import { StrictMode } from "react";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
    return (
        <StrictMode>
            <ChakraProvider>
                <App />
            </ChakraProvider>
        </StrictMode>
    );
}

export default App;
