import {
  query,
  orderBy,
  collection,
  doc,
  updateDoc,
  increment,
  getDocs,
  where,
} from "firebase/firestore";
import firebase from "firebase/compat/app";

export const getAllCourses = () => {
  return async (dispatch) => {
    const db = firebase.firestore();
    let array = [];
    const courses = collection(db, "courses");
    const q = query(courses, orderBy("accsessCount", "desc"));
    const querySnapshot = await getDocs(q);
    for (let doc of querySnapshot.docs) {
      array.push({ ...doc.data(), id: doc.id });
    }
    return array;
  };
};

export const singleCourseDetail = () => {
  return async (dispatch) => {
    const db = firebase.firestore();
    let array = [];
    const courses = collection(db, "courses");
    const q = query(collection(db, "courses"), where("id", "==", "9VHyItHQnpRKEfe9dWI8"));
    const querySnapshot = await getDocs(q);
    for (let doc of querySnapshot.docs) {
      array.push({ ...doc.data(), id: doc.id });
    }
    return array;
  };
};

export const increaseCountofCourse = (id) => {
  return async (dispatch) => {
    const db = firebase.firestore();
    const courseRef = doc(db, "courses", id);
    await updateDoc(courseRef, {
      accsessCount: increment(1),
    });
  };
};
