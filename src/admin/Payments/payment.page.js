import react from "react";
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
import PaymentTable from "./components/payment-table";

const PaymentPage = () => {
    return (
        <>
            {" "}
            <Breadcrumb listTag="div">
                <BreadcrumbItem href="/home" tag="a">
                    Home
                </BreadcrumbItem>
                <BreadcrumbItem href="/payment" tag="a">
                    Payments
                </BreadcrumbItem>
            </Breadcrumb>
            <Card className="mt-2">
                <CardBody>
                    <CardTitle tag="h5">Course Payment by Students</CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted text-weight-bold"
                        tag="h6"
                    ></CardSubtitle>
                    <PaymentTable/>
                </CardBody>
            </Card>
        </>
    );
};
export default PaymentPage;
