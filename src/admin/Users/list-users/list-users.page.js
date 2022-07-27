import {useEffect, useState} from "react";
import {filterDocsFromCollection, getAllDocFromCollection} from "../../../common/common-action/common-action";
import {Box, Text} from "@chakra-ui/react";
import PendingUserListTable from "./components/pending-user-list-table";

const ListUsersPage = () => {
    const [users, setUsers] = useState()
    const [refetch, setRefetch] = useState(false)

    useEffect(() => {
        getUsers()
    }, [refetch])

    let columns = ["UID", "First Name", "Last Name", 'Address', "Birth Day", "Email", "School", "Type" ," Action"]

    const getUsers = async () => {
        let result = await filterDocsFromCollection('accounts',
            [], [["status", "==", "pending"]])
        setUsers(result)
    }

    return (
        <>
            <Box width={'100%'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyItems={'center'}>
                <Text className={'text-xl'}>Pending User Requests</Text>
                <PendingUserListTable columns={columns} data={users} setRefetch={setRefetch} refetch={refetch}/>
            </Box>

        </>
    )
}
export default ListUsersPage