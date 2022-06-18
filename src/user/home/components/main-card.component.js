import {Box, Flex, useColorModeValue, Wrap} from "@chakra-ui/react";

const MainCard = ({children, ...rest}) => {
    return (
        <Box
            overflowY={'scroll'}
            bg={useColorModeValue('white', 'gray.900')}
            borderWidth="2px"
            padding={'10px'}
            borderColor={useColorModeValue('gray.200', 'gray.700')}
            borderStyle={'solid'}
            {...rest}
            maxHeight={'100%'}
        className={"d-flex justify-content-between flex-wrap"}>
         {children}
        </Box>
    )
}

export default MainCard