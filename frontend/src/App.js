import * as React from "react";
import { Box, ChakraProvider } from "@chakra-ui/react";
import ConnectionTest from "./components/connectionTest";
import { BrowserRouter, Route, Routes, Redirect } from "react-router-dom";
import "./App.css";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Sponsor from "./Pages/Sponsor";
import Index from "./Pages/Index";
import Ukm from "./Pages/Ukm";
import { Observer } from "./helper/observer";
import { useEffect } from "react";
// IMMPORT MEDPAR PAGE DISINI

function App() {
  useEffect(() => {
    Observer();
  }, []);

  return (
    <ChakraProvider>
      <BrowserRouter>
        <div id="app">
          <Navbar />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/sponsor" element={<Sponsor />} />
            <Route path="/ukm" element={<Ukm />} />
            {/* <Route path="/medpar" element={<Medpar />} /> */}
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
