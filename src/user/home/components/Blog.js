import { useNavigate } from "react-router-dom";
import {
    Card,
    CardBody,
    CardImg,
    CardSubtitle,
    CardText,
    CardTitle,
    Button,
  } from "reactstrap";
  
  const Blog = (props) => {
    const navigate = useNavigate();
    const btnHandler = () => {
      navigate(props.btnAction);
    }
    return (
      <Card>
        <CardImg alt="Card image cap" src={props.image} />
        <CardBody className="p-4">
          <CardTitle tag="h5">{props.title}</CardTitle>
          <CardSubtitle className="h-50">{props.subtitle}</CardSubtitle>
          <CardText className="mt-3">{props.text}</CardText>
          <Button color={props.color} onClick={btnHandler}>Start Learning</Button>
        </CardBody>
      </Card>
    );
  };
  
  export default Blog;