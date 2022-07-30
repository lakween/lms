import {Button, Select, useColorMode, useToast} from "@chakra-ui/react";
import firebase from "firebase/compat/app";
import {doc, updateDoc} from "firebase/firestore";
import {useEffect, useState} from "react";

const AllUserListTable = ({columns = [], data = [], setRefetch, refetch}) => {
    const {colorMode, toggleColorMode} = useColorMode();
    const [filterData, setFilterData] = useState([])
    const toast = useToast()

    useEffect(() => {
        setFilterData([...data])
    }, [data])

    const onClickAcceptHandler = async (item) => {
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
    const onClickRejectHandler = async (item) => {
        const db = firebase.firestore();
        const accountRef = await doc(db, 'accounts', item.id);
        await updateDoc(accountRef, {status: "rejected"});
        setRefetch(refetch ? false : true)
        toast({
            title: 'Account Rejected.',
            status: 'success',
            duration: 9000,
            isClosable: true,
        })
    }

    const filter = (e) => {
        setFilterData(data?.filter((item) => (item.userType == e.target.value)))
    }

    return (

        <div className={'min-w-full'}>
            <div style={{width: '20vw'}}>
                filter
                <Select placeholder='Select option' name={'type'} onChange={filter} size={'sm'} className={'mt-1 mb-1'}>
                    <option value='student'>Student</option>
                    <option value='teacher'>Teacher</option>
                </Select>
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
                    filterData?.map((item, index) => (
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
                                <Button onClick={() => onClickAcceptHandler(item)} marginRight={1}
                                        size={'xs'}> Accept</Button>
                                <Button size={'xs'} onClick={() => onClickRejectHandler(item)}> Reject</Button>
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