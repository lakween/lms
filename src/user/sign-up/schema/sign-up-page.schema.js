import * as yup from 'yup';

let signSchema = yup.object().shape({
    first_name: yup.string().required('this will be displayed when empty'),
    last_name: yup.string().required(),
    email: yup.string().required(),
    password: yup.string().required(),
    birthday: yup.date().required(),
    Address: yup.string().required(),
    School: yup.string().required(),
    mobile_number: yup.number().required('this will be displayed when empty'),
});

export default signSchema