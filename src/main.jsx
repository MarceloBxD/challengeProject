import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Routes } from "./routes";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <App />
        <Routes />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
