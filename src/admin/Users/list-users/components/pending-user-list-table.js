import {
    Button,
    useColorMode,
    useToast
} from "@chakra-ui/react";
import {doc, setDoc, updateDoc} from "firebase/firestore";
import firebase from "firebase/compat/app";
import {Table,Badge} from "reactstrap";

const PendingUserListTable = ({columns = [], data = [], setRefetch, refetch}) => {
    const {colorMode, toggleColorMode} = useColorMode();
    const toast = useToast()

    const onClickAcceptHandler = async (item) => {
        const db = firebase.firestore();
        const accountRef = await doc(db, 'accounts', item.id);
        await updateDoc(accountRef, {status: "approved"});
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
                                 {item.uid}
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
                            <td>
                                <Button onClick={() => onClickAcceptHandler(item)} marginRight={1}
                                        size={'xs'}> Accept</Button>
                                <Button size={'xs'} onClick={() => onClickRejectHandler(item)}> Reject</Button>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </Table>
        </div>

    )
}

export default PendingUserListTable