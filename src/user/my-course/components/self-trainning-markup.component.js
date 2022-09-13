import {
  Card,
  CardTitle,
  Col,
  Row,
  ListGroup,
  ListGroupItem,
  Badge,
} from "reactstrap";
import { FiPaperclip } from "react-icons/fi";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { useEffect } from "react";
const stringSimilarity = require("string-similarity");

const SelfTrainningMarkupComponent = ({ data }) => {
  useEffect(() => {
    SpeechRecognition.startListening({ continuous: true });
    console.log("start lisrnting");
  }, []);

  const { transcript, resetTranscript } = useSpeechRecognition();

  return (
    <>
      <h1 className="mt-4 mb-4 f-25">
        Your Patrice Sentences are Below <Badge>New</Badge>
      </h1>
      {data?.map((item) => (
        <>
          <Row className={"mt-2"}>
            <div className="col-md-12 mt-4 mb-4">
              <ListGroup>
                <ListGroupItem href="#" tag="a" key={item.id}>
                  {item.materialDesc}
                  <span className="float-end">
                    {stringSimilarity.compareTwoStrings(
                      item.materialDesc,
                      transcript
                    ) * 100}{" "}
                    %
                  </span>
                </ListGroupItem>
              </ListGroup>
            </div>
            <div class="col-lg-12">
              <div class="form-group">
                <textarea
                  id="message"
                  name="message"
                  cols="30"
                  rows="6"
                  class="form-control"
                  placeholder="Your Message"
                  value={transcript}
                ></textarea>
              </div>
            </div>
            <div class="col-lg-12 mt-2">
              <button
                className="btn btn-primary btn-sm mx-2"
                onClick={SpeechRecognition.startListening({
                  continuous: true,
                })}
              >
                Start
              </button>
              <button
                className="btn btn-primary btn-sm mx-2"
                onClick={(e) => {
                  e.preventDefault();
                  SpeechRecognition.stopListening();
                  console.log("listening stops");
                }}
              >
                Stop
              </button>
              <button
                className="btn btn-primary btn-sm mx-2"
                onClick={resetTranscript}
              >
                Clear text
              </button>
            </div>
          </Row>
        </>
      ))}{" "}
    </>
  );
};

export default SelfTrainningMarkupComponent;
