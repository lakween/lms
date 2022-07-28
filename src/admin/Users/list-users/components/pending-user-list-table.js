import {Button, Table, Tbody, Td, Th, Thead, Tr, useColorMode, useColorModeValue, useToast} from "@chakra-ui/react";
import {doc, setDoc, updateDoc} from "firebase/firestore";
import firebase from "firebase/compat/app";

const PendingUserListTable = ({columns = [], data = [], setRefetch, refetch}) => {
    const {colorMode, toggleColorMode} = useColorMode();
    const toast = useToast()

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

    return (
        <div className={'min-w-full'}>
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

export default PendingUserListTable