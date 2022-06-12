import firebase from "firebase/compat";

export const emailAndPasswordAuth = (email, password, toast) => {
    return async (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                console.log(userCredential,'userCredential')
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
