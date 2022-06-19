import MainCard from "./components/main-card.component";
import {Center, useColorModeValue, Wrap, WrapItem} from "@chakra-ui/react";
import CourseCardComponent from "./components/course-card.component";
import {useEffect, useState} from "react";
import {getAllDocFromCollection} from "../../common/common-action/common-action";
import {useDispatch} from "react-redux";
import {getRecentAccCourses,increaseCountofCourse} from "./actions/home.action";

const HomePage = () => {
    const dispatch = useDispatch()
    const [courses,setCourses] = useState([])
    const [recentlyAccCourses,setRecentlyAccCourses] = useState([])

    useEffect(()=>{
        getCourses()
    },[])

   async function getCourses(){
       let allCourses = await dispatch(getAllDocFromCollection('courses'))
       let recentlyAccCourses = await dispatch(getRecentAccCourses())
       setCourses(allCourses)
       setRecentlyAccCourses(recentlyAccCourses)
    }

    const onClickHandler= async (id)=>{
         await increaseCountofCourse(id)
    }

    return (
        <>
        <MainCard innerText={'Recently Access Course'} overflowY={'scroll'} minHeight={'40vh'} maxHeight={'43vh'}>
            {
                recentlyAccCourses.map((course)=>( <CourseCardComponent title={course.title} description={course.description} onClick={onClickHandler} img={''}/>))
            }
        </MainCard>

        <MainCard marginTop={5} innerText={'All Courses'}>
            {
                courses.map((course)=>( <CourseCardComponent id={course.id}  title={course.title} description={course.description} onClick={onClickHandler} img={''}/>))
            }
        </MainCard>
        </>

    )
}

export default HomePage