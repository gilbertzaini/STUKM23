import {
  Box,
  Button,
  Flex,
  FormLabel,
  Heading,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import React from "react";
import "./VotingForm.css";
import trompet from "../assets/image/trompet.png";

const VotingClosed = () => {
  return (
    <Flex
      className="observed"
      pos={"relative"}
      justify={"center"}
      align={"center"}
      h={"100vh"}
      overflow={"hidden"}
    >
      <Image
        display={{ base: "none", xl: "block" }}
        className="trompet trompetKiri"
        src={trompet}
      />
      <Image
        display={{ base: "none", xl: "block" }}
        className="trompet trompetKanan"
        src={trompet}
      />
      <Heading
        className="votingHeading"
        py={3}
        fontSize={{ base: "4vh", xl: "9vh" }}
      >
        Voting Telah Ditutup
      </Heading>
    </Flex>
  );
};

export default VotingClosed;
