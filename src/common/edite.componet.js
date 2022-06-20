import {useSelector} from "react-redux";
import {FaPencilAlt} from "react-icons/fa";
import {Button, Flex} from "@chakra-ui/react";
import {useState} from "react";

const EditComponent = ({setIsEdit,value}) => {
    // let commonState = useSelector(state => state)
    // console.log(commonState, 'commonState')
    const [state,setState]= useState(value)
    return (
        <>
            <Flex marginY={2} gap={2}>
                <input value={state} type={'text'} onChange={(e)=>{setState(e.target.value)}}/>
                <Button onClick={() => setIsEdit(false)} colorScheme='teal' size='xs'>
                   OK
                </Button>
            </Flex>

        </>
    )
}

export default EditComponent