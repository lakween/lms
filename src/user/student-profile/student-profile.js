import {Avatar, Box, Text, useColorModeValue} from "@chakra-ui/react";


const StudentProfile = () => {
    return (
        <>
            <Box borderWidth="1px" mb={4}
                 borderColor={useColorModeValue('gray.200', 'gray.700')} padding={5}
                 bg={useColorModeValue('white', 'gray.900')} width={'100%'} borderStyle={'solid'}>

                <Avatar size='2xl' name='Segun Adebayo' src='https://bit.ly/sage-adebayo'/>{' '}
                <Text mt={2}>Lakween Senathilake</Text>

            </Box>

            <Box borderWidth="1px"
                 borderColor={useColorModeValue('gray.200', 'gray.700')} padding={5}
                 bg={useColorModeValue('white', 'gray.900')} width={'100%'} borderStyle={'solid'}
                 display={'flex'} flexDir={'row'} gap={4}
            >

                <Box p={5} borderWidth="1px" flex={1} width={'50%'}>
                    <h1>User Details</h1>
                    <br/>
                    <br/>
                    <Text>Email Address</Text>
                    <p>lakweensenathilake@gmail.com</p>
                    <br/>
                    <Text>Mobile Number</Text>
                    <p>0714704367</p>
                </Box>
                <Box borderWidth="1px" flex={1} width={'50%'}>

                </Box>

            </Box>
        </>

    )
}

export default StudentProfile