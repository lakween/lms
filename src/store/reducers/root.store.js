import {combineReducers} from "@reduxjs/toolkit";
import commonSlice from './common-slice'

const RootStore = combineReducers({
    commonSlice: commonSlice,
})

export default RootStore