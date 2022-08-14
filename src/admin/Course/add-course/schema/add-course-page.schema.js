import * as yup from "yup";

let signSchema = yup.object().shape({
  course_name: yup.string().required("Course name is required"),
  course_desc: yup.string().required("Course desc is Required"),
  course_details: yup.string().required("Course details is Required"),
  course_feature: yup.string().required("Course feature is required"),
  course_fee: yup.string().required("Course fee is required"),
});

export default signSchema;
