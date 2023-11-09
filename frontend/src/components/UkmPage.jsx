import React, { useState, useEffect } from 'react'
import { Flex, Spacer } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Grid } from '@chakra-ui/react'
import { ukmList } from "../data/ukm";
import UkmCard from './UkmCard'
import UkmCarousel from './UkmCarousel'

const UkmPage = () => {
  const [ukmCard, setUkmCard] = useState([])
  const senbudData = [];
  const olahragaData = [];
  const sainsosData = [];

  for (const property in ukmList) {
    if (ukmList[property].kategori === 'senbud') {
      const senbudItem = {
        name: ukmList[property].name,
        path: ukmList[property].path,
      };
      senbudData.push(senbudItem);
    } else if (ukmList[property].kategori === 'olahraga') {
      const olahragaItem = {
        name: ukmList[property].name,
        path: ukmList[property].path,
      };
      olahragaData.push(olahragaItem);
    } else {
      const sainsosItem = {
        name: ukmList[property].name,
        path: ukmList[property].path,
      };
      sainsosData.push(sainsosItem);
    }
  }

  var ChangeUkmState = (data) => {
    ukmType(data);
  }

  var ukmType = (data) => {
    if (data === 'senbud') setUkmCard(senbudData)
    else if (data === 'olahraga') setUkmCard(olahragaData)
    else setUkmCard(sainsosData)
  }

  useEffect(() => {
    setUkmCard(senbudData)
  }, []);

  return (
    <Box mt={'100px'}>
      <Flex width={'50vw'} mx={'auto'} flexDirection={{ base: 'column', md: 'row' }}>
        <Button
          variant={'ghost'}
          _hover={{
            background: 'transparent'
          }}
          onClick={() => ChangeUkmState('senbud')}>
          Seni & Budaya
        </Button>
        <Spacer />
        <Button
          variant={'ghost'}
          _hover={{
            background: 'transparent'
          }}
          onClick={() => ChangeUkmState('olahraga')}>
          Olahraga
        </Button>
        <Spacer />
        <Button
          variant={'ghost'}
          _hover={{
            background: 'transparent'
          }}
          onClick={() => ChangeUkmState('sainsos')}>
          Sains & Sosial
        </Button>
      </Flex>
      
      <UkmCarousel/>

      <Grid templateColumns={{ base: 'repeat(2, 1fr)', lg: 'repeat(5, 1fr)' }} gap={6} mx={20}>
        {ukmCard.map((ukm) => (
          <UkmCard
            key={ukm.name}
            name={ukm.name}
            path={ukm.path}
          />
        ))}
      </Grid>
      <Box my={10}>

      </Box>
    </Box>
  )
}

export default UkmPage