import firebase from "firebase/compat/app";
import {collection, doc,getDoc, getDocs, query, where} from "firebase/firestore";
import { getAuth, setPersistence,inMemoryPersistence, signInWithEmailAndPassword, browserSessionPersistence } from "firebase/auth";


export const googleSignUp = () => {
    return async (dispatch) => {
        let provider = new firebase.auth.GoogleAuthProvider();
        let result = await firebase.auth().signInWithPopup(provider).then(function (result) {
            return {email: result.user.email, fullName: result?.user?.displayName , uid:result?.user?.uid ,isNewUser: result?.additionalUserInfo?.isNewUser}
        }).catch(function (error) {
            return {success: error}
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
            const auth = getAuth();
            return res
        }catch(e)
        {
            console.log(e)
        }
    }
}
export const getUsrType = (id) => {
    return async (dispatch) => {
        const db = firebase.firestore();
        // let userType =''
        // const accounts = collection(db, "accounts")
        // const q = query(accounts, where("userId", "==", id));
        // const querySnapshot = await getDocs(q);
        // for (let doc of querySnapshot.docs){
        //     userType = (doc.data()).userType
        // }
        const docRef = doc(db, "accounts", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            return docSnap.data().userType
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
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