import firebase from "firebase/compat/app";
import {collection, getDocs} from "firebase/firestore";
import setUserDetails from '../../../store/reducers/user-details.slice'

export const googleSignUp = (navigate) => {
    return async (dispatch) => {
        let provider = new firebase.auth.GoogleAuthProvider();
        let result = await firebase.auth().signInWithPopup(provider).then(function (result) {
            navigate('signup')
            return {email: result.user.email, user_name: result.user.displayName}
        }).catch(function (error) {
            return {success: false}
        });
        return result
    }
}

export const createDoc = (collection, toast, navigate, form) => {
    return async (dispatch) => {
        const db = firebase.firestore();
        db.collection(collection).add(form)
            .then((docRef) => {
                toast({
                    title: 'Account created.',
                    description: "We've update your account for you.",
                    status: 'success',
                    duration: 9000,
                    isClosable: true,
                })
                navigate()
            })
            .catch((error) => {
                console.error("Error adding document: ", error);
                return {}
            });
    }
}


export const signOut = () => {
    return async ()=>{
        let res = await firebase.auth().signOut()
    }
}

export const login = (form, navigate) => {
    return async (dispatch) => {
        try {
            let res = await firebase.auth().signInWithEmailAndPassword(form.username, form.password)
            return res
        }catch(e)
        {
            console.log(e)
        }
    }
}

export const checkEmailExist = (form) => {
    return async (dispatch) => {
        firebase.auth().signInWithEmailAndPassword(form.username, form.password)
            .then((userCredential) => {
                // Signed in
                console.log('succ')
                // ...
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
            });
    }
}

export const getAllDocuments = (CollectionName) => {
    return async (dispatch) => {
        let data = []
        const db = firebase.firestore();
        const querySnapshot = await getDocs(collection(db, CollectionName))
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            data.push({id: doc.id, ...doc.data()})
        });
        return data
    }
}