import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  chakra,
  Box,
  useColorModeValue,
  Heading,
  SimpleGrid,
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
import { getAllClasses } from "./actions/course.actions";
import { useNavigate } from "react-router-dom";

const Class = () => {
  let navigate = useNavigate();
  const [input, setInput] = useState("");
  const [classes, setClasses] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    get();
  }, []);

  async function get() {
    let res = await dispatch(getAllClasses());
    setClasses(res || []);
  }

  console.log(classes);
  const bg = useColorModeValue("white", "gray.800");

  return (
    <>
      <HeaderNav />

      <>
        <Container maxW="7xl" bg="gray.50">
          <Heading mb={"2"} p={2}> Classess</Heading>
          <SimpleGrid columns={[2, null, 4]} spacing="5px">
            {classes.map((item) => (
              <Box
                onClick={() => {
                  navigate("/class/" + item.id);
                }}
              >
                <CourseCard name={item.title} imageURL={item.img} />
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

export default Class;
