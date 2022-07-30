import {Button, Select, useColorMode, useToast} from "@chakra-ui/react";
import firebase from "firebase/compat/app";
import {doc, updateDoc} from "firebase/firestore";
import {useEffect, useState} from "react";
import {filterDocsFromCollection, getAllDocFromCollection} from "../../../../common/common-action/common-action";
import useFormController from "../../../../hooks/useFormController";

const AllUserListTable = ({columns = [], setRefetch, refetch}) => {
    const {colorMode, toggleColorMode} = useColorMode();
    let [valueChangeHandler, setValue, form, setForm] = useFormController()
    const [data, setData] = useState([])
    const toast = useToast()

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
        const db = firebase.firestore();
        const accountRef = await doc(db, 'accounts', item.id);
        await updateDoc(accountRef, {status: "accept"});
        setRefetch(refetch ? false : true)
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
                        <option value='accepted'>Accepted</option>
                        <option value='rejected'>Rejected</option>
                    </Select>
                </div>
            </div>
            <table className="min-w-full">
                <thead>
                <tr>
                    {
                        columns?.map((item) => (
                            <th scope="col"
                                className={`px-6  py-3 ${colorMode === "dark" ? 'bg-black' : 'bg-white'} text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200`}>
                                {item}
                            </th>
                        ))
                    }
                </tr>
                </thead>

                <tbody className="bg-white">
                {
                    data?.map((item, index) => (
                        <tr key={index}
                            className={`p-0 ${colorMode === "dark" ? 'bg-gray-800' : 'bg-white'} border-b transition duration-300 ease-in-out dark:bg-gray-100 border-2 border-sky-500`}>
                            <td className="px-1 py-1 whitespace-no-wrap border-b border-gray-200 text-sm ">
                                <p className={''}> {item.uid} </p>
                            </td>
                            <td className="px-1 py-1 whitespace-no-wrap border-b border-gray-200 text-sm">
                                {item.first_name}
                            </td>
                            <td className="px-1 py-1 whitespace-no-wrap border-b border-gray-200 text-sm">
                                {item.last_name}
                            </td>
                            <td className="px-1 py-1 whitespace-no-wrap border-b border-gray-200 text-sm">
                                {item.Address}
                            </td>
                            <td className="px-1 py-1 whitespace-no-wrap border-b border-gray-200 text-sm">
                                {item.birthday}
                            </td>
                            <td className="px-1 py-1 whitespace-no-wrap border-b border-gray-200 text-sm">
                                {item.email}
                            </td>
                            <td className="px-1 py-1 whitespace-no-wrap border-b border-gray-200 text-sm">
                                {item.School}
                            </td>
                            <td className="px-1 py-1 whitespace-no-wrap border-b border-gray-200 text-sm">
                                {item.userType}
                            </td>
                            <td className="px-1 py-1 whitespace-no-wrap border-b border-gray-200 text-sm">
                                <Button onClick={() => onClickDeleteHandler(item)} marginRight={1}
                                        size={'xs'}> Deactivate </Button>
                                <Button onClick={() => onClickDeleteHandler(item)} marginRight={1}
                                        size={'xs'}> Delete </Button>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    )
}

export default AllUserListTable