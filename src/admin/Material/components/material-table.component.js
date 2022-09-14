import { Col, Row, Table, Button } from "reactstrap";
import CourseNameCell from "../../Payments/components/course-name.cell";
import StudentNameCell from "../../Payments/components/student-name-cell";
import { Link } from "react-router-dom";
import firebase from "firebase/compat/app";

const MaterialTableComponent = ({
  columns = [],
  data = [],
  setRefetch,
  refetch,
}) => {
  const handleClick = async (event, param) => {
    alert("Material Delete Success");
    const db = firebase.firestore();
    await db.collection("materials").doc(param).delete();
    window.location.reload();
  };
  return (
    <>
      <Row>
        <Col lg="12" md="12" className="mt-4">
          <Table hover bordered>
            <thead>
              <tr>
                {columns?.map((item) => (
                  <th>{item}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data?.map((item, index) => (
                <tr key={index}>
                  <th scope="row">{item.id}</th>
                  <td>{item.materialType}</td>
                  <td>{item.materialType}</td>
                  <td>{item?.videoName}</td>
                  <td>{item?.videoURL}</td>
                  <td className={"overflow-hidden w-[10vw]"}>
                    <Button className=" btn-sm" color="primary btn-sm">
                      <a href={item?.fileUrl}>View</a>
                    </Button>
                    <Button
                      className="btn-sm mx-2"
                      color="danger"
                      onClick={(event) => {
                        if (
                          window.confirm(
                            "Are you sure you wish to delete this item?"
                          )
                        ) {
                          handleClick(event, item.id);
                        }
                        this.onCancel(item.id);
                      }}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </>
  );
};

export default MaterialTableComponent;
