import {
  Box,
  Button,
  Flex,
  FormLabel,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import "./VotingForm.css";

const VotingForm = () => {
  const [nama, setNama] = useState("");
  const [nim, setNim] = useState("");
  const [email, setEmail] = useState("");
  const [jurusan, setJurusan] = useState("");
  const [angkatan, setAngkatan] = useState("");
  const [senbud, setSenbud] = useState("");
  const [sainsos, setSainsos] = useState("");
  const [olahraga, setOlahraga] = useState("");
  const [error, setError] = useState(false);
  const [flip, setFlip] = useState(false);
  const flipRef = useRef(null);
  const frontArr = [];
  const backArr = [];

  const fieldList = [
    {
      pos: "front",
      label: "Nama",
      type: "text",
      name: "nama",
      placeholder: "",
    },
    {
      pos: "front",
      label: "NIM",
      type: "text",
      name: "nim",
      placeholder: "",
    },
    {
      pos: "front",
      label: "Email Student ",
      type: "email",
      name: "email",
      placeholder: "",
    },
    {
      pos: "front",
      label: "Jurusan",
      type: "text",
      name: "jurusan",
      placeholder: "",
    },
    {
      pos: "front",
      label: "Angkatan",
      type: "text",
      name: "angkatan",
      placeholder: "",
    },
    {
      pos: "back",
      label: "Seni & Budaya",
      type: "text",
      name: "senbud",
      placeholder: "",
    },
    {
      pos: "back",
      label: "Olahraga",
      type: "text",
      name: "jurusan",
      placeholder: "",
    },
    {
      pos: "back",
      label: "Sains & Sosial",
      type: "text",
      name: "sainsos",
      placeholder: "",
    },
  ];

  fieldList.forEach((field) => {
    const item = (
      <Flex direction={"column"}>
        <Flex justifyContent={"center"} alignItems={"center"} my={3}>
          <FormLabel className="votingLabel" fontSize={"2rem"} my={"auto"}>
            {field.label}
          </FormLabel>
          <Input
            type={field.type}
            name={field.name}
            className="votingInput"
            placeholder={field.placeholder}
            onChange={(e) => {
              const targetName =
                field.name.charAt(0).toUpperCase() + field.name.slice(1);
              eval(`set${targetName}(e.target.value)`);
            }}
            required
          />
        </Flex>
      </Flex>
    );

    field.pos === "front" ? frontArr.push(item) : backArr.push(item);
  });

  useEffect(() => {
    console.log(
      `Nama: ${nama}\n
      NIM: ${nim}\n
      Email: ${email}
      Jurusan: ${jurusan}\n
      Angkatan: ${angkatan}\n`
    );
  }, [nama, nim, email, jurusan, angkatan]);

  const toggleFlip = () => {
    if (!flip) {
    //   if (
    //     nama === "" ||
    //     nim === "" ||
    //     email === "" ||
    //     jurusan === "" ||
    //     angkatan === ""
    //   ) {
    //     setError(true);
    //   } else {
        setFlip(true);
        flipRef.current.className = "flip now";
    //   }
    } else {
      setFlip(false);
      flipRef.current.className = "flip";
    }
  };

  const handleVote = (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <Box id="votingForm" mt={5}>
      <Heading className="votingHeading" py={3} fontSize={"4rem"}>
        Who is the best?
      </Heading>
      <form onSubmit={handleVote}>
        <Flex justify={"center"} align={"center"} className="flipContainer">
          <Box
            ref={flipRef}
            className="flip"
            h={"inherit"}
            w={"inherit"}
            mx={"auto"}
            bg={"transparent"}
            border={"transparent"}
            py={5}
          >
            <Flex
              className="formFront"
              direction={"column"}
              justify={"center"}
              align={"center"}
            >
              {frontArr}
              <Flex justify={"center"} align={"center"} mt={5} mb={3}>
                <Button
                  className="votingButton"
                  onClick={toggleFlip}
                  fontSize={"2rem"}
                  borderRadius={"12px"}
                  alignSelf={"end"}
                >
                  Vote Now
                </Button>
              </Flex>
            </Flex>
            <Flex
              className="formBack"
              direction={"column"}
              justify={"center"}
              align={"center"}
            >
              {backArr}
              <Flex justify={"center"} align={"center"} mt={5}>
                <Button
                  className="votingButton"
                  type={flip ? "submit" : ""}
                  fontSize={"2rem"}
                  borderRadius={"12px"}
                  mt={5}
                >
                  Submit
                </Button>
              </Flex>
            </Flex>
          </Box>
        </Flex>
      </form>
    </Box>
  );
};

export default VotingForm;
