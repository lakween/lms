import React, {useEffect} from "react";
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
import {updateProfilePhoto} from "../../user/student-profile/actions/student-profile.action";
import {getDownloadURL, getStorage, ref, uploadBytes} from "firebase/storage";
import {updateProfile} from "firebase/auth";
import {createDocOfCollection, getAllDocFromCollection} from "../../common/common-action/common-action";
import {useToast} from "@chakra-ui/react";

const MaterialAdd = () => {
    let navigate = useNavigate();
    const [valueChangeHandler, setValue, form, setForm] = useFormController()
    const [file, setFile] = useState({})
    const [options, setOptions] = useState([])
    const toast = useToast()

    useEffect(() => {
        getCoursesOrClass()
    }, [form['moduleType']])

    const getCoursesOrClass = async () => {
        let result = await getAllDocFromCollection(form['moduleType'] == 'Course' ? 'courses' : 'classes')
        setOptions(result)
    }

    const onChangeFileInput = (e) => {
        if (e.target.files[0]) {
            setFile(e.target.files[0])
        }
    };

    const onSave = async () => {
        let fileUrl = ''
        if (file) {
            const storage = getStorage();
            const fileRef = ref(storage, `materials/${Math.floor(Math.random() * 1000) + file.name }`);
            const snapshot = await uploadBytes(fileRef, file);
            fileUrl = await getDownloadURL(fileRef);
        }
        await createDocOfCollection('materials', {...form, fileUrl: fileUrl})
        setFile({})
        toast({
            title: 'Material added',
            // description: "We've created your account for you.",
            status: 'success',
            duration: 2000,
            isClosable: true,
        })
        window.location.reload();
    }

    let materialVideoMarkup = (
        <Col md={6}>
            <FormGroup>
                <Label>Video Name</Label>
                <Input
                    id="videoName"
                    name="videoName"
                    placeholder="with a placeholder"
                    value={form['videoName']}
                    onChange={valueChangeHandler}
                    type="Email"
                />
            </FormGroup>
            <FormGroup>
                <Label>Video URL</Label>
                <Input
                    id="videoURL"
                    name="videoURL"
                    placeholder="password placeholder"
                    value={form['videoURL']}
                    onChange={valueChangeHandler}
                    type="text"
                />
            </FormGroup>
            <FormGroup>
                <Label>Video from Files</Label>
                <Input
                    id="path"
                    name="path"
                    placeholder="url placeholder"
                    onChange={onChangeFileInput}
                    type="file"
                />
            </FormGroup>
        </Col>
    )

    let materialSelfMarkUp = (
        <div>
            <FormGroup>
                <Label>Session Title</Label>
                <Input
                    id="materialName"
                    name="materialName"
                    placeholder="with a placeholder"
                    value={form['materialName']}
                    onChange={valueChangeHandler}
                    type="Text"
                />
            </FormGroup>
            <FormGroup>
                <Label>Session Content</Label>
                <Input
                    id="materialDesc"
                    name="materialDesc"
                    placeholder="Type your sentence to Traning"
                    value={form['materialDesc']}
                    onChange={valueChangeHandler}
                    type="Text"
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
                    value={form['documentName']}
                    onChange={valueChangeHandler}
                    type="Text"
                />
            </FormGroup>
            <FormGroup>
                <Label>Files</Label>
                <Input
                    id="path"
                    name="path"
                    onChange={onChangeFileInput}
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
                    value={form['examName']}
                    onChange={valueChangeHandler}
                    type="Text"
                />
            </FormGroup>
            <FormGroup>
                <Label>Files</Label>
                <Input
                    id="path"
                    name="path"
                    onChange={onChangeFileInput}
                    placeholder="url placeholder"
                    type="file"
                />
            </FormGroup>
        </div>
    )
    let materialAnnouncementMarkup = (
        <div>
            <FormGroup>
                <Label>Annousemnt Name</Label>
                <Input
                    id="annoName"
                    name="annoName"
                    placeholder="exam name"
                    value={form['annoName']}
                    onChange={valueChangeHandler}
                    type="Text"
                />
            </FormGroup>
            <FormGroup>
                <Label>Zoom Link</Label>
                <Input
                    id="zoomlink"
                    name="zoomlink"
                    placeholder="exam name"
                    value={form['zoomlink']}
                    onChange={valueChangeHandler}
                    type="Text"
                />
            </FormGroup>
        </div>
    )

    let markUps = {
        video: materialVideoMarkup,
        self: materialSelfMarkUp,
        doc: materialDocMarkUp,
        exam: materialExam,
        announcement: materialAnnouncementMarkup
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
                                            <option value="video">Select</option>
                                            <option value="video">Video Lesson</option>
                                            <option value="self">Self Traning Session</option>
                                            <option value="doc">Document</option>
                                            <option value="exam">Exam</option>
                                            <option value="announcement">Announcement</option>
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
                                        <option value="video">Select</option>
                                        <option value="Classes">Classes</option>
                                        <option value="Course">Course</option>

                                    </Input>
                                </Col>
                            </Row>
                            <Row>
                                {markUps[form['materialType']]}
                                <Col md="6">
                                    <FormGroup>
                                        <Label
                                            for="exampleSelect">{form['moduleType'] == 'Classes' ? 'Select a Class' : 'Select a course'}</Label>
                                        <Input
                                            id="module"
                                            name="module"
                                            type="select"
                                            onChange={valueChangeHandler}
                                        ><option value={''}>{'Select'}</option>
                                            {
                                            options?.map((option) => (
                                                <option value={option.id}>{option?.title}</option>
                                            ))
                                        }
                                        </Input>

                                    </FormGroup>
                                </Col>
                            </Row>

                            <Button onClick={onSave} color="primary">Save</Button>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </>
    );
};

export default MaterialAdd;
