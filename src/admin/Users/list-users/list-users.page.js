import {useEffect, useState} from "react";
import {filterDocsFromCollection, getAllDocFromCollection} from "../../../common/common-action/common-action";
import {Box, Text} from "@chakra-ui/react";
import PendingUserListTable from "./components/pending-user-list-table";
import AllUserListTable from "./components/all-user-list-table";
import useFormController from "../../../hooks/useFormController";
import {Button, Card, CardBody, CardSubtitle, CardTitle} from "reactstrap";

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
            <Card className="">
                <CardBody>
                    <CardTitle className="mb-2" tag="h2">Pending Users</CardTitle>
                    <CardSubtitle className="mt-3 text-muted text-weight-bold" tag="h6">
                    </CardSubtitle>
                    <PendingUserListTable columns={columns} data={pendingUsers} setRefetch={setRefetch} refetch={refetch}/>
                </CardBody>
            </Card>

            <Card className="mt-2">
                <CardBody>
                    <CardTitle className="mb-2" tag="h2">All Users</CardTitle>
                    <CardSubtitle className="mt-3 text-muted text-weight-bold" tag="h6">
                    </CardSubtitle>
                    <AllUserListTable columns={columns} data={allUsers} setRefetch={setRefetch} refetch={refetch}/>
                </CardBody>
            </Card>
        </>
    )
}
export default ListUsersPage