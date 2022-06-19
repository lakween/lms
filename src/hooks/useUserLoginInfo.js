import {useDispatch, useSelector} from "react-redux";
import {getUsrType} from "../common/loging/actions/loging.action";
import {useEffect} from "react";
import {setUserLoginDetails, setUserType} from "../store/reducers/user-details.slice";
import firebase from "firebase/compat/app";
import {useNavigate} from "react-router-dom";

const useUserLoginInfo= async ()=>{
    let dispatch = useDispatch()
    let navigate = useNavigate()
    let state = useSelector(state => state)

    useEffect(()=>{
        if (!state.loginDetails) setUsr()
    },[])

    async function setUsr(){
        firebase.auth().onAuthStateChanged(async function(user) {
            if (user) {
                let userType = dispatch(getUsrType(user.uid))
                dispatch(setUserLoginDetails(user))
                dispatch(setUserType(userType))
            } else {
                navigate('login')
            }
        });
    }

    return [state?.userType,state?.loginDetails,setUsr]

}

export default useUserLoginInfo