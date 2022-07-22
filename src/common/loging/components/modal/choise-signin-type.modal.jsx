import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton, Button,
} from '@chakra-ui/react'
import {useDispatch} from "react-redux";
import {googleSignUp} from "../../actions/loging.action";
import {useNavigate} from "react-router-dom";
import {createDocOfCollection, createDocOfCollectionWithId} from "../../../common-action/common-action";


const ChoiseSigninTypeModal = ({modalMethod, State}) => {

    const {isOpen, onOpen, onClose} = modalMethod
    const [modalState, setModalState] = State
    let navigate = useNavigate();
    let dispatch = useDispatch()

    const onClickStudent = async () => {
        onClose()
        let res = await dispatch(googleSignUp(navigate))
        if (res.isNewUser) {
            let result = await dispatch(createDocOfCollectionWithId('accounts', res.uid, {
                ...res,
                userType: 'student',
                status: 'pending'
            }))
            console.log(result)
        }
        navigate('/unknownProfile')
        console.log(res)
    }

    const onClickTeacher = async () => {
        onClose()
        let res = await dispatch(googleSignUp(navigate))
        if (res.isNewUser) {
            let result = await dispatch(createDocOfCollectionWithId('accounts', res.uid, {
                ...res,
                userType: 'teacher',
                status: 'pending'
            }))
            console.log(result)
        }
        navigate('/unknownProfile')
        console.log(res)
    }

    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose} isCentered>
                <ModalOverlay/>
                <ModalContent>
                    <ModalHeader>Choose Sign in type</ModalHeader>
                    <ModalCloseButton/>
                    <ModalBody>
                        <div className={'d-flex flex-column gap-3'}>
                            <Button size={'sm'} colorScheme='blue' onClick={onClickStudent}>
                                Sign in As Student
                            </Button>
                            <Button onClick={onClickTeacher} size={'sm'} colorScheme='blue'> Sign in As Teacher</Button>
                        </div>
                    </ModalBody>
                    <ModalFooter/>
                </ModalContent>
            </Modal>
        </>
    )
}

export default ChoiseSigninTypeModal