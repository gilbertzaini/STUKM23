import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Sponsor from "./Pages/Sponsor";
import Index from "./Pages/Index";
import Ukm from "./Pages/Ukm";
import { Observer } from "./helper/observer";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    Observer();
  }, []);

  return (
    <ChakraProvider>
      <BrowserRouter>
        <div id="app">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/sponsor" element={<Sponsor />} />
            <Route path="/ukm" element={<Ukm />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
