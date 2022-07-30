import {useEffect, useState} from "react";
import {filterDocsFromCollection, getAllDocFromCollection} from "../../../common/common-action/common-action";
import {Box, Text} from "@chakra-ui/react";
import PendingUserListTable from "./components/pending-user-list-table";
import AllUserListTable from "./components/all-user-list-table";
import useFormController from "../../../hooks/useFormController";

const ListUsersPage = () => {
    const [pendingUsers, setPendingUsers] = useState()
    const [allUsers, setAllUsers] = useState()
    const [refetch, setRefetch] = useState(false)

    useEffect(() => {
        getPendingUsers()
        getAllUsers()
    }, [refetch])

    let columns = ["UID", "First Name", "Last Name", 'Address', "Birth Day", "Email", "School", "Type" ," Action"]

    const getPendingUsers = async () => {
        let result = await filterDocsFromCollection('accounts',
            [], [["status", "==", "pending"]])
        setPendingUsers(result)
    }

    const getAllUsers = async () => {
        let result = await getAllDocFromCollection('accounts')
        setAllUsers(result)
    }

    return (
        <>
            <Box width={'100%'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyItems={'center'}>
                <Text className={'text-xl'}>Pending User Requests</Text>
                <PendingUserListTable columns={columns} data={pendingUsers} setRefetch={setRefetch} refetch={refetch}/>
            </Box>
            <Box width={'100%'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyItems={'center'}>
                <Text className={'text-xl'}>All Users</Text>
                <AllUserListTable columns={columns} data={allUsers} setRefetch={setRefetch} refetch={refetch}/>
            </Box>

        </>
    )
}
export default ListUsersPage