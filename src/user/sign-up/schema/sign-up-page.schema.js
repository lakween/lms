import * as yup from 'yup';

let signSchema = yup.object().shape({
    first_name: yup.string().required('First Name is Required'),
    last_name: yup.string().required('Last Name is Required'),
    email: yup.string().required('Email is required').email('Enter Valid Email Address'),
    password: yup.string().required('password is required'),
    birthday: yup.date().required('birthday is required'),
    Address: yup.string().required('address is required'),
    School: yup.string().required('school is required'),
    // mobile_number: yup.number().required('mobile number is required').max(13,'Must be 15 characters or less'),
    mobile_number: yup.string()
        .required('mobile number is required')
        .matches(/^[0-9]+$/, "Must be only digits")
        .min(10, 'Must be exactly 10 digits')
        .max(13, 'Must be exactly 13 digits')
});

export default signSchema