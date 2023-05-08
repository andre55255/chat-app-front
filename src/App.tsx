import { CookiesProvider } from "react-cookie";
import { RouterProvider } from "react-router";
import Router from "./routes/router";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
    return (
        <ChakraProvider>
            <CookiesProvider>
                <RouterProvider router={Router} />
            </CookiesProvider>
        </ChakraProvider>
    );
}

export default App;
