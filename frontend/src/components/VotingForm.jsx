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
import React, { useEffect, useRef, useState } from "react";
import "./VotingForm.css";
import { fieldList } from "../data/votingFieldList";
import { ukmList } from "../data/ukm";
import axios from "axios";
import back from "../assets/logo/back.svg";

const VotingForm = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState({});

  const [nama, setNama] = useState("");
  const [nim, setNim] = useState("");
  const [email, setEmail] = useState("");
  const [jurusan, setJurusan] = useState("");
  const [angkatan, setAngkatan] = useState("");
  const [ukm, setUkm] = useState("");
  const [olahraga, setOlahraga] = useState("");
  const [sainsos, setSainsos] = useState("");
  const [senbud, setSenbud] = useState("");
  // const [error, setError] = useState(false);

  const [page, setPage] = useState(0);
  const [flip, setFlip] = useState(false);
  const flipRef = useRef(null);
  const frontArr = [];
  const backArr = [];

  const olahragaArr = [];
  const sainsosArr = [];
  const senbudArr = [];

  const getLoggedInUser = async () => {
    try {
      const response = await axios.get("http://localhost:8888/logged-in-user");
      // console.log(response.data);
      setLoggedInUser(response.data);
      setLoggedIn(true);
    } catch (e) {
      setLoggedIn(false);
      setLoggedInUser({});
      // console.log(e);
    }
  };

  useEffect(() => {
    getLoggedInUser();
    // console.log(loggedInUser);
  }, []);

  fieldList.forEach((field) => {
    const item = (
      <Flex direction={"column"}>
        <Flex
          dir={{ base: "column", xl: "row" }}
          justifyContent={"center"}
          alignItems={"center"}
          my={3}
        >
          <FormLabel className="votingLabel" my={"auto"}>
            {field.label}
          </FormLabel>
          <Input
            type={field.type}
            name={field.name}
            className="votingInput"
            placeholder={field.placeholder}
            value={eval(field.name)}
            onChange={(e) => {
              const targetName =
                field.name.charAt(0).toUpperCase() + field.name.slice(1);
              eval(`set${targetName}(e.target.value)`);
            }}
            required={field.required}
          />
        </Flex>
      </Flex>
    );

    field.pos === "front" ? frontArr.push(item) : backArr.push(item);
  });

  const handleLogoClick = (kategori, name) => {
    switch (kategori) {
      case "olahraga":
        setOlahraga(name);
        break;
      case "sainsos":
        setSainsos(name);
        break;
      case "senbud":
        setSenbud(name);
        break;
      default:
        break;
    }
  };

  ukmList.forEach((ukm) => {
    const item = (
      <Button
        my={5}
        h={"7rem"}
        w={"10rem"}
        bg={"transparent"}
        _hover={{
          transform: "scale(1.1)",
          transition: "all .4s ease-in-out",
          bg: "transparent",
        }}
        onClick={() => {
          handleLogoClick(ukm.kategori, ukm.name);
        }}
        transform={
          (ukm.kategori === "olahraga" && olahraga === ukm.name) ||
          (ukm.kategori === "sainsos" && sainsos === ukm.name) ||
          (ukm.kategori === "senbud" && senbud === ukm.name)
            ? "scale(1.1)"
            : "scale(1)"
        }
        opacity={
          (ukm.kategori === "olahraga" &&
            olahraga !== "" &&
            olahraga !== ukm.name) ||
          (ukm.kategori === "sainsos" &&
            sainsos !== "" &&
            sainsos !== ukm.name) ||
          (ukm.kategori === "senbud" && senbud !== "" && senbud !== ukm.name)
            ? "40%"
            : "100%"
        }
      >
        <Image
          src={ukm.path}
          alt={ukm.name}
          h={"inherit"}
          w={"inherit"}
          objectFit={"scale-down"}
        />
      </Button>
    );

    ukm.kategori === "olahraga"
      ? olahragaArr.push(item)
      : ukm.kategori === "sainsos"
      ? sainsosArr.push(item)
      : senbudArr.push(item);
  });

  const toggleFlip = () => {
    if (!flip) {
      if (
        nama === "" ||
        nim === "" ||
        email === "" ||
        jurusan === "" ||
        angkatan === ""
      ) {
        // setError(true);
      } else {
        setFlip(true);
        setPage(1);
        flipRef.current.className = "flip now";
      }
    } else {
      setFlip(false);
      flipRef.current.className = "flip";
    }
  };

  const changePage = () => {
    if (page === 1) {
      if (olahraga !== "") setPage(2);
    } else if (page === 2) {
      if (sainsos !== "") setPage(3);
    }
  };

  const resetState = () => {
    setNama("");
    setNim("");
    setEmail("");
    setJurusan("");
    setAngkatan("");
    setUkm("");
    setOlahraga("");
    setSainsos("");
    setSenbud("");
    setFlip(false);
    setPage(0);
    // console.log("resetted");
  };

  const handleVote = async (e) => {
    e.preventDefault();

    try {
      if (senbud !== "") {
        await axios.post("http://localhost:8888/vote", {
          nim,
          email,
          nama,
          jurusan,
          angkatan,
          ukm,
          olahraga,
          sainsos,
          senbud,
        });

        console.log(`
          submitted:\n
          Nama: ${nama}\n
          NIM: ${nim}\n
          Email: ${email}
          Jurusan: ${jurusan}\n
          Angkatan: ${angkatan}\n
          UKM: ${ukm}\n
          Olahraga: ${olahraga}\n
          Sainsos: ${sainsos}\n
          Senbud: ${senbud}
          `);

        toggleFlip();
        resetState();
      } else {
        console.log("isi dlu bg");
      }
    } catch (e) {
      console.log(e);
    }
  };

  // useEffect(() => {
  //   console.log(
  //     `Nama: ${nama}\n
  //     NIM: ${nim}\n
  //     Email: ${email}
  //     Jurusan: ${jurusan}\n
  //     Angkatan: ${angkatan}\n
  //     UKM: ${ukm}
  //     `
  //   );
  // }, [nama, nim, email, jurusan, angkatan, ukm]);

  // useEffect(() => {
  //   console.log(
  //     `olahraga: ${olahraga}\n
  //       sainsos: ${sainsos}\n
  //       senbud: ${senbud}`
  //   );

  //   getLoggedInUser();
  // }, [olahraga, sainsos, senbud]);

  // useEffect(() => {
  //   console.log(`Page: ${page}`);
  // }, [page]);

  // useEffect(() => {
  //   console.log(`loggedInUser: ${loggedInUser.userId} - ${loggedInUser.nama}`);
  // }, [loggedInUser]);

  return (
    <Flex justify={"center"} align={"center"} h={"100vh"} overflow={"hidden"}>
      <Box id="votingForm" mt={"-5%"} display={loggedIn ? "none" : "block"}>
        <Heading className="votingHeading" py={3} fontSize={{base: "3vh", xl:"6vh"}}>
          Who is the best?
        </Heading>
        <form onSubmit={handleVote}>
          <Flex justify={"center"} align={"center"} className="flipContainer"
          h={{base: "45vh", lg:"55vh", xl: "65vh"}}
          w={{base: "80vw", xl: "65vw"}}>
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
                    borderRadius={"12px"}
                    alignSelf={"end"}
                    isDisabled={
                      nama !== "" &&
                      nim !== "" &&
                      email !== "" &&
                      angkatan !== "" &&
                      jurusan !== ""
                        ? false
                        : true
                    }
                    _disabled={{ opacity: 0.4 }}
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
                <Button
                  pos={"absolute"}
                  top={"9%"}
                  left={2}
                  bg={"transparent"}
                  _hover={{}}
                  _active={{ opacity: 0.5, transform: "scale(0.7)" }}
                  onClick={() => {
                    if (page === 1) {
                      toggleFlip();
                    } else if (page > 1) {
                      setPage(page - 1);
                    }
                  }}
                >
                  <Image h={"3rem"} w={"auto"} src={back} />
                </Button>

                {page === 1 ? (
                  <>
                    <Heading className="ukmHeading">Olahraga</Heading>
                    <Flex className="ukmWrapper">{olahragaArr}</Flex>
                    <Flex justify={"center"} align={"center"} mt={5}>
                      <Button
                        className="votingButton"
                        borderRadius={"12px"}
                        mt={5}
                        onClick={changePage}
                        isDisabled={olahraga !== "" ? false : true}
                        _disabled={{ opacity: 0.4 }}
                      >
                        Next
                      </Button>
                    </Flex>
                  </>
                ) : page === 2 ? (
                  <>
                    <Heading className="ukmHeading">Sains & Sosial</Heading>
                    <Flex className="ukmWrapper">{sainsosArr}</Flex>
                    <Flex justify={"center"} align={"center"} mt={5}>
                      <Button
                        className="votingButton"
                        borderRadius={"12px"}
                        mt={5}
                        onClick={changePage}
                        isDisabled={sainsos !== "" ? false : true}
                        _disabled={{ opacity: 0.4 }}
                      >
                        Next
                      </Button>
                    </Flex>
                  </>
                ) : (
                  <>
                    <Heading className="ukmHeading">Seni & Budaya</Heading>
                    <Flex className="ukmWrapper">{senbudArr}</Flex>
                    <Flex justify={"center"} align={"center"} mt={5}>
                      <Button
                        display={page === 3 ? "block" : "none"}
                        className="votingButton"
                        type="submit"
                        borderRadius={"12px"}
                        mt={5}
                        isDisabled={senbud !== "" ? false : true}
                        _disabled={{ opacity: 0.4 }}
                      >
                        Submit
                      </Button>
                    </Flex>
                  </>
                )}
              </Flex>
            </Box>
          </Flex>
        </form>
      </Box>

      <Flex className="votedContainer" display={loggedIn ? "block" : "none"} h={{base: "25vh", xl: "65vh"}}
      w={{base: "80vw", xl: "65vw"}}>
        <Flex justify={"center"} align={"center"} h={"100%"} my={"auto"}>
          <Text textAlign={"center"} fontSize={{base: "3vh", xl: "5vh"}}>Terima kasih telah memilih</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default VotingForm;
