import {Flex, Text} from "@chakra-ui/react";
import {useState} from "react";
import EditComponent from "../edite.componet";
import {FaPencilAlt} from "react-icons/fa";

const DisplayLine = ({text,...rest}) => {
    const [isEdit, setIsEdit] = useState(false)

    return (
        <> {!isEdit ?
            (
                <Flex gap={5} direction={'row'} align={'center'} {...rest}>
                    <Text>{text}</Text>
                    <FaPencilAlt onClick={() => setIsEdit(true)}/>
                </Flex>
            ) :
            <EditComponent value={text} setIsEdit={setIsEdit} {...rest}/> } </>
    )
}

export default DisplayLine