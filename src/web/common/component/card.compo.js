import React from "react";
import { Box, Flex, Link, chakra } from "@chakra-ui/react";

import { AiOutlineLink, AiFillTrophy, AiFillBook } from "react-icons/ai";
const BasicCard = (props) => {
  return (
    <Box
      w="full"
      maxW="sm"
      mx="auto"
      mb="4"
      px={4}
      py={3}
      bgGradient= {props.bgColor}
      _dark={{ bg: "gray.800" }}
      shadow="md"
      rounded="md"
      color="white"
    >
      <Flex direction="row">
        <Box margin={"2"}>
          <chakra.h1
            fontSize="lg"
            fontWeight="bold"
            mt={2}
            color="white"
            _dark={{ color: "white" }}
          >
            <AiFillTrophy/>
          </chakra.h1>
        </Box>
        <Box>
          <Flex alignItems="start" justifyContent="start" mt={2}>
            <Link
              mr={2}
              color="white"
              _dark={{ color: "gray.400" }}
              _hover={{
                color: "gray.700",
                _dark: { color: "gray.300" },
              }}
              cursor="pointer"
            ></Link>
          </Flex>
          <Box>
            <chakra.h1
              fontSize="lg"
              fontWeight="bold"
              mt={2}
              color="white"
              _dark={{ color: "white" }}
            >
              {props.cardName}
            </chakra.h1>
            <chakra.p
              fontSize="sm"
              mt={2}
              color="white"
              _dark={{ color: "gray.300" }}
            >
              {props.cardDesc}
            </chakra.p>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default BasicCard;
