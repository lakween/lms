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
import {createDocOfCollection} from "../../common/common-action/common-action";
import {useToast} from "@chakra-ui/react";

const MaterialAdd = () => {
    let navigate = useNavigate();
    const [selectedOption, setSelectedOption] = useState("video");
    const [valueChangeHandler, setValue, form, setForm] = useFormController()
    const [file, setFile] = useState({})
    const toast = useToast()

    useEffect(()=>{
        setForm({...form,materialType:'video',moduleType:'class'})
    },[])

    const onChangeFileInput = (e) => {
        console.log('oooo')
        if (e.target.files[0]) {
            console.log(e.target.files[0].name)
            setFile(e.target.files[0])
        }
    };

    const onSave = async () => {
        let fileUrl = ''
        if (file) {
            const storage = getStorage();
            const fileRef = ref(storage, `materials/${file.name}`);
            const snapshot = await uploadBytes(fileRef, file);
            fileUrl = await getDownloadURL(fileRef);
            console.log(fileUrl, 'photoURL')
        }
        await createDocOfCollection('materials', {...form, fileUrl: fileUrl})
        toast({
            title: 'Material added',
            // description: "We've created your account for you.",
            status: 'success',
            duration: 2000,
            isClosable: true,
        })
    }

    let materialVideoMarkup = (
        <div>
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
                <Label >Video from Files</Label>
                <Input
                    id="path"
                    name="path"
                    placeholder="url placeholder"
                    onChange={onChangeFileInput}
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
                    id="materialName"
                    name="materialName"
                    placeholder="with a placeholder"
                    value={form['materialName']}
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
                            <Button onClick={onSave} color="primary">Save</Button>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </>
    );
};

export default MaterialAdd;
