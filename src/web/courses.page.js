import React, { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux";
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
import {query, orderBy, collection, doc, updateDoc, increment, getDocs} from "firebase/firestore";
import firebase from "firebase/compat/app";

import CourseCard from "./common/component/course_card.compo";
import HeaderNav from "./common/header/navbar.page";
import SmallCentered from "./common/footer/footer.page";
import {getAllCourses} from "./actions/course.actions";


const Courses = () => {
  const [input, setInput] = useState('');
  const [course, setCourse] = useState([]);
  const dispatch = useDispatch()

  useEffect(() => { 

    get()
    // firebase.firestore().collection('courses').get().then((querySnapshot) => {      
    //   querySnapshot.forEach(snapshot => {
    //       let data = snapshot.data();
    //       console.log(data);
    //       setCourse(data);
    //   });
    // }); 
  }, []);

  async function get(){
    let res = await dispatch(getAllCourses())
    console.log(res);
    setCourse(res || [])
  }



  
  const bg = useColorModeValue("white", "gray.800");

  // const gelAllCourses = () => {
  //   firebase.firestore().collection('courses').get().then((querySnapshot) => {      
  //     querySnapshot.forEach(snapshot => {
  //         let data = snapshot.data();
  //         console.log(data.description);
  //         array.push({data, id: data.id});       
  //     });
  //     return array;
  //   }); 
  // }

   


  return (
    <>
      <HeaderNav />

      <>
        <Container maxW='7xl' bg='gray.50'> 
        <Flex>  
      
          {
            course.map((item)=>(<CourseCard name={item.title} imageURL="https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80"/>))
          } 
            {/* <CourseCard              
              isNew="true"
              imageURL="https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80"
              name="ENGLISH COURSE"
              price="4.5"
              rating="4.2"
              numReviews="34"
            ></CourseCard>
            <CourseCard
              isNew="true"
              imageURL="https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80"
              name="Entrepreneurship"
              price="4.5"
              rating="4.2"
              numReviews="34"
            ></CourseCard>
            <CourseCard
              isNew="true"
              imageURL="https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80"
              name="Combined Maths"
              price="4.5"
              rating="4.2"
              numReviews="34"
            ></CourseCard>   
            <CourseCard
              isNew="true"
              imageURL="https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80"
              name="Combined Maths"
              price="4.5"
              rating="4.2"
              numReviews="34"
            ></CourseCard>    */}
            </Flex>
        </Container>
      </>

      <>
        <SmallCentered />
      </>
    </>
  );
};

export default Courses;

