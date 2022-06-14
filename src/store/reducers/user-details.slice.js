import { createSlice } from '@reduxjs/toolkit'

const userDetailsSlice = createSlice({
    name: 'userDetailsSlice',
    initialState: {},
    reducers: {
        setUserDetails:(state,{payload}) => state = payload
    },
})

export const { setUserDetails } = userDetailsSlice.actions
export default userDetailsSlice.reducer