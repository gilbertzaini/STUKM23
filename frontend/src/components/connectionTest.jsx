import { Box } from '@chakra-ui/react';
import React, {useState, useEffect} from 'react'

function ConnectionTest() {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setMsg(data.message)
      }
    )
  }, [])
  
  return (
    <Box
    bg={'red'}
    h={"20vh"}
    textAlign={"center"}>
      {(typeof msg === 'undefined') ? (
        <p>Loading...</p>
      ) : (
        <p>{msg}</p>
      )}
    </Box>
  )
}

export default ConnectionTest