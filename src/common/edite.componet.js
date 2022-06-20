import {useSelector} from "react-redux";
import {FaPencilAlt} from "react-icons/fa";

const EditComponent = ({setIsEdit})=>{
    let commonState = useSelector(state=>state)
    console.log(commonState,'commonState')
    return (
        <>
            <input/>
        </>
    )
}

export default EditComponent