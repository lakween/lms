import {Avatar, Box, Text, useColorModeValue} from "@chakra-ui/react";


const StudentProfile = () => {
    return (
        <Box borderWidth="1px"
             borderColor={useColorModeValue('gray.200', 'gray.700')} padding={5}
             bg={useColorModeValue('white', 'gray.900')} width={'100%'} borderStyle={'solid'}>
            <Avatar size='2xl' name='Segun Adebayo' src='https://bit.ly/sage-adebayo'/>{' '}
            <Text mt={2}>Lakween Senathilake</Text>
        </Box>
    )
}

export default StudentProfile