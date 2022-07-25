import * as yup from 'yup';

let signSchema = yup.object().shape({
    first_name: yup.string().required('First Name is Required'),
    last_name: yup.string().required('Last Name is Required'),
    email: yup.string().required('Email is required'),
    password: yup.string().required('password is required'),
    birthday: yup.date().required('birthday is required'),
    Address: yup.string().required('address is required'),
    School: yup.string().required('school is required'),
    mobile_number: yup.number().required('mobile number is required').max(13,'Max 13').min(13,'min 13'),
});

export default signSchema