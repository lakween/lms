import {getAuth, signOut, updateProfile} from "firebase/auth";
import {getDownloadURL, getStorage, ref, uploadBytes} from "firebase/storage";

export const updateStudentProfile = (user, model) => {
    return async (dispatch) => {
        let {displayName} = model
        console.log(displayName, 'displayName')
        let res = await updateProfile(user, model)
        console.log(res, 'res')
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