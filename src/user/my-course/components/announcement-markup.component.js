import {
  Card,
  CardTitle,
  Col,
  Row,
  ListGroup,
  ListGroupItem,
  Badge,
  Alert,
  Button,
} from "reactstrap";
import { FiPaperclip } from "react-icons/fi";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { useEffect } from "react";
const stringSimilarity = require("string-similarity");

const AnnouncementMarkupComponent = ({ data }) => {
  return (
    <>
      {data?.map((item) => (
        <>
          <h1 className="mt-4 mb-4 f-25">
            Announcement <Badge>New</Badge>
            <Alert color="primary" className="mt-4">
              {item.annoName}
              <span className="float-end">
                <Button color="primary btn-sm"> <a href={item.zoomlink} target="_blank" rel="noopener noreferrer"> Open Zoom</a></Button>
              </span>
            </Alert>
          </h1>
        </>
      ))}
    </>
  );
};

export default AnnouncementMarkupComponent;
