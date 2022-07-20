import React, {useState} from "react";
import {
  chakra,
  Box,
  useColorModeValue,
  Flex,
  IconButton,
  SimpleGrid,
  Heading,
  Button,
  Icon,
  Container,
  Text,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
} from "@chakra-ui/react";
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from "react-icons/md";
import { BsGithub, BsLinkedin, BsPerson } from "react-icons/bs";
import HeaderNav from "./common/header/navbar.page";
import SmallCentered from "./common/footer/footer.page";

const Contact = () => {
  const bg = useColorModeValue("white", "gray.800");
  const [name, setName] = useState("");
  console.log(name);

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
          <Flex
            direction="column"
            alignItems="start"
            justifyContent="center"
            px={{ base: 4, md: 8, lg: 20 }}
            py={24}
            zIndex={3}
          >
            <chakra.span
              color="brand.600"
              _dark={{ color: "gray.300" }}
              fontSize="lg"
              textTransform="uppercase"
              fontWeight="extrabold"
            >
              Award winning support
            </chakra.span>
            <chakra.h1
              mb={4}
              fontSize={{ base: "4xl", md: "4xl", lg: "5xl" }}
              fontWeight="bold"
              color="brand.600"
              _dark={{ color: "gray.300" }}
              lineHeight="shorter"
              textShadow="2px 0 currentcolor"
            >
              We&apos;re here to help
            </chakra.h1>
            <chakra.p
              pr={{ base: 0, lg: 16 }}
              mb={4}
              fontSize="lg"
              color="brand.600"
              _dark={{ color: "gray.400" }}
              letterSpacing="wider"
            >
              Get the #1 Business Messenger and start delivering personalized
              experiences at every stage of the customer journey.
            </chakra.p>
          </Flex>
        </>

        <>
          <Container
            bgImage="url('https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80')"
            maxW="full"
            mt={0}
            centerContent
            overflow="hidden"
          >
            <Flex>
              <Box
                bg="#02054B"
                color="white"
                borderRadius="lg"
                m={{ sm: 4, md: 16, lg: 10 }}
                p={{ sm: 5, md: 5, lg: 16 }}
              >
                <Box p={4}>
                  <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                    <WrapItem>
                      <Box>
                        <Heading>Contact</Heading>
                        <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                          Fill up the form below to contact
                        </Text>
                        <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                          <VStack pl={0} spacing={3} alignItems="flex-start">
                            <Button
                              size="md"
                              height="48px"
                              width="100%"
                              variant="ghost"
                              color="#DCE2FF"
                              _hover={{ border: "2px solid #fff" }}
                              leftIcon={<MdPhone color="#1970F1" size="20px" />}
                            >
                              077 482 3300 | 071 111 0362 | 071 478 9787
                            </Button>
                            <Button
                              size="md"
                              height="48px"
                              width="100%"
                              variant="ghost"
                              color="#DCE2FF"
                              _hover={{ border: "2px solid #fff" }}
                              leftIcon={<MdEmail color="#1970F1" size="20px" />}
                            >
                              silecsrilanka@gmail.com
                            </Button>
                            <Button
                              size="md"
                              height="48px"
                              width="100%"
                              variant="ghost"
                              color="#DCE2FF"
                              _hover={{ border: "2px solid #fff" }}
                              leftIcon={
                                <MdLocationOn color="#1970F1" size="20px" />
                              }
                            >
                              SILEC, Athurugiriya, Sri Lanka
                            </Button>
                          </VStack>
                        </Box>
                        <HStack
                          mt={{ lg: 10, md: 10 }}
                          spacing={5}
                          px={5}
                          alignItems="flex-start"
                        >
                          <IconButton
                            aria-label="facebook"
                            variant="ghost"
                            size="lg"
                            isRound={true}
                            _hover={{ bg: "#0D74FF" }}
                            icon={<MdFacebook size="28px" />}
                          />
                          <IconButton
                            aria-label="github"
                            variant="ghost"
                            size="lg"
                            isRound={true}
                            _hover={{ bg: "#0D74FF" }}
                            icon={<BsGithub size="28px" />}
                          />
                          <IconButton
                            aria-label="discord"
                            variant="ghost"
                            size="lg"
                            isRound={true}
                            _hover={{ bg: "#0D74FF" }}
                            icon={<BsLinkedin size="28px" />}
                          />
                        </HStack>
                      </Box>
                    </WrapItem>
                    <WrapItem>
                      <Box bg="white" borderRadius="lg">
                        <Box m={8} color="#0B0E3F">
                          <VStack spacing={5}>
                            <FormControl id="name" isRequired>
                              <FormLabel>Your Name</FormLabel>
                              <InputGroup borderColor="#E0E1E7" value={name}  onChange={(e) => setName(e.target.value)} >
                                <InputLeftElement
                                  pointerEvents="none"
                                  children={<BsPerson color="gray.800" />}
                                />
                                <Input type="text" size="md" />
                              </InputGroup>
                            </FormControl>
                            <FormControl id="name" isRequired>
                              <FormLabel>Mail</FormLabel>
                              <InputGroup borderColor="#E0E1E7">
                                <InputLeftElement
                                  pointerEvents="none"
                                  children={<MdOutlineEmail color="gray.800" />}
                                />
                                <Input type="text" size="md" />
                              </InputGroup>
                            </FormControl>
                            <FormControl id="name" isRequired>
                              <FormLabel>Message</FormLabel>
                              <Textarea
                                borderColor="gray.300"
                                _hover={{
                                  borderRadius: "gray.300",
                                }}
                                placeholder="message"
                              />
                            </FormControl>
                            <FormControl id="name" float="right">
                              <Button
                                variant="solid"
                                bg="#0D74FF"
                                color="white"
                                _hover={{}}
                              >
                                Send Message
                              </Button>
                            </FormControl>
                          </VStack>
                        </Box>
                      </Box>
                    </WrapItem>
                  </Wrap>
                </Box>
              </Box>
            </Flex>
          </Container>
        </>
        <SmallCentered />
      </>
    </>
  );
};

export default Contact;
