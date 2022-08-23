import React from "react";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {
    Form,
    FormGroup,
    Label,
    Input,
    FormFeedback,
    FormText,
    Row,
    Col,
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button,
    BreadcrumbItem,
    Breadcrumb,
    Table,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
} from "reactstrap";

const MaterialAdd = () => {
    let navigate = useNavigate();

    const [selectedOption, setSelectedOption] = useState("video");

    let materialVideoMarkup = (
        <div>
            <FormGroup>
                <Label for="exampleEmail">Video Name</Label>
                <Input
                    id="exampleEmail"
                    name="email"
                    placeholder="with a placeholder"
                    type="Text"
                />
            </FormGroup>
            <FormGroup>
                <Label for="examplePassword">Video URL</Label>
                <Input
                    id="examplePassword"
                    name="password"
                    placeholder="password placeholder"
                    type="text"
                />
            </FormGroup>
            <FormGroup>
                <Label for="exampleUrl">Video from Files</Label>
                <Input
                    id="exampleUrl"
                    name="url"
                    placeholder="url placeholder"
                    type="file"
                />
            </FormGroup>
        </div>
    )

    let materialSelfMarkUp = (
        <div>
            <FormGroup>
                <Label for="exampleEmail">Material Name</Label>
                <Input
                    id="exampleEmail"
                    name="email"
                    placeholder="with a placeholder"
                    type="Text"
                />
            </FormGroup>
            <FormGroup>
                <Label for="exampleUrl">Files</Label>
                <Input
                    id="exampleUrl"
                    name="url"
                    placeholder="url placeholder"
                    type="file"
                />
            </FormGroup>
        </div>
    )

    let materialDocMarkUp = (
        <div>
            <FormGroup>
                <Label for="exampleEmail">Document Name</Label>
                <Input
                    id="exampleEmail"
                    name="email"
                    placeholder="with a placeholder"
                    type="Text"
                />
            </FormGroup>
            <FormGroup>
                <Label for="exampleUrl">Files</Label>
                <Input
                    id="exampleUrl"
                    name="url"
                    placeholder="url placeholder"
                    type="file"
                />
            </FormGroup>
        </div>
    )

    let materialExam = (
        <div>
            <FormGroup>
                <Label for="exampleEmail">Exam Name</Label>
                <Input
                    id="exampleEmail"
                    name="email"
                    placeholder="with a placeholder"
                    type="Text"
                />
            </FormGroup>
            <FormGroup>
                <Label for="exampleUrl">Files</Label>
                <Input
                    id="exampleUrl"
                    name="url"
                    placeholder="url placeholder"
                    type="file"
                />
            </FormGroup>
        </div>
    )

    return (
        <>
            <Breadcrumb listTag="div">
                <BreadcrumbItem href="/home" tag="a">
                    Home
                </BreadcrumbItem>
                <BreadcrumbItem href="/material" tag="a">
                    Material
                </BreadcrumbItem>
                <BreadcrumbItem href="/material/add" tag="a">
                    Material Add
                </BreadcrumbItem>
            </Breadcrumb>
            <Card className="mt-2">
                <CardBody>
                    <div className="d-flex d-flex justify-content-between">
                        <CardTitle tag="h5">Add New Material</CardTitle>
                        <Button
                            color="primary"
                            onClick={() => {

                                navigate("/material");
                            }}
                        >
                            Back
                        </Button>
                    </div>
                    <CardSubtitle
                        className="mb-2 text-muted text-weight-bold"
                        tag="h6"
                    ></CardSubtitle>
                    <Row>
                        <Col lg="12" md="12" className="mt-4">
                            <Row>
                                <Col md="6">
                                    <FormGroup>
                                        <Label for="exampleSelect">Select Material type</Label>
                                        <Input
                                            id="exampleSelect"
                                            name="select"
                                            type="select"
                                            onChange={(event) =>
                                                setSelectedOption(event.target.value)
                                            }
                                        >
                                            <option value="video">Video Lesson</option>
                                            <option value="self">Self Traning Session</option>
                                            <option value="doc">Document</option>
                                            <option value="exam">Exam</option>
                                        </Input>

                                    </FormGroup>
                                </Col>
                                <Col md="6">
                                    <Label for="exampleSelect">Select Material type</Label>
                                    <Input
                                        id="exampleSelect"
                                        name="select"
                                        type="select"
                                        onChange={(event) =>
                                            setSelectedOption(event.target.value)
                                        }
                                    >
                                        <option value="video">Video Lesson</option>
                                        <option value="self">Self Traning Session</option>
                                        <option value="doc">Document</option>
                                        <option value="exam">Exam</option>
                                    </Input>
                                </Col>
                            </Row>
                            { selectedOption == "video" && materialVideoMarkup}
                            { selectedOption == "self" && materialSelfMarkUp}
                            { selectedOption == "doc" && materialDocMarkUp}
                            { selectedOption == "exam" && materialExam}
                            <Button color="primary">Save</Button>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </>
    );
};

export default MaterialAdd;
