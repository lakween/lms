import {Flex, Text} from "@chakra-ui/react";
import {useState} from "react";
import EditComponent from "../edite.componet";
import {FaPencilAlt} from "react-icons/fa";

const DisplayLine = ({text}) => {
    const [isEdit, setIsEdit] = useState(false)

    return (
        <> {!isEdit ?
            (
                <Flex gap={5} marginY={2} direction={'row'} align={'center'}>
                    <Text>{text}</Text>
                    <FaPencilAlt onClick={() => setIsEdit(true)}/>
                </Flex>
            ) :
            <EditComponent value={text} setIsEdit={setIsEdit}/>} </>
    )
}

export default DisplayLine