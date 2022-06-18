import {Box, Flex, Text, useColorModeValue, Wrap} from "@chakra-ui/react";

const MainCard = ({children, innerText, ...rest}) => {
    return (
        <Box
            bg={useColorModeValue('white', 'gray.900')}
            borderWidth="2px"
            padding={'10px'}
            borderColor={useColorModeValue('gray.200', 'gray.700')}
            borderStyle={'solid'}
            {...rest}
        >
            <Flex justify={'center'} align={'center'}>
                <Text>
                    Recently Accsess Course
                </Text>
            </Flex>
            <Box className={"d-flex flex-wrap"}>

                {children}
            </Box>
        </Box>
    )
}

export default MainCard