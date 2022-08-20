import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { chakra, useColorModeValue, Flex, Icon } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { query, collection, getDocs, where } from "firebase/firestore";
import firebase from "firebase/compat/app";

import CourseDetails from "./common/component/course_details.compo";
import CourseContent from "./common/course.content.page";
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
      where(firebase.firestore.FieldPath.documentId(), "==", courseid)
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

  return (
    <>
      <HeaderNav />

      <>
        {courseDetails.map((item) => (
          <CourseContent
            key="{item}"
            title={item.title}
            fee={item.fee}
            desc={item.description}
            cid={item.id}
          ></CourseContent>
        ))}
      </>

      <>
        <SmallCentered />
      </>
    </>
  );
};

export default Courses;
