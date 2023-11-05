import * as React from "react";
import { Box, ChakraProvider } from "@chakra-ui/react";
import ConnectionTest from "./components/connectionTest";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Sponsor from "./Pages/Sponsor";
import Index from "./Pages/Index";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <div id="app">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/sponsor" element={<Sponsor />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
