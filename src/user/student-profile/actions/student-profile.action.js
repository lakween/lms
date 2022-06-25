import {getAuth, signOut, updateProfile} from "firebase/auth";
import {doc, getDoc, setDoc} from "firebase/firestore";
import {getDownloadURL, getStorage, ref, uploadBytes} from "firebase/storage";
import firebase from "firebase/compat/app";

export const updateAuthProfile = (user, model) => {
    return async (dispatch) => {
        let res = await updateProfile(user, model)
    }
}

export const updateProfilePhoto = (file, currentUser) => {
    return async (dispatch) => {
        const storage = getStorage();
        const fileRef = ref(storage, `usersProfilePhotos/${currentUser.uid}.png`);

        const snapshot = await uploadBytes(fileRef, file);
        const photoURL = await getDownloadURL(fileRef);
        await updateProfile(currentUser, {photoURL});
        alert("Uploaded file!");
    }
}

export const updateStudentProfile = (id, model) => {
    return async (dispatch) => {
        const db = firebase.firestore();
        await setDoc(doc(db, "accounts", id), model);
    }
}

export const getUserLocalAccount = (id) => {
    return async (dispatch) => {
        const db = firebase.firestore();
        const docRef = doc(db, "accounts", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            return docSnap.data()
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }
}