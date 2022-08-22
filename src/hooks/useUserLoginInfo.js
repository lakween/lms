import {useDispatch, useSelector} from "react-redux";
import {getUsrType} from "../common/loging/actions/loging.action";
import {useEffect} from "react";
import {setProfileStatus, setUserLoginDetails, setUserType} from "../store/reducers/user-details.slice";
import firebase from "firebase/compat/app";
import {useNavigate} from "react-router-dom";

const useUserLoginInfo = ()=>{
    let dispatch = useDispatch()
    let navigate = useNavigate()
    let state = useSelector(state => state.setUserDetails)
    useEffect(()=>{
        if (!state.loginDetails) setUsr()
    },[])

    async function setUsr(){
        firebase.auth().onAuthStateChanged(async function(user) {
            if (user) {
                let userdetails = await getUsrType(user.uid)
                dispatch(setUserLoginDetails(user))
                dispatch(setUserType(userdetails?.userType))
                dispatch(setProfileStatus(userdetails?.status))
            } else {
                // navigate('/')
            }
        });
    }
    return [state?.userType,state?.ProfileStatus,state?.loginDetails,setUsr]

}

export default useUserLoginInfo