import {useSelector} from "react-redux";
import {FaPencilAlt} from "react-icons/fa";
import {Box, Button, Flex, FormControl, useColorModeValue} from "@chakra-ui/react";
import {useState} from "react";

const EditComponent = ({setIsEdit, value,...rest}) => {
    // let commonState = useSelector(state => state)
    // console.log(commonState, 'commonState')
    const [state, setState] = useState(value)
    return (
        <>
        <Flex gap={2} {...rest}>
            <Box borderWidth="1px"
                 borderColor={useColorModeValue('gray.200', 'gray.700')} bg={useColorModeValue('white', 'gray.900')}>
            <input color={'blue'} value={state} type={'text'} onChange={(e) => {
                setState(e.target.value)
            }}/>
        </Box>
        <Button onClick={() => setIsEdit(false)} colorScheme='teal' size='xs'>
            OK
        </Button>
        </Flex>

</>
)
}

export default EditComponent