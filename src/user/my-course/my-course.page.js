import { useEffect, useState } from "react";
import { filterDocsFromCollection } from "../../common/common-action/common-action";
import { useDispatch } from "react-redux";
import {
  getAllCourses,
  increaseCountofCourse,
} from "../home/actions/home.action";
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  BreadcrumbItem,
  Breadcrumb,
  Row,
  Col,
} from "reactstrap";
import Blog from "../home/components/Blog";
import useUserLoginInfo from "../../hooks/useUserLoginInfo";

const MyCourse = () => {
  const dispatch = useDispatch();
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
    console.log(courses,'course')
    setCourses(courses);
  }

  const onClickHandler = async (id) => {
    await increaseCountofCourse(id);
  };
  return (
    <>
      <section style={{ marginBottom: "15rem" }}>
        <Row>
          <Breadcrumb listTag="div">
            <BreadcrumbItem href="/my-courses" tag="a">
              My Course
            </BreadcrumbItem>
          </Breadcrumb>
          <Col xs="12" md="12">
            {/* --------------------------------------------------------------------------------*/}
            {/* Card-1*/}
            {/* --------------------------------------------------------------------------------*/}
            <Card className="mb-2">
              <CardTitle tag="h6" className="border-bottom p-3 mb-0">
                Course Overview
              </CardTitle>
              <CardBody>
                <Row>
                  {courses.map((course) => (
                    <Col sm="6" lg="6" xl="4" key={course}>
                      <Blog
                        id={course?.id}
                        title={course?.title}
                        subtitle={course?.id}
                        text={course?.description}
                        image={
                          course?.img
                            ? course.img
                            : "https://media.istockphoto.com/photos/laptop-computer-with-books-pen-and-yellow-legal-pad-picture-id92259124?b=1&k=20&m=92259124&s=170667a&w=0&h=6_eHLehWQdrhysXf8c1d3Zae3uTrKLhjMTNpdk5RSj4="
                        }
                        color="primary"
                        btnAction= {course.id ? "overview/"+ course.courseID : "overview/4oAjEp4AIpSXhAK1m8Vz"}
                      />
                    </Col>
                  ))}
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </section>
    </>
  );
};

export default MyCourse;
