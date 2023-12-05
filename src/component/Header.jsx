import { TriangleDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Input,
  InputGroup,
  InputRightAddon,
  Select,
} from "@chakra-ui/react";
import React from "react";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <Box
      backgroundColor="#e6e6e6"
      width="100%"
      height="auto"
      padding="20px 20px"
      display="flex"
      flexDirection="column"
      gap="20px"
    >
      <Box display="flex" flexDirection="row" justifyContent="" gap="25px">
        <Box
          width="13%"
          height="35px"
          border="1px solid 	#C8C8C8"
          display="flex"
          flexDirection="row"
          backgroundColor="white"
          alignItems="center"
          justifyContent="space-between"
          borderRadius="4px"
          padding="0px 10px"
        >
          <p style={{ fontSize: "15px" }}>Purchase organization</p>
          <TriangleDownIcon boxSize={3} />
        </Box>
        <Box
          width="13%"
          height="35px"
          border="1px solid #C8C8C8"
          display="flex"
          flexDirection="row"
          backgroundColor="white"
          alignItems="center"
          justifyContent="space-between"
          borderRadius="4px"
          padding="0px 10px"
        >
          <p style={{ fontSize: "15px" }}>Company</p>
          <TriangleDownIcon boxSize={3} />
        </Box>
        <Box
          width="13%"
          height="35px"
          border="1px solid #C8C8C8"
          display="flex"
          flexDirection="row"
          backgroundColor="white"
          alignItems="center"
          justifyContent="space-between"
          borderRadius="4px"
          padding="0px 10px"
        >
          <p style={{ fontSize: "15px" }}>Plant</p>
          <TriangleDownIcon boxSize={3} />
        </Box>
      </Box>
      <Box display="flex" flexDirection="row" gap="20px">
        <InputGroup
          width="66%"
          backgroundColor="white"
          border="1px solid #C8C8C8"
          borderRadius="none"
        >
          <Input type="text" placeholder="search" />
          <InputRightAddon children={<FaSearch />} />
        </InputGroup>

        <Button colorScheme="teal" variant="outline" width="5%">
          Upload
        </Button>
        <Box
          width="13%"
          height="35px"
          border="1px solid #C8C8C8"
          display="flex"
          flexDirection="row"
          backgroundColor="white"
          alignItems="center"
          justifyContent="space-between"
          borderRadius="4px"
          padding="0px 10px"
        >
          <p style={{ fontSize: "15px" }}>Filter</p>
          <TriangleDownIcon boxSize={3} />
        </Box>
        <Box
          width="13%"
          height="35px"
          border="1px solid #C8C8C8"
          display="flex"
          flexDirection="row"
          backgroundColor="white"
          alignItems="center"
          justifyContent="space-between"
          borderRadius="4px"
          padding="0px 10px"
        >
          <p style={{ fontSize: "15px" }}>Sort</p>
          <TriangleDownIcon boxSize={3} />
        </Box>
      </Box>
      <Box
        width="100%"
        backgroundColor="white"
        height="40px"
        border="1px solid #C8C8C8"
        borderRadius="4px"
        padding="0px 20px"
        display="flex"
        flexDirection="row"
        gap="30px"
        alignItems="center"
      >
        <Select
          width="10%"
          variant="unstyled"
          placeholder="All Categories"
        ></Select>
        <Select width="5%" variant="unstyled" placeholder="Fruits"></Select>
        <Select
          width="8%"
          variant="unstyled"
          placeholder=" Vegetables"
        ></Select>
        <Select width="5%" variant="unstyled" placeholder="Dairy"></Select>
        <Select
          width="10%"
          variant="unstyled"
          placeholder="Meat & poultry"
        ></Select>
        <Select width="7%" variant="unstyled" placeholder="Seafood"></Select>
      </Box>
    </Box>
  );
};

export default Header;
