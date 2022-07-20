import firebase from "firebase/compat/app";
import setUserLoginDetails from '../../../store/reducers/user-details.slice'

export const emailAndPasswordAuth = (email, password, toast,navigate) => {
    return async (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                setUserLoginDetails(userCredential)
                navigate('/home')
                return true
            })
            .catch((error) => {
                console.log((JSON.stringify(error)))
                toast({
                    title: 'Something wrong',
                    description: [...error.message.split(":")][1],
                    status: 'error',
                    duration: 9000,
                    isClosable: true,
                })
                return false
            });
    }
}
