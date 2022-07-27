import UserListTable from "./components/user-list-table";
import {useEffect, useState} from "react";
import {getAllDocFromCollection} from "../../../common/common-action/common-action";

const ListUsersPage = () => {
    const [users, setUsers] = useState()

    useEffect(() => {
        // const html = document.querySelector("html");
        // html.classList.add("dark")
        getUsers()
    }, [])

    let columns = ["UID", "First Name", "Last Name", 'Email', "Birth Day", "Email","School"]

    const getUsers = async () => {
        let result = await getAllDocFromCollection('accounts')
        console.log(result,'asasas')
        setUsers(result)
    }


    return (
        <><UserListTable columns={columns} data={users}/></>
    )
}
export default ListUsersPage