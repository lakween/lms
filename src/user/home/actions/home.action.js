import {
  query,
  orderBy,
  collection,
  doc,
  updateDoc,
  increment,
  getDocs,
} from "firebase/firestore";
import firebase from "firebase/compat/app";
import { getAllDocFromCollection, getDocFromCollection} from "../../../common/common-action/common-action";

export const getAllCourses = async (courseBystudent) => {
    const db = firebase.firestore();
    let array = []
    for (let item of courseBystudent) {
      let collection = item.courseType == "class" ? "classes" : "courses";
        let a = await getDocFromCollection(collection, item?.CourseID)
        array.push({...a, courseID: item?.CourseID})
    }
    return array

}

export const getAllInquiry = () => {
    return async (dispatch) => {
      const db = firebase.firestore();
      let array = [];
      const courses = collection(db, "contactEmails");
      const q = query(courses, orderBy("email", "desc"));
      const querySnapshot = await getDocs(q);
      for (let doc of querySnapshot.docs) {
        array.push({ ...doc.data(), id: doc.id });
      }
      return array;
    };
  };

export const increaseCountofCourse = async (id,type) => {
    console.log(id,type,'asasasa')
  const db = firebase.firestore();
  const courseRef = doc(db, type, id);

  await updateDoc(courseRef, {
    accsessCount: increment(1),
  });
};
