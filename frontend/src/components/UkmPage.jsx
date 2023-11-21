import React, { useState, useEffect } from "react";
import { Flex, Spacer } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { ukmList } from "../data/ukm";
import UkmCard from "./UkmCard";
import UkmCarousel from "./UkmCarousel";
import gorden_kiri from "../assets/image/gorden_kiri.png"
import gorden_kanan from "../assets/image/gorden_kanan.png"

const UkmPage = () => {
  const [ukm, setUkm] = useState("senbud");
  const [ukmCard, setUkmCard] = useState([]);
  const senbudData = [];
  const olahragaData = [];
  const sainsosData = [];

  for (const property in ukmList) {
    const match = ukmList[property].instagram.match(
      /instagram\.com\/([a-zA-Z0-9_]+)/
    );
    const username = match ? match[1] : null;
    if (ukmList[property].kategori === "senbud") {
      const senbudItem = {
        name: ukmList[property].name,
        path: ukmList[property].path,
        instagram: ukmList[property].instagram,
        instagram_user: username,
      };
      senbudData.push(senbudItem);
    } else if (ukmList[property].kategori === "olahraga") {
      const olahragaItem = {
        name: ukmList[property].name,
        path: ukmList[property].path,
        instagram: ukmList[property].instagram,
        instagram_user: username,
      };
      olahragaData.push(olahragaItem);
    } else {
      const sainsosItem = {
        name: ukmList[property].name,
        path: ukmList[property].path,
        instagram: ukmList[property].instagram,
        instagram_user: username,
      };
      sainsosData.push(sainsosItem);
    }
  }

  var ChangeUkmState = (data) => {
    ukmType(data);
    setUkm(data);
  };

  var ukmType = (data) => {
    if (data === "senbud") setUkmCard(senbudData);
    else if (data === "olahraga") setUkmCard(olahragaData);
    else setUkmCard(sainsosData);
  };

  useEffect(() => {
    setUkmCard(senbudData);
  }, []);

  return (
    <Box>
      <Box className="observed gradientBg" py={{base:'5rem', xl:'4rem'}}>
        <Image src={gorden_kiri} top={0} height={'100vh'} left={0} position={'absolute'} />
        <Image src={gorden_kanan} top={0} height={'100vh'} right={0} position={'absolute'} />
        <Flex
          width={"60vw"}
          mx={"auto"}
          flexDirection={{ base: "column", xl: "row" }}
          gap={{md: 4}}
        >
          <Button
            variant={"ghost"}
            fontSize={{base:'1.5rem', md:'2.5rem', xl: "2rem"}}
            textDecoration={ukm === "senbud" ? "underline" : "none"}
            _hover={{
              background: "transparent",
              transform: "scale(1.1)",
            }}
            onClick={() => ChangeUkmState("senbud")}
          >
            Seni & Budaya
          </Button>
          <Spacer />
          <Button
            variant={"ghost"}
            fontSize={{base:'1.5rem', md:'2.5rem', xl: "2rem"}}
            textDecoration={ukm === "olahraga" ? "underline" : "none"}
            _hover={{
              background: "transparent",
              transform: "scale(1.1)",
            }}
            onClick={() => ChangeUkmState("olahraga")}
          >
            Olahraga
          </Button>
          <Spacer />
          <Button
            variant={"ghost"}
            fontSize={{base:'1.5rem', md:'2.5rem', xl: "2rem"}}
            textDecoration={ukm === "sainsos" ? "underline" : "none"}
            _hover={{
              background: "transparent",
              transform: "scale(1.1)",
            }}
            onClick={() => ChangeUkmState("sainsos")}
          >
            Sains & Sosial
          </Button>
        </Flex>

        <UkmCarousel ukmType={ukm} />
      </Box>

      <Grid
        className="observed"
        templateColumns={{
          base: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
          xl: "repeat(5, 1fr)",
        }}
        gap={6}
        mx={{ base: 10, lg: 20 }}
      >
        {ukmCard.map((ukm) => (
          <GridItem>
            <UkmCard
              key={ukm.name}
              name={ukm.name}
              path={ukm.path}
              instagram={ukm.instagram}
              instagram_user={ukm.instagram_user}
            />
          </GridItem>
        ))}
      </Grid>
      <Box my={'1rem'}></Box>
    </Box>

  );
};

export default UkmPage;
