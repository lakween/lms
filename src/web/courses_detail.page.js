import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { chakra, useColorModeValue, Flex, Icon } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { query, collection, getDocs, where } from "firebase/firestore";
import firebase from "firebase/compat/app";

import ClassContent from "./common/component/class.content.page";
import HeaderNav from "./common/header/navbar.page";
import SmallCentered from "./common/footer/footer.page";

export const singleClassDetail = (param) => {
  return async (dispatch) => {
    const classID = param.id;
    const db = firebase.firestore();
    let array = [];
    const classes = collection(db, "classes");
    const q = query(
      classes,
      where(firebase.firestore.FieldPath.documentId(), "==", classID)
    );
    const querySnapshot = await getDocs(q);
    for (let doc of querySnapshot.docs) {
      array.push({ ...doc.data(), id: doc.id });
    }
    return array;
  };
};

const Class = () => {
  const param = useParams();
  const [input, setInput] = useState("");
  const [classDetails, setClassDetails] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    getClassDetails();
  }, []);

  async function getClassDetails() {
    let res = await dispatch(singleClassDetail(param));
    setClassDetails(res || []);
  }

  const bg = useColorModeValue("white", "gray.800");

  return (
    <>
      <HeaderNav />

      <>
        {classDetails.map((item) => (
          <ClassContent
            key="{item}"
            title={item.title}
            fee={item.class_fee}
            desc={item.description}
            cid={item.id}
          ></ClassContent>
        ))}
      </>

      <>
        <SmallCentered />
      </>
    </>
  );
};

export default Class;
