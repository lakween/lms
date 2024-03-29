import MainCard from "./components/main-card.component";
import {
  Col,
  Row,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Table,
} from "reactstrap";
import TopCards from "./components/TopCards";
import Blog from "./components/Blog";
import CourseCardComponent from "./components/course-card.component";
import { useEffect, useState } from "react";
import { filterDocsFromCollection } from "../../common/common-action/common-action";
import { useDispatch } from "react-redux";
import { getAllCourses, increaseCountofCourse } from "./actions/home.action";
import bg1 from "../../assets/images/bg/bg1.jpg";
import useUserLoginInfo from "../../hooks/useUserLoginInfo";
import {useNavigate} from "react-router-dom";
const HomePage = () => {
  const dispatch = useDispatch();
  const navigator = useNavigate()
  const [courses, setCourses] = useState([]);
  const [userType, status, user] = useUserLoginInfo();

  useEffect(() => {
    getCourses();
  }, []);

  async function getCourses() {
    let courseByStudent = await filterDocsFromCollection(
      "courseByStudent",
      "CourseID",
      [
        ["StudentID", "==", user?.uid],
        ["isPaid", "==", "true"],
      ]
    );
    let courses = await getAllCourses(courseByStudent);
    setCourses(courses);
    console.log(courses);
  }

  const abc = () => {
    console.log('ssdsdsd')
  }

  const onClickHandler = async (id) => {
    await increaseCountofCourse(id);
  };

  return (
    <>
      {/***Top Cards***/}
      <Row>
        <Col sm="6" lg="3">
          <TopCards
            bg="bg-light-success text-success"
            title="Profit"
            subtitle="Total Videos"
            earning="10"
            icon="bi bi-wallet"
          />
        </Col>
        <Col sm="6" lg="3">
          <TopCards
            bg="bg-light-danger text-danger"
            title="Refunds"
            subtitle="Total Exams"
            earning="15"
            icon="bi bi-coin"
          />
        </Col>
        <Col sm="6" lg="3">
          <TopCards
            bg="bg-light-warning text-warning"
            title="New Project"
            subtitle="Announcement"
            earning="1"
            icon="bi bi-basket3"
          />
        </Col>
        <Col sm="6" lg="3">
          <TopCards
            bg="bg-light-info text-into"
            title="Sales"
            subtitle="Self Traning"
            earning="5"
            icon="bi bi-bag"
          />
        </Col>
      </Row>
      <Card className="mt-5">
        <CardBody>
          <CardTitle tag="h5">Recently Accessed Courses</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Overview of the courses
          </CardSubtitle>
          <Row>
            {courses.map((course, index) => {
              if (index <= 4) {
                return (
                  <Col sm="6" lg="6" xl="4" key={index}>
                    <Blog
                      image={course?.img ? course.img : 'https://media.istockphoto.com/photos/laptop-computer-with-books-pen-and-yellow-legal-pad-picture-id92259124?b=1&k=20&m=92259124&s=170667a&w=0&h=6_eHLehWQdrhysXf8c1d3Zae3uTrKLhjMTNpdk5RSj4='}
                      title={course?.title}
                      subtitle={course?.id}
                      text={course?.description}
                      color="primary"
                      btnAction= {course.courseID ? "/my-courses/overview/"+ course.courseID  : "overview/4oAjEp4AIpSXhAK1m8Vz"}
                    />
                  </Col>
                );
              } else {
                return;
              }
            })}
          </Row>
        </CardBody>
      </Card>
      <Card className="mt-4">
        <CardBody>
          <CardTitle tag="h5">All Courses</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Overview of the courses
          </CardSubtitle>
          <Row>
            {courses.map((course) => (
              <Col sm="6" lg="6" xl="4" key={course}  >
                <Blog
                  id={course?.id}
                  title={course?.title}
                  subtitle={course?.id}
                  text={course?.description}
                  image={course?.img ? course.img : "https://media.istockphoto.com/photos/laptop-computer-with-books-pen-and-yellow-legal-pad-picture-id92259124?b=1&k=20&m=92259124&s=170667a&w=0&h=6_eHLehWQdrhysXf8c1d3Zae3uTrKLhjMTNpdk5RSj4="}
                  color="primary"
                  btnAction={course.courseID ? "/my-courses/overview/"+ course.courseID  : "overview/4oAjEp4AIpSXhAK1m8Vz"}
                />
              </Col>
            ))}
          </Row>
        </CardBody>
      </Card>
    </>
  );
};

export default HomePage;
