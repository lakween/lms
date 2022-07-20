import firebase from "firebase/compat/app";
import {collection, getDocs, addDoc, setDoc, doc} from "firebase/firestore";

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
    }
}

export const createDocOfCollectionWithId = (collName,id,data)=>{
    return async (dispatch)=>{
        const db = firebase.firestore();
        const docRef =await setDoc(doc(db, collName,id), data);
    }
}

export const getAllDocFromCollection = (collName)=>{
    return async (dispatch)=>{
        const db = firebase.firestore();
        let array = []
        const querySnapshot = await getDocs(collection(db, collName));
        for(let doc of querySnapshot.docs){
            array.push({...doc.data(),id:doc.id})
        }
        return array
    }
}