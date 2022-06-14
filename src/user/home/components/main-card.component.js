import {Box, Flex, useColorModeValue, Wrap} from "@chakra-ui/react";

const MainCard = ({children, ...rest}) => {
    return (
        <Flex
            bg={useColorModeValue('white', 'gray.900')}
            borderWidth="2px"
            padding={'10px'}
            borderColor={useColorModeValue('gray.200', 'gray.700')}
            borderStyle={'solid'}
            {...rest}
        >
            {children}
        </Flex>
    )
}

export default MainCard