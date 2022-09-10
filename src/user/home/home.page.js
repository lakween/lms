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
const HomePage = () => {
  const dispatch = useDispatch();
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getCourses();
  }, []);

  async function getCourses() {
    let courseByStudent = await filterDocsFromCollection(
      "courseByStudent",
      "CourseID",
      [
        ["StudentID", "==", "dedkzbpbWPd1aQfvaGDN3Zn3DgW2"],
        ["isPaid", "==", "true"],
      ]
    );
    let courses = await getAllCourses(courseByStudent);
    setCourses(courses);
    console.log(courses);
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
            subtitle="Yearly Earning"
            earning="$21k"
            icon="bi bi-wallet"
          />
        </Col>
        <Col sm="6" lg="3">
          <TopCards
            bg="bg-light-danger text-danger"
            title="Refunds"
            subtitle="Refund given"
            earning="$1k"
            icon="bi bi-coin"
          />
        </Col>
        <Col sm="6" lg="3">
          <TopCards
            bg="bg-light-warning text-warning"
            title="New Project"
            subtitle="Yearly Project"
            earning="456"
            icon="bi bi-basket3"
          />
        </Col>
        <Col sm="6" lg="3">
          <TopCards
            bg="bg-light-info text-into"
            title="Sales"
            subtitle="Weekly Sales"
            earning="210"
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
              <Col sm="6" lg="6" xl="4" key={course}>
                <Blog
                  id={course?.id}
                  title={course?.title}
                  subtitle={course?.id}
                  text={course?.description}
                  image={course?.img ? course.img : "https://media.istockphoto.com/photos/laptop-computer-with-books-pen-and-yellow-legal-pad-picture-id92259124?b=1&k=20&m=92259124&s=170667a&w=0&h=6_eHLehWQdrhysXf8c1d3Zae3uTrKLhjMTNpdk5RSj4="}
                  color="primary"
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
