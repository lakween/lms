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
  Image
} from "@chakra-ui/react";

export default function BasicUsage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
