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
import useFormController from "../../hooks/useFormController";
import firebase from "firebase/compat/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import useUserLoginInfo from "../../hooks/useUserLoginInfo";
import CheckoutForm from "./component/payment.checkout.compo";

export default function CourseContent(props) {
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
        StudentID: "accounts/" + stuID,
        CourseID: "courses/" + courseID,
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
    setForm("");
  };

  const navigate = useNavigate();

  const signedButtonMarkup = (
    <Button colorScheme="blue" onClick={submitHandler}>
      Proceess Next
    </Button>
  );

  return (
    <>
      <section className="course-page-header  page-header-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-xl-8">
              <div className="course-header-wrapper mb-0 bg-transparent">
                <h1 className="fs-1">{props.title}</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="tutori-course-single tutori-course-layout-3 page-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-5">
              <div className="course-sidebar course-sidebar-3 mt-5 mt-lg-0">
                <div className="course-widget course-details-info ">
                  <div className="course-thumbnail">
                    <img
                      src="assets/images/course/img_02.jpg"
                      alt=""
                      className="img-fluid w-100"
                    />
                  </div>

                  <div className="course-sidebar-details">
                    <div className="price-header">
                      <h2 className="course-price">
                        $120.00 <span>$150</span>
                      </h2>
                      <span className="course-price-badge onsale">39% off</span>
                    </div>
                    <ul className="course-sidebar-list">
                      <li>
                        <div className="d-flex justify-content-between align-items-center">
                          <span>
                            <i className="far fa-sliders-h"></i>Level
                          </span>
                          Beginnner
                        </div>
                      </li>

                      <li>
                        <div className="d-flex justify-content-between align-items-center">
                          <span>
                            <i className="fas fa-play-circle"></i>Lectures
                          </span>
                          2
                        </div>
                      </li>
                      <li>
                        <div className="d-flex justify-content-between align-items-center">
                          <span>
                            <i className="far fa-user"></i>Students
                          </span>
                          20
                        </div>
                      </li>
                      <li>
                        <div className="d-flex justify-content-between align-items-center">
                          <span>
                            <i className="far fa-clock"></i>Duration
                          </span>
                          6 hours
                        </div>
                      </li>
                      <li>
                        <div className="d-flex justify-content-between align-items-center">
                          <span>
                            <i className="far fa-globe"></i>Language
                          </span>
                          English
                        </div>
                      </li>

                      <li>
                        <div className="d-flex justify-content-between align-items-center">
                          <span>
                            <i className="far fa-calendar"></i>Updated{" "}
                          </span>
                          October 15, 2022
                        </div>
                      </li>
                    </ul>

                    <div className="buy-btn">
                      <button className="btn btn-main rounded" onClick={onOpen}>
                        <i className="far fa-shopping-cart me-2"></i> Enroll Course
                      </button>
                    </div>

                    <div className="course-meterial">
                      <h4 className="mb-3">Material Includes</h4>
                      <ul className="course-meterial-list">
                        <li>
                          <i className="fal fa-long-arrow-right"></i>Videos
                        </li>
                        <li>
                          <i className="fal fa-long-arrow-right"></i>Files For
                          Development
                        </li>
                        <li>
                          <i className="fal fa-long-arrow-right"></i>Documentation
                          Files
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-8 col-lg-7">
              <div className="tutori-course-content">
                <nav className="course-single-tabs learn-press-nav-tabs">
                  <div
                    className="nav nav-tabs course-nav"
                    id="nav-tab"
                    role="tablist"
                  >
                    <a
                      className="nav-item nav-link active"
                      id="nav-home-tab"
                      data-bs-toggle="tab"
                      href="#nav-home"
                      role="tab"
                      aria-controls="nav-home-tab"
                      aria-selected="true"
                    >
                      Overview
                    </a>
                  </div>
                </nav>
                <div
                  className="tab-content tutori-course-content"
                  id="nav-tabContent"
                >
                  <div
                    className="tab-pane fade show active"
                    id="nav-home"
                    role="tabpanel"
                    aria-labelledby="nav-home-tab"
                  >
                    <div className="single-course-details ">
                      <h4 className="course-title">Description</h4>
                      <p>{props.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                  <div className="d-flex align-items-end justify-content-end mt-4">
                    {signedButtonMarkup}
                  </div>
                </TabPanel>
                <TabPanel>
                  <Stack direction="coloum">
                    <Image
                      objectFit="cover"
                      src="https://www.payhere.lk/downloads/images/payhere_square_banner.png"
                      alt="PayHere"
                    />
                  </Stack>
                  <Box>
                    <div className="d-flex align-items-end justify-content-end">
                      <CheckoutForm courseid={courseID} />
                    </div>
                  </Box>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
