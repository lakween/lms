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
import {
  query,
  orderBy,
  collection,
  doc,
  updateDoc,
  increment,
  getDocs,
} from "firebase/firestore";
import firebase from "firebase/compat/app";

import CourseCard from "./common/component/course_card.compo";
import HeaderNav from "./common/header/navbar.page";
import SmallCentered from "./common/footer/footer.page";
import { getAllCourses } from "./actions/course.actions";
import { useNavigate, Redirect } from "react-router-dom";

const Courses = () => { 

  let navigate = useNavigate();
  const [input, setInput] = useState("");
  const [course, setCourse] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    get();
  }, []);

  async function get() {
    let res = await dispatch(getAllCourses());
    setCourse(res || []);
  }

  const bg = useColorModeValue("white", "gray.800");

  if(course.length == '0'){
    navigate("/login");
  }

  return (
    <>
      <HeaderNav />

      <>
        <Container maxW="7xl" bg="gray.50">
          <Heading mb={"2"} p={2}>
            Courses
          </Heading>
          <SimpleGrid columns={[2, null, 4]} spacing="5px">
            {course.map((item) => (
              <Box
                onClick={() => {
                  navigate("/cosdetails/" + item.id);
                }}
              >
                <CourseCard
                  name={item.title}
                  imageURL="https://www.learnworlds.com/app/uploads/2022/01/teacher-and-student-with-laptop-remote-learning.png"
                />
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </>
      <>
        <SmallCentered />
      </>
    </>
  );
};

export default Courses;
