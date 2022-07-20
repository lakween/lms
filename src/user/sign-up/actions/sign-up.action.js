import firebase from "firebase/compat/app";
import setUserLoginDetails from '../../../store/reducers/user-details.slice'

export const emailAndPasswordAuth = (email, password, toast, navigate) => {
    return async (dispatch) => {
       let res = await firebase.auth().createUserWithEmailAndPassword(email, password)
        return {
            email: res.user.email,
            fullName: res?.user?.displayName,
            uid: res?.user?.uid,
            isNewUser: res?.additionalUserInfo?.isNewUser
        }
            // .then((userCredential) => {
            //     console.log(userCredential, 'userCredential')
            //     setUserLoginDetails(userCredential)
            //     navigate('/home')
            //
            // })
            // .catch((error) => {
            //     if (Object.keys(error).length === 0) {
            //         toast({
            //             title: 'Registration Success',
            //             description: [...error.message.split(":")][1],
            //             status: 'success',
            //             duration: 9000,
            //             isClosable: true,
            //         })
            //     } else {
            //         toast({
            //             title: 'Something wrong',
            //             description: [...error.message.split(":")][1],
            //             status: 'error',
            //             duration: 9000,
            //             isClosable: true,
            //         })
            //     }
            // });
       return res
    }
}
