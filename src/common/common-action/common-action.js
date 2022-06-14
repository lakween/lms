import firebase from "firebase/compat/app";
import {collection, getDocs,addDoc } from "firebase/firestore";

export const getDocFromCollection = (collection,document)=>{
    return async (dispatch)=>{
        let data = ''
        const db = firebase.firestore();
        const snapshot = await db.collection(collection).doc(document).get()
        return snapshot.data() ? snapshot.data() : {}
    }
}

export const createDocOfCollection = (collName,data)=>{
    return async (dispatch)=>{
        const db = firebase.firestore();
        const docRef = await addDoc(collection(db, collName), data);
        console.log("Document written with ID: ", docRef.id)
    }
}

export const getAllDocFromCollection = (collName)=>{
    return async (dispatch)=>{
        const db = firebase.firestore();
        const querySnapshot = await getDocs(collection(db, collName));
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        })
        //return snapshot.data() ? snapshot.data() : {}
    }
}