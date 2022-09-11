import {Card ,CardTitle, CardText, Col, Row} from "reactstrap";
import {FiPaperclip} from "react-icons/fi";

const DocumentMarkup = ({data}) => {
    console.log(data, 'ddddd')

    return (<>{
        data?.map((item)=>(
            <>
                <Row className={'mt-2'}>
                    <Col sm="6">
                        <Card body>
                            <CardTitle tag="h5">  {item?.documentName} </CardTitle>
                            <div>
                                <a href={item?.fileUrl} target="_blank" > <FiPaperclip
                                    style={{height:'50px',width:'50px'}} /></a>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </>
        ))

    }</>)
}

export default DocumentMarkup