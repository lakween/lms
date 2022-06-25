import { getAuth, signOut, updateProfile } from "firebase/auth";

export const updateStudentProfile = (user,model)=>{
    return async (dispatch)=>{
        let {displayName} = model
        console.log(displayName,'displayName')
       let res = await updateProfile(user, model)
        console.log(res,'res')
    }
}