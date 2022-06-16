import { createSlice } from '@reduxjs/toolkit'

const userDetailsSlice = createSlice({
    name: 'userDetailsSlice',
    initialState: {
        userType:'',
        loginDetails:''
    },
    reducers: {
        setUserLoginDetails:(state,{payload}) => {
            state.loginDetails = payload
        },
        setUserType:(state,{payload}) => {
            state.userType = payload
        }
    },
})

export const { setUserLoginDetails,setUserType } = userDetailsSlice.actions
export default userDetailsSlice.reducer