import {Col, Row, Table} from "reactstrap";
import CourseNameCell from "../../Payments/components/course-name.cell";
import StudentNameCell from "../../Payments/components/student-name-cell";

const MaterialTableComponent = ({columns = [], data = [], setRefetch, refetch}) => {
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
                                        {item.id}
                                    </th>
                                    <td>
                                        {item.materialType}
                                    </td>
                                    <td>
                                        {item.materialType}
                                    </td>
                                    <td>
                                        {item?.videoName}
                                    </td>
                                    <td>
                                        {item?.videoURL}
                                    </td>
                                    <td>
                                        {item?.fileUrl}
                                    </td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </>
    );
}

export default MaterialTableComponent