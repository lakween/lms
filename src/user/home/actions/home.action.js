import {query, orderBy, limit, collection, where, getDocs} from "firebase/firestore";
import firebase from "firebase/compat/app";

export const getAllCourses= ()=>{
    return async (dispatch)=>{
        const db = firebase.firestore();
        let array = []
        const courses = collection(db, "courses")
        const q = query(courses, orderBy("accsessCount", "desc"));
        const querySnapshot = await getDocs(q);
        for(let doc of querySnapshot.docs){
            array.push({...doc.data(),id:doc.id})
        }
        return array
    }
}

export const increaseCountofCourse = (id)=>{
    return async (dispatch)=>{
        const db = firebase.firestore();
        let array = []
        const courses = collection(db, "courses")
        const q = query(courses, orderBy("accsessCount", "desc"), limit(5));
        const querySnapshot = await getDocs(q);
        for(let doc of querySnapshot.docs){
            array.push(doc.data())
        }
        return array
    }
}