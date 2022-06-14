import {combineReducers} from "@reduxjs/toolkit";
import commonSlice from './common-slice'
import userDetailsSlice from "./user-details.slice";

const RootStore = combineReducers({
    commonSlice: commonSlice,
    userDetailsSlice:userDetailsSlice,
})

export default RootStore