import MainCard from "./components/main-card.component";
import {Center, useColorModeValue, Wrap, WrapItem} from "@chakra-ui/react";
import CourseCardComponent from "./components/course-card.component";

const HomePage = () => {

    return (
        <MainCard maxHeight={'88vh'}>
            <CourseCardComponent/>
            <CourseCardComponent/>
            <CourseCardComponent/>
            <CourseCardComponent/>
            <CourseCardComponent/>
            <CourseCardComponent/>
            <CourseCardComponent/>
        </MainCard>

    )
}

export default HomePage