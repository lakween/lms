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
  ListGroup,
  ListGroupItem,
  Badge,
} from "reactstrap";
import { getDocFromCollection } from "../../common/common-action/common-action";
import { useNavigate, useParams } from "react-router-dom";
import DocumentMarkup from "./components/document-markup.component";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import ExamMarkupComponent from "./components/exam-markup.component";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const CourseOverview = () => {
  const { transcript, resetTranscript } = useSpeechRecognition();

  useEffect(() => {
    SpeechRecognition.startListening({ continuous: true });
    console.log("start lisrnting");
  }, []);

  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [course, setCourse] = useState({});
  const [materials, setMaterials] = useState([]);
  let { id } = useParams();
  console.log(id, "id");

  useEffect(() => {
    getCourse();
  }, [id]);

  async function getCourse() {
    let result = await getDocFromCollection("courses", id);
    setCourse({ ...result });

    let materials = await filterDocsFromCollection("materials", "", [
      ["module", "==", id],
    ]);
    setCourse({ ...result });
    setMaterials([...materials]);

    console.log(materials, "materials");
  }

  const [currentActiveTab, setCurrentActiveTab] = useState("1");

  // Toggle active state for Tab
  const toggle = (tab) => {
    if (currentActiveTab !== tab) setCurrentActiveTab(tab);
  };

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
      <Row className={"mt-2"}>
        <Col sm="12">
          <Card body>
            <CardTitle tag="h5">{course?.title}</CardTitle>
          </Card>
        </Col>
      </Row>
      <Row className={"mt-2"}>
        <Col sm="12">
          <Card body>
            <CardTitle tag="h5">Materials</CardTitle>
          </Card>
        </Col>
      </Row>
      <Row className={"mt-2 mb-2"}>
        <Col sm="12">
          <Tabs
            defaultActiveKey="profile"
            id="fill-tab-example"
            className=""
            fill
          >
            <Tab eventKey="home" title="Documents">
              <DocumentMarkup
                data={materials?.filter((item) => item.materialType == "doc")}
              />
            </Tab>
            <Tab eventKey="profile" title="Exams">
              <ExamMarkupComponent data={[]}></ExamMarkupComponent>
            </Tab>
            <Tab eventKey="longer-tab" title="Self Training">
              {/* self traning session here */}
              <section className="]mt-4 mb-4">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-md-12 mt-4 mb-4">
                      <h1 className="mt-4 mb-4 f-25">
                        Your Patrice Sentences are Below <Badge>New</Badge>
                      </h1>
                      <ListGroup>
                        <ListGroupItem disabled href="#" tag="a">
                          Sri Lanka is a very beautiful country
                          <span className="float-end"> 81%</span>
                        </ListGroupItem>
                        <ListGroupItem href="#" tag="a">
                          most Sri Lankan have their favourite games cricket
                          <span className="float-end"> 81%</span>
                        </ListGroupItem>
                        <ListGroupItem href="#" tag="a">
                          ABC news from the American Television Prime Time news
                          <span className="float-end"> 81%</span>
                        </ListGroupItem>
                        <ListGroupItem href="#" tag="a">
                          Russia will attack the Ukraine and their military
                          <span className="float-end">
                            <button
                              className="btn btn-primary btn-sm mx-2"
                              onClick={SpeechRecognition.startListening({
                                continuous: true,
                              })}
                            >
                              Start
                            </button>
                          </span>
                          power is very high
                        </ListGroupItem>
                      </ListGroup>
                    </div>
                    <div class="col-lg-12">
                      <div class="form-group">
                        <textarea
                          id="message"
                          name="message"
                          cols="30"
                          rows="6"
                          class="form-control"
                          placeholder="Your Message"
                          value={transcript}
                        ></textarea>
                      </div>
                    </div>
                    <div class="col-lg-12 mt-2">
                      <button
                        className="btn btn-primary btn-sm mx-2"
                        onClick={SpeechRecognition.startListening({
                          continuous: true,
                        })}
                      >
                        Start
                      </button>
                      <button
                        className="btn btn-primary btn-sm mx-2"
                        onClick={(e) => {
                          e.preventDefault();
                          SpeechRecognition.stopListening();
                          console.log("listening stops");
                        }}
                      >
                        Stop
                      </button>
                      <button
                        className="btn btn-primary btn-sm mx-2"
                        onClick={resetTranscript}
                      >
                        Clear text
                      </button>
                    </div>
                  </div>
                </div>
              </section>
            </Tab>
            <Tab eventKey="contact" title="Videos"></Tab>
          </Tabs>
        </Col>
      </Row>
    </>
  );
};

export default CourseOverview;
