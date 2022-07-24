import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  useToast,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import useFormController from "../../../hooks/useFormController";
import firebase from "firebase/compat/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import useUserLoginInfo from "../../../hooks/useUserLoginInfo";

export default function CourseDetails(props) {
  let dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  let [valueChangeHandler, setValue, form, setForm] = useFormController();
  const [image, setImage] = useState("");
  const user = useUserLoginInfo();
  const toast = useToast();

  const stuID = user[2].uid;
  const courseID = props.cid;

  const handleImageAsFile = (e) => {
    // Create a root reference

    const image = e.target.files[0];
    setImage((imageFile) => image);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("start of upload");

    const storage = getStorage();
    const fileRef = ref(storage, `userPaymentSlip/${image.name}`);
    const snapshot = await uploadBytes(fileRef, image);
    const photoURL = await getDownloadURL(fileRef);

    if (!form.st_pay_ref & !form.card_number) {
      toast({
        title: "plase try again !",
        description: "Check your card detaile and try again !",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } else {
      const db = firebase.firestore();
      const docRef = await addDoc(collection(db, "courseByStudent"), {
        StudentID: stuID,
        CourseID: courseID,
        isEnrolled: "true",
        paymentSlip: photoURL,
        payMethod: form.st_pay_ref ? "online" : "slip",
        isPaid: "true",
      });
      if (docRef.id) {
        toast({
          title: "Your message has been submitted👍",
          description: "Our representive contact you soon!",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      } else {
        toast({
          title: "Something wrong",
          description: "db error please check your connection",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      }
    }
    setForm({});
    setImage("");
  };

  const navigate = useNavigate();

  const signedButtonMarkup = (
    <Button colorScheme="blue" onClick={submitHandler}>
      Proceess Next
    </Button>
  );

  return (
    <Container maxW={"7xl"}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <Flex>
          <Image
            rounded={"md"}
            alt={"product image"}
            src={
              "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8b25saW5lJTIwbGVhcm5pbmd8ZW58MHx8MHx8&w=1000&q=80"
            }
            fit={"cover"}
            align={"center"}
            w={"100%"}
            h={{ base: "100%", sm: "400px", lg: "500px" }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={"header"}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
            >
              {props.title}
            </Heading>
            <Text
              color={useColorModeValue("gray.900", "gray.400")}
              fontWeight={300}
              fontSize={"2xl"}
            >
              {props.fee}
            </Text>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={"column"}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.200", "gray.600")}
              />
            }
          >
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text fontSize={"lg"}>{props.desc}</Text>
            </VStack>
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("yellow.500", "yellow.300")}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                Features
              </Text>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <List spacing={2}>
                  <ListItem>Writing</ListItem>
                  <ListItem>Reading</ListItem> <ListItem>Speaking</ListItem>
                </List>
                <List spacing={2}>
                  <ListItem>Listening</ListItem>
                  <ListItem>Communication</ListItem>
                  <ListItem>Team work</ListItem>
                </List>
              </SimpleGrid>
            </Box>
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("yellow.500", "yellow.300")}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                Course Details
              </Text>

              <List spacing={2}>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Commitment:
                  </Text>{" "}
                  6 months
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Exam Format:
                  </Text>{" "}
                  All three tests in the suite are designed to test the four
                  core language skills (reading, writing, speaking and
                  listening)
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Scoring:
                  </Text>{" "}
                  Scoring above 50% is pass level.
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Certificate:
                  </Text>{" "}
                  All pass candidates scoring receive a certificate.
                </ListItem>
              </List>
            </Box>
          </Stack>

          <Button
            onClick={onOpen}
            rounded={"none"}
            w={"full"}
            mt={8}
            size={"lg"}
            py={"7"}
            bg={useColorModeValue("gray.900", "gray.50")}
            color={useColorModeValue("white", "gray.900")}
            textTransform={"uppercase"}
            _hover={{
              transform: "translateY(2px)",
              boxShadow: "lg",
            }}
          >
            ENROLL NOW
          </Button>

          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Course Payment</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Tabs>
                  <TabList>
                    <Tab>Upload Payment Slip</Tab>
                    <Tab>Online Payment</Tab>
                  </TabList>
                  <TabPanels>
                    <TabPanel>
                      <FormControl>
                        <FormLabel>Payment Reference Number</FormLabel>
                        <Input
                          placeholder="Upload Your Bank Pay Slip"
                          type="text"
                          name="st_pay_ref"
                          id="st_pay_ref"
                          onChange={valueChangeHandler}
                          value={form.st_pay_ref}
                        />
                      </FormControl>
                      <FormControl mt={4}>
                        <FormLabel>Slip</FormLabel>
                        <Input
                          placeholder="Upload Your Bank Pay Slip"
                          type={"file"}
                          name="file"
                          id="file"
                          onChange={handleImageAsFile}
                        />
                        <FormHelperText>
                          Note : Upload your payment slip here with student Name
                        </FormHelperText>
                      </FormControl>
                    </TabPanel>
                    <TabPanel>
                      <Stack direction="coloum">
                        <Image
                          objectFit="cover"
                          src="https://www.payhere.lk/downloads/images/payhere_square_banner.png"
                          alt="PayHere"
                        />
                      </Stack>
                      <Stack alignItems="center" pt="4">
                        <Heading as="h4" size="md">
                          Add Credit Card
                        </Heading>
                        <FormControl>
                          <FormLabel>Card Holder Name</FormLabel>
                          <Input
                            type="text"
                            name="cardholder_name"
                            id="cardholder_name"
                            placeContent={"David Beckem"}
                            onChange={valueChangeHandler}
                          />
                        </FormControl>
                        <FormControl isInvalid={form.card_number}>
                          <FormLabel>Card Number</FormLabel>
                          <Input
                            type="number"
                            onChange={valueChangeHandler}
                            name="card_number"
                          />
                          {!form.cardName ? (
                            <FormHelperText>
                              Card Verify Checking . . .
                            </FormHelperText>
                          ) : (
                            <FormErrorMessage>
                              creadit card invalid !
                            </FormErrorMessage>
                          )}
                        </FormControl>
                        <Stack spacing={8} direction="row">
                          <FormControl isRequired>
                            <FormLabel>Expiration Date</FormLabel>
                            <Input
                              placeholder="First name"
                              type={"date"}
                              onChange={valueChangeHandler}
                              name="expire_date"
                            />
                          </FormControl>
                          <FormControl isRequired isInvalid={form.csv_pin}>
                            <FormLabel>CSV Pin</FormLabel>
                            <Input
                              placeholder="ex: 9xx"
                              type={"number"}
                              limit="3"
                              onChange={valueChangeHandler}
                              name="csv_pin"
                            />
                            {!form.cardPin ? (
                              <FormHelperText>
                                Card Verify Checking . . .
                              </FormHelperText>
                            ) : (
                              <FormErrorMessage>
                                creadit card invalid !
                              </FormErrorMessage>
                            )}
                          </FormControl>
                        </Stack>
                      </Stack>
                    </TabPanel>
                  </TabPanels>
                </Tabs>
              </ModalBody>

              <ModalFooter>{signedButtonMarkup}</ModalFooter>
            </ModalContent>
          </Modal>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}
