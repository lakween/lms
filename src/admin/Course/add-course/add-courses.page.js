import { useEffect, useState } from "react";
import {
  filterDocsFromCollection,
  getAllDocFromCollection,
} from "../../../common/common-action/common-action";
import { useToast, FormErrorMessage } from "@chakra-ui/react";
import firebase from "firebase/compat/app";
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
import useFormController from "../../../hooks/useFormController";
import { getAllCourses } from "../../../web/actions/course.actions";
import { useDispatch } from "react-redux";
import signSchema from "./schema/add-course-page.schema";
import { doc, updateDoc, deleteField } from "firebase/firestore";

const AddNewCourse = (getNames) => {
  let [errors, setErrors] = useState({});
  let [valueChangeHandler, setValue, form, setForm] = useFormController();
  const toast = useToast();
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const handleSubmit = async (e) => {
    setErrors({});
    e.preventDefault();
    try {
      await signSchema.validate(form, { abortEarly: false });
      const db = firebase.firestore();

      db.collection("courses")
        .add({
          title: form.course_name,
          img: form.file,
          description: form.course_desc,
          accsessCount: 0,
          shotDesc: form.course_details,
          feature: form.course_feature,
          fee: form.course_fee,
        })
        .then(() => {
          toast({
            title: "New Course Added Success 👍",
            description: "Our representive contact you soon!",
            status: "success",
            duration: 5000,
            isClosable: true,
          });
          window.location.reload();
        })
        .catch((error) => {
          toast({
            title: "Something wrong",
            description: error.message,
            status: "error",
            duration: 9000,
            isClosable: true,
          });
        });
    } catch (e) {
      e.inner.forEach((e) => {
        // console.log({[e.path]: e.message},'e')
        setErrors((errors) => ({ ...errors, [e.path]: e.message }));

        console.log(errors);
      });
    }
  };

  const [course, setCourse] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    get();
  }, []);

  async function get() {
    let res = await dispatch(getAllCourses());
    setCourse(res || []);
  }
  const myStyle = {
    overflow: "hidden",
    width: "200px",
    wordWrap: "break-word",
  };

  const handleClick = async (event, param) => {
    alert("Course Delete Success");
    const db = firebase.firestore();
    await db.collection("courses").doc(param).delete();
    window.location.reload();
  };
  return (
    <>
      <Breadcrumb listTag="div">
        <BreadcrumbItem href="#" tag="a">
          Home
        </BreadcrumbItem>
        <BreadcrumbItem href="#" tag="a">
          Library
        </BreadcrumbItem>
        <BreadcrumbItem href="#" tag="a">
          Data
        </BreadcrumbItem>
        <BreadcrumbItem active tag="span">
          Bootstrap
        </BreadcrumbItem>
      </Breadcrumb>
      <Card className="mt-2">
        <CardBody>
          <CardTitle tag="h5">Add New Courese</CardTitle>
          <CardSubtitle className="mb-2 text-muted text-weight-bold" tag="h6">
            <div className="d-flex justify-content-end align-items-end">
              <Button color="primary" onClick={toggle}>
                Add Course
              </Button>
              <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                <ModalBody>
                  <Form>
                    <FormGroup>
                      <Label for="course_name">Name</Label>
                      <Input
                        invalid={!form.course_name}
                        id="course_name"
                        name="course_name"
                        placeholder="define course name ex : IOT Course"
                        type="text"
                        onChange={valueChangeHandler}
                      />
                      <FormFeedback>{errors.course_name}</FormFeedback>
                    </FormGroup>
                    <FormGroup>
                      <Label for="course_fee">Course Fee</Label>
                      <Input
                        invalid={!form.course_fee}
                        id="course_fee"
                        name="course_fee"
                        type="text"
                        onChange={valueChangeHandler}
                      />
                      <FormFeedback></FormFeedback>
                    </FormGroup>
                    <FormGroup>
                      <Label for="course_desc">Short Description</Label>
                      <Input
                        invalid={!form.course_desc}
                        id="course_desc"
                        name="course_desc"
                        type="textarea"
                        onChange={valueChangeHandler}
                      />
                      <FormFeedback>{errors.course_desc}</FormFeedback>
                    </FormGroup>
                    <FormGroup>
                      <Label for="course description">Course Feature</Label>
                      <Input
                        invalid={!form.course_feature}
                        id="course_feature"
                        name="course_feature"
                        placeholder="Course Feature"
                        type="text"
                        onChange={valueChangeHandler}
                      />
                      <FormFeedback>{errors.course_desc}</FormFeedback>
                    </FormGroup>
                    <FormGroup>
                      <Label for="course_details">Details</Label>
                      <Input
                        invalid={!form.course_details}
                        id="course_details"
                        name="course_details"
                        type="textarea"
                        onChange={valueChangeHandler}
                      />
                      <FormFeedback>{errors.course_desc}</FormFeedback>
                    </FormGroup>
                    <FormGroup>
                      <Label for="exampleFile" sm={2}>
                        Banner
                      </Label>
                      <Input
                        invalid={!form.file}
                        id="exampleFile"
                        name="file"
                        type="file"
                        onChange={valueChangeHandler}
                      />
                      <FormFeedback>{errors.course_desc}</FormFeedback>
                      <FormText>
                        plase upload 5mb or smaller images for view !
                      </FormText>
                    </FormGroup>
                  </Form>
                </ModalBody>
                <ModalFooter>
                  <Button onClick={handleSubmit}>Submit</Button>
                  <Button color="danger" onClick={toggle}>
                    Cancel
                  </Button>
                </ModalFooter>
              </Modal>
            </div>
          </CardSubtitle>
          <Row>
            <Col lg="12" md="12">
              <Table
                bordered
                style={{ tableLayout: "fixed", wordWrap: "break-word" }}
              >
                <thead>
                  <tr>
                    <th># Trace ID</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Accsess Count</th>
                    <th>Fee</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {course.map((items) => (
                    <tr>
                      <th scope="row">{items.id}</th>
                      <td>{items.title}</td>
                      <td style={myStyle}>{items.description}</td>
                      <td>{items.accsessCount}</td>
                      <td>{items.fee}</td>
                      <td>
                        <Button
                          color="danger"
                          href="#"
                          tag="a"
                          size="sm"
                          onClick={(event) => {
                            if (
                              window.confirm(
                                "Are you sure you wish to delete this item?"
                              )
                            ) {
                              handleClick(event, items.id);
                            }
                            this.onCancel(items.id);
                          }}
                        >
                          <i class="bi bi-trash-fill"></i>
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </>
  );
};
export default AddNewCourse;
