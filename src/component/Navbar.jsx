import { PhoneIcon, SearchIcon, TriangleDownIcon } from "@chakra-ui/icons";
import {
  Flex,
  Heading,
  Spacer,
  Text,
  Box,
  Button,
  HStack,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  InputRightElement,
  InputLeftElement,
  Avatar,
} from "@chakra-ui/react";

import React from "react";
import { IoIosSearch } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { IoWalkOutline, IoWalletOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { TbBell } from "react-icons/tb";


const Navbar = () => {
  return (
   <Box display="flex" flexDirection="row"  backgroundColor="white" width="100%" height="70px"  justifyContent="space-between" alignItems="center">
     <Box display="flex" flexDirection="row">
     <HStack spacing='24px' >
     <h3>Logo</h3>
      <Text>Catalog</Text>
      <Text>BuyDesk</Text>
      <Text>History</Text>
      <Text>Dashboard</Text>
      </HStack>
     </Box>
     <Box>
      <Input/>
     </Box>
     <Box display="flex" flexDirection="row"  border="1px solid green" paddingRight="40px"  >
      <HStack spacing='30px'>
        {/* <Input size="sm"/> */}
     <IoWalletOutline/>
     <FaRegHeart />
     <IoCartOutline/>
     <TbBell/>
     <Avatar size='sm' name='Sara Green' src='https://bit.ly/kent-c-dodds' />
     <Text>Sara Green</Text>
     <TriangleDownIcon/>
     </HStack>
     </Box>
   </Box>
  );
};

export default Navbar;


  // p="1rem" width="100%" backgroundColor="white"
  // <Flex >
  {/* <Box
    display="flex"
    flexDirection="row"
    justifyContent="space-between"
    alignItems="center"
  >
    <HStack>
      <h3>Logo</h3>
      <Text>Catalog</Text>
      <Text>BuyDesk</Text>
      <Text>History</Text>
      <Text>Dashboard</Text>
    </HStack>
  </Box> */}

  {/* <Spacer /> */}
  {/* <Box> */}
  {/* <InputGroup size="sm" backgroundColor="white">
    <InputLeftAddon children="PO" />
  */}
    {/* <Input
    border="1px solid green"
      htmlSize={25}
      // height="40px"
      variant="outline"
      width="auto"
      placeholder="search"
    /> */}
  {/* <InputRightAddon children={<SearchIcon/>}/>
  </InputGroup> */}
  {/* <Button colorScheme='teal' variant='outline'>
help
</Button> */}
{/* <IoWalletOutline/> */}
  {/* </Box> */}
{/* </Flex> */}