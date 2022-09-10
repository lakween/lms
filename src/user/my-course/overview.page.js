import { useEffect, useState } from "react";
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
import {useNavigate, useParams} from "react-router-dom";
import {CardText} from "react-bootstrap-icons";
import {Col, Row} from "react-bootstrap";

const CourseOverview = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [course, setCourse] = useState({});
  const [materials, setMaterials] = useState([]);
  let { id } = useParams()
  console.log(id,'id')

  useEffect(() => {
    getCourse();
  }, [id]);

  async function getCourse() {
   let result = await getDocFromCollection('courses',id)
    setCourse({...result})

    let materials = await filterDocsFromCollection('materials','',[['moduleType','==',id]])
    setCourse({...result})
    setMaterials([...materials])

    console.log(materials,'materials')
  }
  return (
    <div>
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
      <Row className={'mt-2'}>
        <Col sm="12">
          <Card body>
            <CardTitle tag="h5">
                {course?.title}
            </CardTitle>
          </Card>
        </Col>
      </Row>
      <Row className={'mt-2'}>
        <Col sm="12">
          <Card body>
            <CardTitle tag="h5">
              Title
            </CardTitle>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default CourseOverview;
