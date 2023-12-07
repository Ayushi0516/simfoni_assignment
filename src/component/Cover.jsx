import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import simfoni_cover from "../assest/simfoni_cover.png"
const Cover = () => {
  return (
   <Box>
    <Image src={simfoni_cover} width="100%" objectFit="cover"/>
   </Box>
  )
}

export default Cover