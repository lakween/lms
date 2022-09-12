import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  chakra,
  Box,
  useColorModeValue,
  Heading,
  SimpleGrid,
  Container,
  Link,
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

import Card from "./common/component/card";
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
  const bg = useColorModeValue("white", "gray.800");

  return (
    <>
      <HeaderNav />

      <>
        <section className="page-header">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-xl-8">
                <div className="title-block">
                  <h1>Classes</h1>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-padding page">
          <div className="container">
            <div className="row justify-content-center">
              {classes.map((item) => (
                <div key={item.id} className="col-xl-4 col-lg-4 col-md-6">
                  <Link
                    onClick={() => {
                      navigate("/class-content/" + item.id);
                    }}
                    _hover={"none"}
                  >
                    <Card
                      name={item.title}
                      price={"150"}
                      category={"LK & EN"}
                      level={"Beginner"}
                      id={item.id}
                    ></Card>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* <Container maxW="7xl" bg="gray.50">
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
        </Container> */}
      </>
      <>
        <SmallCentered />
      </>
    </>
  );
};

export default Class;
