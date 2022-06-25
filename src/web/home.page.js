import React from "react";
import {
  chakra,
  Box,
  useColorModeValue,
  Flex,
  IconButton,
  Heading,
  Button,
  Stack,
  Icon,
} from "@chakra-ui/react";

import { Image, Link } from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";
import HeaderNav from "./common/header/navbar.page";
import SmallCentered from "./common/footer/footer.page";

const WebHome = () => {
  const bg = useColorModeValue("white", "gray.800");

  const Feature = (props) => {
    return (
      <Flex>
        <Icon
          boxSize={5}
          mt={1}
          mr={2}
          color="brand.500"
          _dark={{ color: "brand.300" }}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          ></path>
        </Icon>
        <chakra.p
          fontSize="lg"
          color="gray.700"
          _dark={{ color: "gray.400" }}
          {...props}
        />
      </Flex>
    );
  };

  return (
    <>
      <HeaderNav />
      <>
        <>
          <Box
            w="full"
            h="container.sm"
            backgroundImage="url(https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)"
            bgPos="center"
            bgSize="cover"
          >
            <Flex
              align="center"
              pos="relative"
              justify="center"
              boxSize="full"
              bg="blackAlpha.700"
            >
              <Stack textAlign="center" alignItems="center" spacing={6}>
                <Heading
                  fontSize={["2xl", , "3xl"]}
                  fontWeight="semibold"
                  color="white"
                  textTransform="uppercase"
                >
                  Build Your new{" "}
                  <chakra.span color="blue.400" textDecor="underline">
                    Saas
                  </chakra.span>
                </Heading>
                <Button
                  colorScheme="brand"
                  textTransform="uppercase"
                  w="fit-content"
                >
                  Start project
                </Button>
              </Stack>
            </Flex>
          </Box>

          <Flex
            bg="#edf3f8"
            _dark={{ bg: "#3e3e3e" }}
            p={50}
            w="full"
            alignItems="center"
            justifyContent="center"
          >
            <Box
              mx="auto"
              rounded="lg"
              shadow="md"
              bg="white"
              _dark={{ bg: "gray.800" }}
              maxW="2xl"
            >
              <Image
                roundedTop="lg"
                w="full"
                h={64}
                fit="cover"
                src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                alt="Article"
              />

              <Box p={6}>
                <Box>
                  <chakra.span
                    fontSize="xs"
                    textTransform="uppercase"
                    color="brand.600"
                    _dark={{ color: "brand.400" }}
                  >
                    Product
                  </chakra.span>
                  <Link
                    display="block"
                    color="gray.800"
                    _dark={{ color: "white" }}
                    fontWeight="bold"
                    fontSize="2xl"
                    mt={2}
                    _hover={{ color: "gray.600", textDecor: "underline" }}
                  >
                    I Built A Successful Blog In One Year
                  </Link>
                  <chakra.p
                    mt={2}
                    fontSize="sm"
                    color="gray.600"
                    _dark={{ color: "gray.400" }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Molestie parturient et sem ipsum volutpat vel. Natoque sem
                    et aliquam mauris egestas quam volutpat viverra. In pretium
                    nec senectus erat. Et malesuada lobortis.
                  </chakra.p>
                </Box>

                <Box mt={4}>
                  <Flex alignItems="center">
                    <Flex alignItems="center">
                      <Image
                        h={10}
                        fit="cover"
                        rounded="full"
                        src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60"
                        alt="Avatar"
                      />
                      <Link
                        mx={2}
                        fontWeight="bold"
                        color="gray.700"
                        _dark={{ color: "gray.200" }}
                      >
                        Jone Doe
                      </Link>
                    </Flex>
                    <chakra.span
                      mx={1}
                      fontSize="sm"
                      color="gray.600"
                      _dark={{ color: "gray.300" }}
                    >
                      21 SEP 2015
                    </chakra.span>
                  </Flex>
                </Box>
              </Box>
            </Box>
          </Flex>
        </>
        <SmallCentered />
      </>
    </>
  );
};

export default WebHome;
