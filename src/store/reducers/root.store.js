import {combineReducers} from "@reduxjs/toolkit";
import commonSlice from './common-slice'
import setUserDetails from "./user-details.slice";

const RootStore = combineReducers({
    commonSlice: commonSlice,
    setUserDetails:setUserDetails,
})

export default RootStore