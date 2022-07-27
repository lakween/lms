import firebase from "firebase/compat/app";
import {collection, getDocs, addDoc, setDoc, doc, query, where, getDoc} from "firebase/firestore";
import {selectOptions} from "@testing-library/user-event/dist/select-options";

export const getDocFromCollection = async (collection, document) => {
    const db = firebase.firestore();
    const snapshot = await db.collection(collection).doc(document).get()
    return snapshot.data() ? snapshot.data() : {}
}

export const createDocOfCollection = (collName, data) => {
    return async (dispatch) => {
        const db = firebase.firestore();
        const docRef = await addDoc(collection(db, collName), data);
    }
}

export const createDocOfCollectionWithId = async (collName, id, data) => {
    const db = firebase.firestore();
    const docRef = await setDoc(doc(db, collName, id), data);
}

export const getAllDocFromCollection = async (collName) => {
    const db = firebase.firestore();
    let array = []
    const querySnapshot = await getDocs(collection(db, collName));
    for (let doc of querySnapshot.docs) {
        array.push({...doc.data(), id: doc.id})
    }
    return array
}


export const filterDocsFromCollection = async (coll, fields, filters) => {
    const db = firebase.firestore();
    let a = filters.map((item) => (where(item[0], item[1], item[2])))
    const collRef = await collection(db, coll);
    const queryData = await query(collRef, ...a);
    let array = []
    const querySnapshot = await getDocs(queryData)
    for (let document of querySnapshot.docs) {
        array.push(document.data())
    }
    return array
}

export const getRefFieldOnlyFromFilter = (coll, field, filters) => {
    return async (dispatch) => {

        let a = filters.map((item) => (where(item[0], item[1], item[2])))
        const db = firebase.firestore();
        const collRef = await collection(db, coll);
        const queryData = await query(collRef, ...a);
        let array = []
        const querySnapshot = await getDocs(queryData)
        for (let document of querySnapshot.docs) {
            let singleDoc = {}
            for (let [key, value] of Object.entries(document._document?.data?.value?.mapValue?.fields)) {
                if (value.referenceValue && key == field) {
                    let splitArray = value.referenceValue.split("/")
                    const docRef = await doc(db, splitArray[5], splitArray[6]);
                    const docSnap = await getDoc(docRef);
                    singleDoc[key] = docSnap.data()
                }
            }
            array.push(singleDoc)
        }
        return array
    }
}