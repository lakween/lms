import {query, orderBy, collection, doc, updateDoc, increment, getDocs} from "firebase/firestore";
import firebase from "firebase/compat/app";
import {getDocFromCollection} from "../../../common/common-action/common-action";

export const getAllCourses = async (courseBystudent) => {
    const db = firebase.firestore();
    let array = []
    for (let item of courseBystudent) {
        let a = await getDocFromCollection('courses', item?.CourseID)
        array.push(a)
    }
    return array

}

export const increaseCountofCourse = async (id) => {
    const db = firebase.firestore();
    const courseRef = doc(db, "courses", id);
    await updateDoc(courseRef, {
        accsessCount: increment(1)
    });
}