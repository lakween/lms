import {combineReducers} from "@reduxjs/toolkit";
import commonSlice from './common-slice'
import setUserLoginDetails from "./user-details.slice";

const RootStore = combineReducers({
    commonSlice: commonSlice,
    setUserDetails:setUserLoginDetails,
})

export default RootStore