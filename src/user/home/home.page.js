import MainCard from "./components/main-card.component";
import CourseCardComponent from "./components/course-card.component";
import {useEffect, useState} from "react";
import {filterDocsFromCollection,} from "../../common/common-action/common-action";
import {useDispatch} from "react-redux";
import {getAllCourses, increaseCountofCourse} from "./actions/home.action";

const HomePage = () => {
    const dispatch = useDispatch()
    const [courses, setCourses] = useState([])

    useEffect(() => {
        getCourses()
    }, [])

    async function getCourses() {
        let courseByStudent = await dispatch(filterDocsFromCollection('courseByStudent',
            'CourseID', [["StudentID", "==", "dedkzbpbWPd1aQfvaGDN3Zn3DgW2"],["isPaid", "==", true]]))
        let courses = await dispatch(getAllCourses(courseByStudent))
        setCourses(courses)
    }

    const onClickHandler = async (id) => {
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
                                        title={course?.title}
                                        description={course?.description} img={''}
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
                        <CourseCardComponent id={course?.id} title={course?.title}
                                             description={course?.description}
                                             onClick={onClickHandler} img={''}/>))
                }
            </MainCard>
        </>

    )
}

export default HomePage