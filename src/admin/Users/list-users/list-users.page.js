import UserListTable from "./components/user-list-table";
import {useEffect, useState} from "@types/react";
import {getAllDocFromCollection} from "../../../common/common-action/common-action";

const ListUsersPage = () => {
    const [users,setUsers] = useState()

    useEffect(()=>{
        getUsers()
    },[])

    let columns = ["uid","first_name","last_name",'email',"isNewUser","mobile_number"]

    const getUsers = async () => {
        let result = await getAllDocFromCollection('accounts')
        console.log(result,'result')
    }


    return (
        <><UserListTable columns={columns} data={data}/></>
    )
}
export default ListUsersPage