import React, { useState } from "react";
import firebase from "firebase/compat/app";
import HeaderNav from "../header/navbar.page";
import SmallCentered from "../footer/footer.page";
import { Row, Col, Alert } from "reactstrap";
import { useToast } from "@chakra-ui/react";
import { getDatabase, ref, set } from "firebase/database";
import useUserLoginInfo from "../../../hooks/useUserLoginInfo";
import { useEffect } from "react";
import {
  collection,
  getDocs,
  addDoc,
  setDoc,
  doc,
  query,
  where,
  getDoc,
  orderBy,
  limit,
} from "firebase/firestore";
import { useParams, useNavigate} from "react-router-dom";

const addPayData = async (stuID, courseId) => {
  const db = firebase.firestore();
  const docRef = await addDoc(collection(db, "courseByStudent"), {
    StudentID: stuID,
    CourseID: courseId,
    isEnrolled: "true",
    payMethod: "online",
    isPaid: "true",
  });

  return docRef.id;
};

const PaymentSuccess = () => {
  const [info, setInfo] = useState([]);
  const user = useUserLoginInfo();
  const params = useParams();
  const navigate = useNavigate();
  // get user info

  const courseIDParam = params.id;
  const stuID = user[2].uid;

  // Start the fetch operation as soon as
  // the page loads
  // window.addEventListener("load", () => {

  // });

  const BtnClick = () => {
    Fetchdata();
    if (info.length == 0) {
      console.log("data added");      
      addPayData(stuID, courseIDParam);   
    } else {
      console.log("already data have");
      navigate("/courses");
    }
  }

  // Fetch the required data using the get() method
  const Fetchdata = async () => {
    const db = firebase.firestore();
    const q = query(
      collection(db, "courseByStudent"),
      where("StudentID", "==", stuID),
      where("CourseID", "==", courseIDParam)
    );

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((elemet) => {
      // doc.data() is never undefined for query doc snapshots
      var data = elemet.data();
      setInfo((arr) => [data]);
      console.log(info);
    });
  };

  //you can loop through an array like this:
  // for (var i = 0; i < arrList.length; i++) {
  //   if(courseIDParam == arrList[i].CourseID){
  // console.log("item Found");
  //   }else{
  //     addPayData(stuID, courseIDParam);
  //   }
  // }

  return (
    <>
      <HeaderNav />
      <>
        <div className="mt-5 mb-5 h-100">
          <Row>
            <Col sm="8" className="offset-2">
              <div className="card text-center">
                <div className="card-header">Payment Success</div>
                <div className="card-body">
                  <h5 className="card-title">
                    Congratulations your payment details verification compelete
                    !
                  </h5>
                  <Alert color="success">
                    Hey! Your Payment has been Accepted.
                  </Alert>
                  <button className="btn btn-primary" onClick={BtnClick}> Dashbord </button>
                  <a href="#" >
                    
                  </a>
                </div>
                <div className="card-footer text-muted">2 days ago</div>
              </div>
            </Col>
          </Row>
        </div>
        <SmallCentered />
      </>
    </>
  );
};

export default PaymentSuccess;
