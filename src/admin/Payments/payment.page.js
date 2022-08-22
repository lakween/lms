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
import {getAllDocFromCollection} from "../../common/common-action/common-action";
import {useEffect, useState} from "react";

const PaymentPage = () => {
    const [paymentModel, setPaymentModel] = useState()
    const [refetch, setRefetch] = useState(false)
    let columns = ["id","CourseID","StudentID", "payMethod"," Action"]

    useEffect(() => {
        getPaymentData()
    }, [refetch])

    const getPaymentData = async () => {
        let result = await getAllDocFromCollection('courseByStudent')
        setPaymentModel(result)
    }

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
                    <PaymentTable  columns={columns} data={paymentModel} setRefetch={setRefetch} refetch={refetch}/>
                </CardBody>
            </Card>
        </>
    );
};
export default PaymentPage;
