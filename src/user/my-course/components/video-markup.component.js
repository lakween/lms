import {Card, CardTitle, Col, Row} from "reactstrap";
import {FiPaperclip} from "react-icons/fi";

const VideoMarkupComponent = ({data}) => {
    return (
        <>
            {
                data?.map((item) => (
                    <>
                        <Row className={'mt-2'}>
                            <Col sm="6">
                                <Card body>
                                    <CardTitle tag="h5">  {item?.videoName} </CardTitle>
                                    <a href={item?.videoURL} target="_blank">
                                        External Video URL - {item?.videoURL}
                                    </a>
                                    <div>
                                        <a href={item?.fileUrl} target="_blank"> <FiPaperclip
                                            style={{height: '50px', width: '50px'}}/></a>
                                    </div>
                                </Card>
                            </Col>
                        </Row>
                    </>
                ))
            }
        </>
    )
}

export default VideoMarkupComponent