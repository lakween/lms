import { getAuth, deleteUser, } from "firebase/auth";

export const deleteProfile = async (user) => {
    getAuth().deleteUser(user)
        .then(() => {
            console.log('Successfully deleted user');
        })
        .catch((error) => {
            console.log('Error deleting user:', error);
        });
    //
    // deleteUser(user).then(() => {
    //     console.log('suss')
    // }).catch((error) => {
    //     console.log(error)
    // });

    // try {
    //   let result =  await deleteUser(user)
    //     console.log(result,'result')
    // }catch (e) {
    //     console.log(e)
    // }
}

