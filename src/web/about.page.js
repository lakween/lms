import React, { ReactElement } from "react";
import {
  chakra,
  Box,
  useColorModeValue,
  Flex,
  IconButton,
  Heading,
  Button,
  Link,
  SimpleGrid,
  Stack,
  VStack,
  Icon,
  Container,
  Image,
  Text,
  StackDivider,
} from "@chakra-ui/react";
import {
  IoAnalyticsSharp,
  IoLogoBitcoin,
  IoSearchSharp,
} from "react-icons/io5";
import HeaderNav from "./common/header/navbar.page";
import SmallCentered from "./common/footer/footer.page";

const About = () => {
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

  const Features = ({ text, icon, iconBg }) => {
    return (
      <Stack direction={"row"} align={"center"}>
        <Flex
          w={8}
          h={8}
          align={"center"}
          justify={"center"}
          rounded={"full"}
          bg={iconBg}
        >
          {icon}
        </Flex>
        <Text fontWeight={600}>{text}</Text>
      </Stack>
    );
  };

  return (
    <>
      <HeaderNav />

      <Container maxW={"7xl"} py={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4}>
            <Link
              textTransform={"uppercase"}
              color={"blue.400"}
              fontWeight={600}
              fontSize={"sm"}
              bg={useColorModeValue("blue.50", "blue.900")}
              p={2}
              alignSelf={"flex-start"}
              rounded={"md"}
              href="https://docs.google.com/document/d/1yPejU6ATDIXAMUAnuf3gBE6P8dGkUTO2/edit"
              isExternal
            >
              About SILEC
            </Link>
            <Heading>
              Strength, Intelligence, Loyalty, Education, Character are our
              theme.
            </Heading>
            <Text color={"gray.500"} fontSize={"lg"}>
              SILEC Sri Lanka Language Academy is a language school which
              register under the W201636 in Democratic Socialist Republic of Sri
              Lanka. We conduct English language classes, English literature
              classes and Spoken English classes. We offer YLE, KET, PET, FCE
              and TKT courses for students through identifying their language
              requirements. Also we obtain Cambridge English Certificates for
              these courses. We have been working with the English language
              world since number of years and we have well-experienced academic
              staff. Plan your future with us.
            </Text>
            <Stack
              spacing={4}
              divider={
                <StackDivider
                  borderColor={useColorModeValue("gray.100", "gray.700")}
                />
              }
            >
              <Text color={"black.700"} fontSize={"lg"}>
              We offer :
                </Text>
              <Features
                icon={
                  <Icon
                    as={IoAnalyticsSharp}
                    color={"yellow.500"}
                    w={5}
                    h={5}
                  />
                }
                iconBg={useColorModeValue("yellow.100", "yellow.900")}
                text={"YLE"}
              />
              <Features
                icon={
                  <Icon as={IoLogoBitcoin} color={"green.500"} w={5} h={5} />
                }
                iconBg={useColorModeValue("green.100", "green.900")}
                text={"KET"}
              />
              <Features
                icon={
                  <Icon as={IoSearchSharp} color={"purple.500"} w={5} h={5} />
                }
                iconBg={useColorModeValue("purple.100", "purple.900")}
                text={"PET"}
              />
            </Stack>
          </Stack>
          <Flex>
            <Image
              rounded={"md"}
              alt={"feature image"}
              src={
                "https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              }
              objectFit={"cover"}
            />
          </Flex>
        </SimpleGrid>
      </Container>

      <SmallCentered />
    </>
  );
};

export default About;
