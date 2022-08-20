import { Button, Select, useColorMode, useToast} from "@chakra-ui/react";
import firebase from "firebase/compat/app";
import {doc, updateDoc} from "firebase/firestore";
import {useEffect, useState} from "react";
import {filterDocsFromCollection, getAllDocFromCollection} from "../../../../common/common-action/common-action";
import useFormController from "../../../../hooks/useFormController";
import {Table,Badge} from "reactstrap";
import {deleteProfile} from "../../actions/users-actions";

const AllUserListTable = ({setRefetch, refetch}) => {
    const {colorMode, toggleColorMode} = useColorMode();
    let [valueChangeHandler, setValue, form, setForm] = useFormController({type: '', status: ''})
    const [data, setData] = useState([])
    const toast = useToast()

    let columns = ["UID", "First Name", "Last Name", 'Address', "Birth Day", "Email", "School", "Type", "status", " Action"]

    let badgeColor = {
        accept:'primary',
        pending:'danger',
        reject:'dark'
    }

    useEffect(() => {
        getAllUsers()
    }, [])

    useEffect(() => {
        filter()
    }, [form.type, form.status])

    const getAllUsers = async () => {
        let result = await getAllDocFromCollection('accounts')
        setData(result)
    }

    const onClickDeleteHandler = async (item) => {
       let result = await  deleteProfile(item.id)
        toast({
            title: 'Account created.',
            status: 'success',
            duration: 9000,
            isClosable: true,
        })
    }

    const filter = async (e) => {
        let result = await filterDocsFromCollection('accounts',
            [], [["status", "==", form.status], ["userType", "==", form.type]])
        setData(result)

    }

    return (

        <div className={'min-w-full'}>
            <div className={'d-flex flex-row gap-3'}>
                <div style={{width: '20vw'}}>
                    Filter By User Role
                    <Select name={'type'} placeholder={''} onChange={valueChangeHandler} size={'sm'}
                            className={'mt-1 mb-1'}>
                        <option value=''>All Users</option>
                        <option value='student'>Student</option>
                        <option value='teacher'>Teacher</option>
                    </Select>
                </div>
                <div style={{width: '20vw'}}>
                    Filter By User Status
                    <Select name={'status'} onChange={valueChangeHandler} size={'sm'} className={'mt-1 mb-1'}>
                        <option value=''>All status</option>
                        <option value='pending'>Pending</option>
                        <option value='deactivated'>deactivated</option>
                        <option value='approved'>approved</option>
                        <option value='rejected'>Rejected</option>
                    </Select>
                </div>
            </div>
            {/*<div className={'d-flex flex-row gap-3'}>*/}
            <Table hover>
                <thead>
                <tr>
                    {
                        columns?.map((item) => (
                            <th>
                                {item}
                            </th>
                        ))
                    }
                </tr>
                </thead>
                <tbody>
                {
                    data?.map((item, index) => (
                        <tr key={index}>
                            <th scope="row">
                                <p className={''}> {item.uid} </p>
                            </th>
                            <td>
                                {item.first_name}
                            </td>
                            <td>
                                {item.last_name}
                            </td>
                            <td>
                                {item.Address}
                            </td>
                            <td>
                                {item.birthday}
                            </td>
                            <td>
                                {item.email}
                            </td>
                            <td>
                                {item.School}
                            </td>
                            <td>
                                {item.userType}
                            </td>
                            <td className={'text-sm'}>
                                <Badge
                                    color={`${badgeColor[item.status]}`}
                                >{item.status}</Badge>

                            </td>
                            <td>
                                <Button onClick={() => onClickDeleteHandler(item)} marginRight={1}
                                        size={'xs'}> Deactivate </Button>
                                <Button onClick={() => onClickDeleteHandler(item)} marginRight={1}
                                        size={'xs'}> Delete </Button>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </Table>
        </div>
    )
}

export default AllUserListTable