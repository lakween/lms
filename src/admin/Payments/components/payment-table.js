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
import StudentNameCell from "./student-name-cell";
import CourseNameCell from "./course-name.cell";
import firebase from "firebase/compat/app";
import {doc, updateDoc} from "firebase/firestore";
import {useToast} from "@chakra-ui/react";
import ClassNameCell from "./class-name.cell";

const PaymentTable = ({columns = [], data = [], setRefetch, refetch}) => {
    const toast = useToast()
    const onClickAcceptHandler = async (item) => {
        const db = firebase.firestore();
        const ref = await doc(db, 'courseByStudent', item.id);

        if (item?.is_accept) {
            await updateDoc(ref, {is_accept: false});
            setRefetch(refetch ? false : true)
            toast({
                title: 'Payment rejected.',
                status: 'success',
                duration: 9000,
                isClosable: true,
            })
        } else {
            await updateDoc(ref, {is_accept: true});
            setRefetch(refetch ? false : true)
            toast({
                title: 'Payment approved.',
                status: 'success',
                duration: 9000,
                isClosable: true,
            })
        }
    }

    return (
        <>
            <Row>
                <Col lg="12" md="12" className="mt-4">
                    <Table hover bordered>
                        <thead>
                        <tr>
                            {
                                columns?.map((item) => (
                                    <th>
                                        {item}
                                    </th>
                                ))
                            }

                        </tr>
                        </thead>
                        <tbody>
                        {
                            data?.map((item, index) => (
                                <tr key={index}>
                                    <th scope="row">
                                        {item?.id}
                                    </th>
                                    <td>
                                        { item?.courseType == 'course'? <CourseNameCell value={item?.CourseID}/> : <ClassNameCell value={item?.CourseID}/>}
                                    </td>
                                    <td>
                                        <StudentNameCell value={item?.StudentID}/>
                                    </td>
                                    <td>
                                        {item?.payMethod}
                                    </td>
                                    <td>
                                        {item?.paymentSlip ? <a href={item?.paymentSlip}>View Slip</a> :'No slip found'}
                                    </td>
                                    <td>
                                        <Button onClick={() => onClickAcceptHandler(item)} marginRight={1}
                                                size={'xs'}>{item?.is_accept ? 'Reject' : ' Accept'}</Button>
                                    </td>
                                </tr>
                            ))
                        }
                        {/*<tr>*/}
                        {/*    <th scope="row">1</th>*/}
                        {/*    <td>Mark</td>*/}
                        {/*    <td>Otto</td>*/}
                        {/*    <td>@mdo</td>*/}
                        {/*</tr>*/}
                        {/*<tr>*/}
                        {/*    <th scope="row">2</th>*/}
                        {/*    <td>Jacob</td>*/}
                        {/*    <td>Thornton</td>*/}
                        {/*    <td>@fat</td>*/}
                        {/*</tr>*/}
                        {/*<tr>*/}
                        {/*    <th scope="row">3</th>*/}
                        {/*    <td>Larry</td>*/}
                        {/*    <td>the Bird</td>*/}
                        {/*    <td>@twitter</td>*/}
                        {/*</tr>*/}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </>
    );
};
export default PaymentTable;
