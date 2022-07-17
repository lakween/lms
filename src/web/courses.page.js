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
import { useNavigate } from "react-router-dom";

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

  return (
    <>
      <HeaderNav />

      <>
        <Container maxW="7xl" bg="gray.50">
          <SimpleGrid columns={[2, null, 4]} spacing="5px">
            {course.map((item) => (
              <Box
                onClick={() => {
                  navigate("/cosdetails/"+item.id);
                }}
              >
                <CourseCard
                  name={item.title}
                  imageURL="https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80"
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
