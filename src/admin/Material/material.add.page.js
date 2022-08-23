import React from "react";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {
    FormGroup,
    Label,
    Input,
    Row,
    Col,
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button,
    BreadcrumbItem,
    Breadcrumb,
} from "reactstrap";
import useFormController from "../../hooks/useFormController";

const MaterialAdd = () => {
    let navigate = useNavigate();
    const [selectedOption, setSelectedOption] = useState("video");
    const [valueChangeHandler, setValue, form, setForm] = useFormController()

    console.log(form, 'form')

    let materialVideoMarkup = (
        <div>
            <FormGroup>
                <Label>Video Name</Label>
                <Input
                    id="email"
                    name="email"
                    placeholder="with a placeholder"
                    onChange={valueChangeHandler}
                    type="Email"
                />
            </FormGroup>
            <FormGroup>
                <Label>Video URL</Label>
                <Input
                    id="password"
                    name="password"
                    placeholder="password placeholder"
                    onChange={valueChangeHandler}
                    type="text"
                />
            </FormGroup>
            <FormGroup>
                <Label for="exampleUrl">Video from Files</Label>
                <Input
                    id="path"
                    name="path"
                    placeholder="url placeholder"
                    type="file"
                />
            </FormGroup>
        </div>
    )

    let materialSelfMarkUp = (
        <div>
            <FormGroup>
                <Label>Material Name</Label>
                <Input
                    id="exampleEmail"
                    name="email"
                    placeholder="with a placeholder"
                    onChange={valueChangeHandler}
                    type="Text"
                />
            </FormGroup>
            <FormGroup>
                <Label>Files</Label>
                <Input
                    id="path"
                    name="path"
                    placeholder="file"
                    type="file"
                />
            </FormGroup>
        </div>
    )

    let materialDocMarkUp = (
        <div>
            <FormGroup>
                <Label>Document Name</Label>
                <Input
                    id="documentName"
                    name="documentName"
                    placeholder="document Name"
                    onChange={valueChangeHandler}
                    type="Text"
                />
            </FormGroup>
            <FormGroup>
                <Label>Files</Label>
                <Input
                    id="path"
                    name="path"
                    placeholder="url placeholder"
                    type="file"
                />
            </FormGroup>
        </div>
    )

    let materialExam = (
        <div>
            <FormGroup>
                <Label>Exam Name</Label>
                <Input
                    id="examName"
                    name="examName"
                    placeholder="exam name"
                    onChange={valueChangeHandler}
                    type="Text"
                />
            </FormGroup>
            <FormGroup>
                <Label>Files</Label>
                <Input
                    id="path"
                    name="path"
                    placeholder="url placeholder"
                    type="file"
                />
            </FormGroup>
        </div>
    )

    let markUps = {
        video: materialVideoMarkup,
        self: materialSelfMarkUp,
        doc: materialDocMarkUp,
        exam: materialExam
    }

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
                                            id="materialType"
                                            name="materialType"
                                            type="select"
                                            onChange={valueChangeHandler}
                                        >
                                            <option value="video">Video Lesson</option>
                                            <option value="self">Self Traning Session</option>
                                            <option value="doc">Document</option>
                                            <option value="exam">Exam</option>
                                        </Input>

                                    </FormGroup>
                                </Col>
                                <Col md="6">
                                    <Label>Module type</Label>
                                    <Input
                                        id="moduleType"
                                        name="moduleType"
                                        type="select"
                                        onChange={valueChangeHandler}
                                    >
                                        <option value="class">Class</option>
                                        <option value="course">Course</option>
                                    </Input>
                                </Col>
                            </Row>
                            {markUps[form['materialType']]}
                            <Button color="primary">Save</Button>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </>
    );
};

export default MaterialAdd;
