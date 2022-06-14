import {Box, Flex, useColorModeValue} from "@chakra-ui/react";

const MainCard = ({height,...rest})=>{
  return(
      <Flex
          height="60vh"
          alignItems="center"
          bg={useColorModeValue('white', 'gray.900')}
          borderWidth="2px"
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          borderStyle={'solid'}
          justifyContent={{base: 'space-between', md: 'flex-end'}}
          {...rest}
      > </Flex>
  )
}

export default MainCard