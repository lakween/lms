import { createSlice } from '@reduxjs/toolkit'

const userDetailsSlice = createSlice({
    name: 'userDetailsSlice',
    initialState: {
        ProfileStatus:'',
        userType:'',
        loginDetails:''
    },
    reducers: {
        setUserLoginDetails:(state,{payload}) => {
            state.loginDetails = payload
        },
        setUserType:(state,{payload}) => {
            state.userType = payload
        },
        setProfileStatus:(state,{payload}) => {
            state.ProfileStatus = payload
        },
        clearUserDetails:(state,{payload}) => {
            state.ProfileStatus = {
                ProfileStatus:'',
                userType:'',
                loginDetails:''
            }
        }
    },
})

export const { setUserLoginDetails,setUserType,setProfileStatus,clearUserDetails } = userDetailsSlice.actions
export default userDetailsSlice.reducer