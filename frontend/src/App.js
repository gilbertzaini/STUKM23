import * as React from 'react'

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'
import ConnectionTest from './components/connectionTest'
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ConnectionTest />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  )
}

export default App