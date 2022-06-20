import {Flex, Text} from "@chakra-ui/react";
import {useState} from "react";
import EditComponent from "../edite.componet";
import {FaPencilAlt} from "react-icons/fa";

const DisplayLine = ({text}) => {
    const [isEdit, setIsEdit] = useState(false)

    return (
        <> {!isEdit ? (<Flex gap={5} direction={'row'} align={'center'}>
            <Text mt={2}>{text}</Text>
            <FaPencilAlt onClick={()=>setIsEdit(true)}/>
        </Flex>) : <EditComponent setIsEdit={setIsEdit}/>} </>
    )
}

export default DisplayLine