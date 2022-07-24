import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Text,
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
  Stack,
  Image,
  Heading,
} from "@chakra-ui/react";
import { useState } from "react";

export default function BasicUsage() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [input, setInput] = useState("");

  const handleInputChange = (e) => setInput(e.target.value);

  const isError = input === "";
  return (
    <>
      <Button onClick={onOpen}>Course Payment</Button>

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
                      name="st_name"
                      id="st_name"
                    />
                  </FormControl>
                  <FormControl mt={4}>
                    <FormLabel>Slip</FormLabel>
                    <Input
                      placeholder="Upload Your Bank Pay Slip"
                      type={"file"}
                      name="file"
                      id="file"
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
                      />
                    </FormControl>
                    <FormControl isInvalid={isError}>
                      <FormLabel>Card Number</FormLabel>
                      <Input
                        type="number"
                        value={input}                        
                        onChange={handleInputChange}
                      />
                      {!isError ? (
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
                        <Input placeholder="First name" type={"date"}/>
                      </FormControl>
                      <FormControl isRequired>
                        <FormLabel>CSV Pin</FormLabel>
                        <Input placeholder="ex: 9xx" type={"number"} limit="3"/>
                      </FormControl>
                    </Stack>
                  </Stack>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue">Proceess Next</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
