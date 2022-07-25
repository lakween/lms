import firebase from "firebase/compat/app";
import setUserLoginDetails from '../../../store/reducers/user-details.slice'

export const emailAndPasswordAuth = async (email, password, toast, navigate) => {
        try {
            let res = await firebase.auth().createUserWithEmailAndPassword(email, password)
            return {
                email: res.user.email,
                fullName: res?.user?.displayName,
                uid: res?.user?.uid,
                isNewUser: res?.additionalUserInfo?.isNewUser
            }
            if(res){
                toast({
                    title: 'Registration Success',
                    status: 'success',
                    duration: 9000,
                    isClosable: true,
                })
            }
        }catch (e) {
            toast({
                title: 'Something wrong',
                description: [...e.message.split(":")][1],
                status: 'error',
                duration: 9000,
                isClosable: true,
            })
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
       //return res

}
