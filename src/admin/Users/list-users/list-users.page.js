import UserListTable from "./components/user-list-table";
import {useEffect, useState} from "react";
import {filterDocsFromCollection, getAllDocFromCollection} from "../../../common/common-action/common-action";
import Card from "../../../common/card/card.component";
import {Box, Text} from "@chakra-ui/react";

const ListUsersPage = () => {
    const [users, setUsers] = useState()

    useEffect(() => {
        // const html = document.querySelector("html");
        // html.classList.add("dark")
        getUsers()
    }, [])

    let columns = ["UID", "First Name", "Last Name", 'Email', "Birth Day", "Email", "School", "Action"]

    const getUsers = async () => {
        let result = await filterDocsFromCollection('accounts',[],[[]])
        console.log(result, 'asasas')
        setUsers(result)
    }


    return (
        <>
            <Box width={'100%'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyItems={'center'}>
                <Text className={'text-xl'}>Pending User Requests</Text>
                <UserListTable columns={columns} data={users}/>
            </Box>

        </>
    )
}
export default ListUsersPage