import {Card, CardTitle, Col, Row,ListGroup,
    ListGroupItem,
    Badge,} from "reactstrap";
import {FiPaperclip} from "react-icons/fi";
import SpeechRecognition, {
    useSpeechRecognition,
} from "react-speech-recognition";

const SelfTrainningMarkupComponent = ({data}) => {
    return (<>{
        data?.map((item) => (
            <>
                <Row className={'mt-2'}>
                    <div className="col-md-12 mt-4 mb-4">
                        <h1 className="mt-4 mb-4 f-25">
                            Your Patrice Sentences are Below <Badge>New</Badge>
                        </h1>
                        <ListGroup>
                            <ListGroupItem disabled href="#" tag="a">
                                Sri Lanka is a very beautiful country
                                <span className="float-end"> 81%</span>
                            </ListGroupItem>
                            <ListGroupItem href="#" tag="a">
                                most Sri Lankan have their favourite games cricket
                                <span className="float-end"> 81%</span>
                            </ListGroupItem>
                            <ListGroupItem href="#" tag="a">
                                ABC news from the American Television Prime Time news
                                <span className="float-end"> 81%</span>
                            </ListGroupItem>
                            <ListGroupItem href="#" tag="a">
                                Russia will attack the Ukraine and their military
                                <span className="float-end">
                            <button
                                className="btn btn-primary btn-sm mx-2"
                                onClick={SpeechRecognition.startListening({
                                    continuous: true,
                                })}
                            >
                              Start
                            </button>
                          </span>
                                power is very high
                            </ListGroupItem>
                        </ListGroup>
                    </div>
                </Row>
            </>
        ))
    } </>)
}

export default SelfTrainningMarkupComponent
