import MainCard from "./components/main-card.component";
import {Center, useColorModeValue, Wrap, WrapItem} from "@chakra-ui/react";
import CourseCardComponent from "./components/course-card.component";
import {useEffect, useState} from "react";
import {
    filterDocsFromCollection,
    getAllDocFromCollection,
    getRefFieldOnlyFromFilter
} from "../../common/common-action/common-action";
import {useDispatch} from "react-redux";
import {getAllCourses, increaseCountofCourse} from "./actions/home.action";
import {where} from "firebase/firestore";

const HomePage = () => {
    const dispatch = useDispatch()
    const [courses, setCourses] = useState([])

    useEffect(() => {
        getCourses()
    }, [])

    async function getCourses() {
        let allCourses = await dispatch(getRefFieldOnlyFromFilter('courseByStudent',
            'CourseID', [["StudentID", "==", "accounts/dedkzbpbWPd1aQfvaGDN3Zn3DgW2"]]))
        setCourses(allCourses)
    }

    const onClickHandler = async (id) => {
        console.log('clickef')
        await dispatch(increaseCountofCourse(id))
    }

    return (
        <>
            <MainCard innerText={'Recently Access Course'} overflowY={'scroll'} minHeight={'40vh'} maxHeight={'43vh'}>
                {
                    courses.map((course, index) => {
                            if (index <= 4) {
                                return (
                                    <CourseCardComponent
                                        title={course?.CourseID.title}
                                        description={course?.CourseID.description} img={''}
                                    />
                                )
                            } else {
                                return
                            }
                        }
                    )
                }
            </MainCard>

            <MainCard marginTop={5} innerText={'All Courses'}>
                {
                    courses.map((course) => (
                        <CourseCardComponent id={course?.CourseID.id} title={course?.CourseID.title}
                                             description={course?.CourseID.description}
                                             onClick={onClickHandler} img={''}/>))
                }
            </MainCard>
        </>

    )
}

export default HomePage