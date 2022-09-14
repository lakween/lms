import React, { useEffect, useState } from "react";
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
import CheckoutForm from "./payment.checkout.compo";

// firebase extentions
import { getDocs, setDoc, doc, query, where, getDoc } from "firebase/firestore";

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
        StudentID: stuID,
        CourseID: courseID,
        isEnrolled: "true",
        paymentSlip: photoURL,
        payMethod: "slip",
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

  const [payRef, setpayRef] = useState([]);

  const checkPayment = () => {
    return async (dispatch) => {
      let array = [];
      const db = firebase.firestore();
      const q = query(
        collection(db, "courseByStudent"),
        where("StudentID", "==", stuID),
        where("CourseID", "==", courseID)
      );

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        if (doc.data()) {
          const userData = doc.data();
          array.push({ id: doc.id });
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      });
      return array;
    };
  };

  useEffect(() => {
    getCourseDetails();
  }, []);

  async function getCourseDetails() {
    let res = await dispatch(checkPayment());
    setpayRef(res || []);
  }

  const readDataHere = payRef.map((items) => items.id);
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
                      <h2 className="course-price">RS : {props.fee}</h2>
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
                            <i className="far fa-clock"></i>Duration
                          </span>
                          120 hours
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
                    </ul>

                    <div className="buy-btn">
                      {(() => {
                        if (readDataHere.length == 0) {
                          return (
                            <button
                              className="btn btn-main rounded"
                              onClick={onOpen}
                            >
                              <i className="far fa-shopping-cart me-2"></i>
                              Enroll Course
                            </button>
                          );
                        } else {
                          return (
                            <button
                              className="btn btn-primary rounded"
                              onClick={navigate("/my-courses")}
                            >
                              <i class="fas fa-eye me-2"></i>
                              View Course
                            </button>
                          );
                        }
                      })()}
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
                          <i className="fal fa-long-arrow-right"></i>
                          Documentation Files
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-8 col-lg-7">
              <div class="tutori-course-content">
                <nav class="course-single-tabs learn-press-nav-tabs">
                  <div
                    class="nav nav-tabs course-nav"
                    id="nav-tab"
                    role="tablist"
                  >
                    <a
                      class="nav-item nav-link active"
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
                  class="tab-content tutori-course-content"
                  id="nav-tabContent"
                >
                  <div
                    class="tab-pane fade show active"
                    id="nav-home"
                    role="tabpanel"
                    aria-labelledby="nav-home-tab"
                  >
                    <div class="single-course-details ">
                      <h4 class="course-title">Description</h4>
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
