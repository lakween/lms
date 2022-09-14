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
import AnnouncementMarkupComponent from "./components/announcement-markup.component";
import VideoMarkupComponent from "./components/video-markup.component";
import useUserLoginInfo from "../../hooks/useUserLoginInfo";
import {Skeleton, SkeletonCircle, SkeletonText} from '@chakra-ui/react'

const CourseOverview = () => {
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const [course, setCourse] = useState({});
    const [materials, setMaterials] = useState([]);
    const [userType, status, user] = useUserLoginInfo();
    const [accept, setAccept] = useState('')
    let {id} = useParams()

    useEffect(() => {
        getCourse();
    }, [id]);

    async function getCourse() {
        let result = await getDocFromCollection('courses', id)
        setCourse({...result})

        let materials = await filterDocsFromCollection('materials', '', [['module', '==', id]])
        setCourse({...result})
        setMaterials([...materials])

        let courseByStudent = await filterDocsFromCollection(
            "courseByStudent",
            "CourseID",
            [
                ["CourseID", "==", id],
                ["StudentID", "==", user?.uid],
            ]
        );
        setAccept(courseByStudent[0]?.is_accept)
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
            {accept ? <Row className={'mt-2 mb-2'}>
                <Col sm="12">
                    <Tabs
                        defaultActiveKey="profile"
                        id="fill-tab-example"
                        className=""
                        fill

                    >
                        <Tab eventKey="home" title="Documents">
                            <DocumentMarkup data={materials?.filter((item) => (item.materialType == 'doc'))}/>
                        </Tab>
                        <Tab eventKey="profile" title="Exams">
                            <ExamMarkupComponent
                                data={materials?.filter((item) => (item.materialType == 'exam'))}></ExamMarkupComponent>
                        </Tab>
                        <Tab eventKey="longer-tab" title="Self Training">
                            <SelfTrainningMarkupComponent
                                data={materials?.filter((item) => (item.materialType == 'self'))}/>
                        </Tab>
                        <Tab eventKey="announcement" title="Announcement">
                            <AnnouncementMarkupComponent
                                data={materials?.filter((item) => (item.materialType == 'announcement'))}/>
                        </Tab>
                        <Tab eventKey="contact" title="Videos">
                            <VideoMarkupComponent data={materials?.filter((item) => (item.materialType == 'video'))}/>
                        </Tab>
                    </Tabs>
                </Col>
            </Row> : accept == '' ? <Row className={'mt-2'}>
                    <Col sm="12">
                        <Card body>
                            <Skeleton height='20px'/>
                        </Card>
                    </Col>
                </Row> :
                <Row className={'mt-2'}>
                    <Col sm="12">
                        <Card body>
                            <CardTitle tag="h5" className={'text-black'}>Your payment is not accept</CardTitle>
                        </Card>
                    </Col>
                </Row>
            }

        </>
    );
};

export default CourseOverview;