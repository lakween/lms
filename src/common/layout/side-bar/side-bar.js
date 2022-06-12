import {Card, ListGroup} from "react-bootstrap";
import { BsFillRssFill } from "react-icons/bs";
import {Box, Flex} from "@chakra-ui/react";

const SideBar = () => {


    return (
        <>

            <Box minHeight={'100%'} minW={'15vw'} padding={'10px'} className={'bg-primary rounded-0'} style={{
                width: '30vh',
            }}>
                <Box minHeight={'100%'}  >
                    <Box minHeight={'92vh'}  backgroundColor={'azure'}>
                        <Card.Body style={{padding: '0px'}}>
                            <Card.Header style={{cursor:'pointer'}}><Flex direction={'row'} alignItems={'center'} gap={3}><BsFillRssFill/>Dashboard</Flex></Card.Header>
                            <Card.Header style={{cursor:'pointer'}}><Flex direction={'row'} alignItems={'center'} gap={3}><BsFillRssFill/>Site Home</Flex></Card.Header>
                            <Card.Header style={{cursor:'pointer'}}><Flex direction={'row'} alignItems={'center'} gap={3}><BsFillRssFill/>My Courses</Flex></Card.Header>
                            <ListGroup className={'ps-3'} variant="flush">
                                <ListGroup.Item style={{cursor:'pointer'}}>IOT</ListGroup.Item>
                                <ListGroup.Item style={{cursor:'pointer'}}>OOP</ListGroup.Item>
                                <ListGroup.Item style={{cursor:'pointer'}}>Intro</ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default SideBar