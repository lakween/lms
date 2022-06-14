import { createSlice } from '@reduxjs/toolkit'

const commonSlice = createSlice({
    name: 'userDetailsSlice',
    initialState: {},
    reducers: {
        setUserDetails:(state,{payload}) => state = payload
    },
})

export const { setCommonState } = commonSlice.actions
export default commonSlice.reducer