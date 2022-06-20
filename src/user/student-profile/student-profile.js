import {Avatar, Box, Flex, Text, useColorModeValue} from "@chakra-ui/react";


const StudentProfile = () => {
    return (
        <>
            <Box borderWidth="1px" mb={4}
                 borderColor={useColorModeValue('gray.200', 'gray.700')} padding={5}
                 bg={useColorModeValue('white', 'gray.900')} width={'100%'} borderStyle={'solid'}>
                <Flex gap={5} direction={'row'} align={'center'}>
                    <Avatar size='2xl' name='Segun Adebayo' src='https://bit.ly/dan-abramov'/>
                    <input type={'file'} />
                </Flex>
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
                    <Flex direction={'row'}>
                        <Text flex={1}>Full Name</Text>
                        <p flex={1}>Lakween Lalanahansa Senathilake</p>
                    </Flex>
                    <Flex direction={'row'}>
                        <Text flex={1}>Email Address</Text>
                        <p flex={1}>lakweensenathilake@gmail.com</p>
                    </Flex>
                    <Flex direction={'row'}>
                        <Text flex={1}>Mobile Number</Text>
                        <p flex={1}>0714704367</p>
                    </Flex>
                    <Flex direction={'row'}>
                        <Text flex={1}>Birth Day</Text>
                        <p flex={1}>2-7-1998</p>
                    </Flex>
                </Box>
                <Box p={5} borderWidth="1px"  flex={1} width={'50%'}>
                    <h1>Student Details</h1>
                    <br/>
                    <br/>
                    <Flex direction={'row'}>
                        <Text flex={1}>Batch Number</Text>
                        <p flex={1}>COBSCCS-00215458</p>
                    </Flex>
                    <Flex direction={'row'}>
                        <Text flex={1}>Batch</Text>
                        <p flex={1}>BSC in Computer Science</p>
                    </Flex>
                    <Flex direction={'row'}>
                        <Text flex={1}>Branch</Text>
                        <p flex={1}>Colombo</p>
                    </Flex>
                    <br/>
                    <Text></Text>
                    <p></p>
                </Box>

            </Box>
        </>

    )
}

export default StudentProfile