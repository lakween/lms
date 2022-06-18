import MainCard from "./components/main-card.component";
import {Center, useColorModeValue, Wrap, WrapItem} from "@chakra-ui/react";
import CourseCardComponent from "./components/course-card.component";
import {useEffect} from "react";
import {getAllDocFromCollection} from "../../common/common-action/common-action";
import {useDispatch} from "react-redux";

const HomePage = () => {
    const dispatch = useDispatch()

    useEffect(()=>{
        getCourses()
    },[])

   async function getCourses(){
       let res = await dispatch(getAllDocFromCollection('courses'))
       console.log(res,'res')
    }

    return (
        <MainCard minHeight={'100%'}>
            <CourseCardComponent title={} description={} img={} />
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