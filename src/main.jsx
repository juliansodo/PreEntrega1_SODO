import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import TemaChakra from "./style/TemaChakra.js";

const tema = extendTheme(TemaChakra)
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ChakraProvider theme={tema}>
      <App />
    </ChakraProvider>
  </StrictMode>
);
