import firebase from "firebase/compat/app";
import {collection, getDocs, addDoc, setDoc, doc, query, where, getDoc} from "firebase/firestore";

export const getDocFromCollection = (collection, document) => {
    return async (dispatch) => {
        let data = ''
        const db = firebase.firestore();
        const snapshot = await db.collection(collection).doc(document).get()
        return snapshot.data() ? snapshot.data() : {}
    }
}

export const createDocOfCollection = (collName, data) => {
    return async (dispatch) => {
        const db = firebase.firestore();
        const docRef = await addDoc(collection(db, collName), data);
    }
}

export const createDocOfCollectionWithId = (collName, id, data) => {
    return async (dispatch) => {
        const db = firebase.firestore();
        const docRef = await setDoc(doc(db, collName, id), data);
    }
}

export const getAllDocFromCollection = (collName) => {
    return async (dispatch) => {
        const db = firebase.firestore();
        let array = []
        const querySnapshot = await getDocs(collection(db, collName));
        for (let doc of querySnapshot.docs) {
            array.push({...doc.data(), id: doc.id})
        }
        return array
    }
}

export const filterDocsFromCollection = (coll, fields,filters) => {
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
                if (value.referenceValue) {
                    let splitArray = value.referenceValue.split("/")
                    const docRef = await doc(db, splitArray[5], splitArray[6]);
                    const docSnap = await getDoc(docRef);
                    singleDoc[key] = docSnap.data()
                } else {
                    singleDoc[key] = Object.values(value)[0]
                }
            }
            array.push(singleDoc)
        }
        return array
    }
}
