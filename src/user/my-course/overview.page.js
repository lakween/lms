import { useEffect, useState, useNavigate } from "react";
import { filterDocsFromCollection } from "../../common/common-action/common-action";
import { useDispatch } from "react-redux";
import {
  getAllCourses,
  increaseCountofCourse,
} from "../home/actions/home.action";
import {
  Card,
  CardBody,
  CardTitle,
  Button,
  BreadcrumbItem,
  Breadcrumb,
} from "reactstrap";
import { getDocFromCollection } from "../../common/common-action/common-action";

const CourseOverview = () => {
  let navigate = useNavigate();
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
  }
  return (
    <>
      <Breadcrumb listTag="div">
        <BreadcrumbItem href="/my-courses" tag="a">
          My Course
        </BreadcrumbItem>
        <BreadcrumbItem href="/overview" tag="a">
          Overview
        </BreadcrumbItem>
      </Breadcrumb>
      <Card className="mt-2">
        <CardBody>
          <div className="d-flex d-flex justify-content-between">
            <CardTitle tag="h5">Overview</CardTitle>
            <Button
              color="primary"
              onClick={() => {
                navigate("/my-courses");
              }}
            >
              Back
            </Button>
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default CourseOverview;
