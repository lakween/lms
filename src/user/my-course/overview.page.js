import {useEffect, useState} from "react";
import {filterDocsFromCollection} from "../../common/common-action/common-action";
import {useDispatch} from "react-redux";
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
import {getDocFromCollection} from "../../common/common-action/common-action";
import {useNavigate, useParams} from "react-router-dom";
import DocumentMarkup from "./components/document-markup.component";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Row} from "react-bootstrap";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ExamMarkupComponent from "./components/exam-markup.component";
import SelfTrainningMarkupComponent from "./components/self-trainning-markup.component";
import VideoMarkupComponent from "./components/video-markup.component";

const CourseOverview = () => {
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const [course, setCourse] = useState({});
    const [materials, setMaterials] = useState([]);
    let {id} = useParams()
    console.log(id, 'id')

    useEffect(() => {
        getCourse();
    }, [id]);

    async function getCourse() {
        let result = await getDocFromCollection('courses', id)
        setCourse({...result})

        let materials = await filterDocsFromCollection('materials', '', [['module', '==', id]])
        setCourse({...result})
        setMaterials([...materials])

        console.log(materials, 'materials')
    }

    const [currentActiveTab, setCurrentActiveTab] = useState('1');

    // Toggle active state for Tab
    const toggle = tab => {
        if (currentActiveTab !== tab) setCurrentActiveTab(tab);
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
                            Materials
                        </CardTitle>
                    </Card>
                </Col>
            </Row>
            <Row className={'mt-2 mb-2'}>
                <Col sm="12">
                <Tabs
                    defaultActiveKey="profile"
                    id="fill-tab-example"
                    className=""
                    fill

                >
                    <Tab eventKey="home" title="Documents">
                      <DocumentMarkup data={materials?.filter((item)=>(item.materialType=='doc'))}/>
                    </Tab>
                    <Tab eventKey="profile" title="Exams">
                        <ExamMarkupComponent data={materials?.filter((item)=>(item.materialType=='exam'))}></ExamMarkupComponent>
                    </Tab>
                    <Tab eventKey="longer-tab" title="Self Training">
                        <SelfTrainningMarkupComponent data={materials?.filter((item)=>(item.materialType=='self'))}/>
                    </Tab>
                    <Tab eventKey="contact" title="Videos">
                        <VideoMarkupComponent data={materials?.filter((item)=>(item.materialType=='video'))}/>
                    </Tab>
                </Tabs>
                </Col>
            </Row>

            </>
    );
};

export default CourseOverview;
