import react from "react";
import { useNavigate } from "react-router-dom";
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

const Material = (getNames) => {
  let navigate = useNavigate();
  return (
    <>
      <Breadcrumb listTag="div">
        <BreadcrumbItem href="/home" tag="a">
          Home
        </BreadcrumbItem>
        <BreadcrumbItem href="/material" tag="a">
          Material
        </BreadcrumbItem>
      </Breadcrumb>
      <Card className="mt-2">
        <CardBody>
          <div className="d-flex d-flex justify-content-between">
            <CardTitle tag="h5">Material Manage</CardTitle>
            <Button
              color="primary"
              onClick={() => {
                navigate("/material/add");
              }}
            >
              Add Material
            </Button>
          </div>
          <CardSubtitle
            className="mb-2 text-muted text-weight-bold"
            tag="h6"
          ></CardSubtitle>
          <Row>
            <Col lg="12" md="12" className="mt-4">
              <Table bordered>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </>
  );
};
export default Material;
