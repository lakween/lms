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
import { useNavigate, Redirect } from "react-router-dom";
import {getAllClasses, getAllCourses} from "../../web/actions/course.actions";
import Card from "../../web/common/component/card";

function SmallCentered() {
    return null;
}

const AllClass = () => {
    let navigate = useNavigate();
    const [input, setInput] = useState("");
    const [course, setCourse] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        get();
    }, []);

    async function get() {
        let res = await dispatch(getAllClasses());
        setCourse(res || []);
    }


    const bg = useColorModeValue("white", "gray.800");

    // if(course.length == '0'){
    //   navigate("/login");
    // }

    return (
        <>
            <>
                <section className="page-header">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8 col-xl-8">
                                <div className="title-block">
                                    <h1>Classess</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-padding page">
                    <div className="container">
                        <div className="row justify-content-center">
                            {course.map((item) => (
                                <div key={item.id} className="col-xl-4 col-lg-4 col-md-6">
                                    <Card
                                        name={item.title}
                                        price={item.class_fee}
                                        category={"English"}
                                        level={"Beginner"}
                                        id={item.id}
                                        type={"class"}
                                    ></Card>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </>
            <>
                <SmallCentered />
            </>
        </>
    );
};

export default AllClass;
