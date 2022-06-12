import {Card, ListGroup} from "react-bootstrap";
import { BsFillRssFill } from "react-icons/bs";
import {Flex} from "@chakra-ui/react";

const SideBar = () => {


    return (
        <>

            <Card className={'bg-primary rounded-0'} style={{
                width: '30vh',
            }}>
                <Card.Body>
                    <Card style={{minHeight: '100%', boxSizing: 'border-box'}}>
                        <Card.Body style={{padding: '0px'}}>
                            <Card.Header style={{}}><Flex direction={'row'} alignItems={'center'} gap={3}><BsFillRssFill/>Dashboard</Flex></Card.Header>
                            <Card.Header style={{}}><Flex direction={'row'} alignItems={'center'} gap={3}><BsFillRssFill/>Site Home</Flex></Card.Header>
                            <Card.Header style={{}}><Flex direction={'row'} alignItems={'center'} gap={3}><BsFillRssFill/>My Courses</Flex></Card.Header>
                            <ListGroup className={'ps-3'} variant="flush">
                                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Card.Body>
            </Card>
        </>
    )
}

export default SideBar