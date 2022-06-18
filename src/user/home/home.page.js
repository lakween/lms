import MainCard from "./components/main-card.component";
import {Center, useColorModeValue, Wrap, WrapItem} from "@chakra-ui/react";
import CourseCardComponent from "./components/course-card.component";
import {useEffect, useState} from "react";
import {getAllDocFromCollection} from "../../common/common-action/common-action";
import {useDispatch} from "react-redux";

const HomePage = () => {
    const dispatch = useDispatch()
    const [courses,setCourses] = useState([])

    useEffect(()=>{
        getCourses()
    },[])

   async function getCourses(){
       let res = await dispatch(getAllDocFromCollection('courses'))
       console.log(res,'res')
       setCourses(res)
    }

    return (
        <MainCard minHeight={'100%'}>
            {
                courses.map((course)=>( <CourseCardComponent title={course.title} description={course.description} img={''}/>))
            }
        </MainCard>

    )
}

export default HomePage