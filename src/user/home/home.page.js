import MainCard from "./components/main-card.component";
import {useColorModeValue} from "@chakra-ui/react";

const HomePage = ()=>{

    return (
        <MainCard height="60vh"
                  alignItems="center"
                  bg={useColorModeValue('white', 'gray.900')}
                  borderWidth="2px"
                  borderColor={useColorModeValue('gray.200', 'gray.700')}
                  borderStyle={'solid'}
                  justifyContent={{base: 'space-between', md: 'flex-end'}}/>
    )
}

export default HomePage