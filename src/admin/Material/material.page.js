import react, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
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
import MaterialTableComponent from "./components/material-table.component";
import {getAllDocFromCollection} from "../../common/common-action/common-action";

const Material = () => {
    let navigate = useNavigate();
    const [materials,setMaterials] = useState([])
    const columns = ['id','materialType','materialType','videoName','videoURL','fileUrl']

    useEffect(() => {
     getData()
    }, [])

    const getData = async () => {
      const result = await getAllDocFromCollection('materials')
        setMaterials(result)
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
                    <MaterialTableComponent columns={columns} data={materials} />
                </CardBody>
            </Card>
        </>
    );
};
export default Material;
