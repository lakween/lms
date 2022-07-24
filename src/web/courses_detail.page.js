import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  chakra,
  Box,
  useColorModeValue,
  Flex,
  IconButton,
  SimpleGrid,
  Heading,
  Button,
  Stack,
  Icon,
  Container,
} from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import {
  query,
  orderBy,
  collection,
  doc,
  updateDoc,
  increment,
  getDocs,
  where,
} from "firebase/firestore";
import firebase from "firebase/compat/app";

import CourseDetails from "./common/component/course_details.compo";
import HeaderNav from "./common/header/navbar.page";
import SmallCentered from "./common/footer/footer.page";


export const singleCourseDetail = (param) => { 
   
  return async (dispatch) => {    
    const courseid = param.id;
    const db = firebase.firestore();
    let array = [];
    const courses = collection(db, "courses");
    const q = query(
      courses,
      where(
        firebase.firestore.FieldPath.documentId(),
        "==",
        courseid
      )
    );
    const querySnapshot = await getDocs(q);
    for (let doc of querySnapshot.docs) {
      array.push({ ...doc.data(), id: doc.id });
    }
    return array;
  };
};

const Courses = () => {
  const param = useParams();
  const [input, setInput] = useState("");
  const [courseDetails, setCourseDetails] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    getCourseDetails();
  }, []);

  async function getCourseDetails() {
    let res = await dispatch(singleCourseDetail(param));
    setCourseDetails(res || []);
  }

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
      {courseDetails.map((item) => (   
        <CourseDetails
        title={item.title}
        fee={item.fee}
        desc={item.description}  
        ></CourseDetails>
        ))}
      </>

      <>
        <SmallCentered />
      </>
    </>
  );
};

export default Courses;
