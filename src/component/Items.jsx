import { Box } from '@chakra-ui/react'
import React from 'react'

const Items = () => {
  return (
    <Box width="100%" height="100px" >
        <h2>Best selling Items</h2>
        <Box display="grid" gridTemplateColumns="repeat(4,1fr)" backgroundColor="white">
        <Box>vegetables</Box>
        <Box>fruits</Box>
        <Box>dairy</Box>
        </Box>
    </Box>
  )
}

export default Items