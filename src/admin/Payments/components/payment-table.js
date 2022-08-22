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

const PaymentTable = ({columns = [], data = [], setRefetch, refetch}) => {
    return (
        <>
            <Row>
                <Col lg="12" md="12" className="mt-4">
                    <Table bordered>
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
                                        {item.id}
                                    </th>
                                    <td>
                                        {item.CourseID}
                                    </td>
                                    <td>
                                        {item.StudentID}
                                    </td>
                                    <td>
                                        {item.payMethod}
                                    </td>

                                    {/*<td>*/}
                                    {/*    <Button onClick={() => onClickAcceptHandler(item)} marginRight={1}*/}
                                    {/*            size={'xs'}> Accept</Button>*/}
                                    {/*    <Button size={'xs'} onClick={() => onClickRejectHandler(item)}> Reject</Button>*/}
                                    {/*</td>*/}
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
