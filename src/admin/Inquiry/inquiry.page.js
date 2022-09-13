import { useEffect, useState } from "react";
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
import { getAllInquiry } from "../../user/home/actions/home.action";
import { useDispatch } from "react-redux";
import { doc, updateDoc, deleteField } from "firebase/firestore";

const Inquiry = (getNames) => {
  let [errors, setErrors] = useState({});
  const toast = useToast();

  const [course, setCourse] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    get();
  }, []);

  async function get() {
    let res = await dispatch(getAllInquiry());
    setCourse(res || []);
  }
  const myStyle = {
    overflow: "hidden",
    width: "200px",
    wordWrap: "break-word",
  };

  const handleClick = async (event, param) => {
    alert("Inquriry Delete Success");
    const db = firebase.firestore();
    await db.collection("contactEmails").doc(param).delete();
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
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {course.map((items) => (
                    <tr>
                      <th scope="row">{items.id}</th>
                      <td>{items.name}</td>
                      <td style={myStyle}>{items.email}</td>
                      <td>{items.message}</td>
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
export default Inquiry;
