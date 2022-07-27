import {Table,Tbody, Td, Th, Thead, Tr} from "@chakra-ui/react";
import {useEffect, useState} from "react";
import {getAllDocFromCollection} from "../../../../common/common-action/common-action";

const UserListTable = ({columns = [], data = []}) => {

    return (
        <div className=" overflow-y-scroll relative shadow-md sm:rounded-lg" style={{maxHeight:'50vh'}}>
            <Table variant='striped' colorScheme='teal'>
                <Thead className="text-xs uppercase">
                <Tr>
                    {
                        columns?.map((item) => (
                            <Th scope="col" className="py-3 px-6">
                                {item}
                            </Th>
                        ))
                    }
                </Tr>
                </Thead>
                <Tbody>
                {
                    data?.map((item) => (
                        <Tr className="bg-white border-b dark: ${} bg-gray-900 dark:border-gray-700">
                            <Td scope="row"
                                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {item.uid}
                            </Td>
                            <Td className="py-4 px-6">
                                {item.first_name}
                            </Td>
                            <Td className="py-4 px-6">
                                {item.last_name}
                            </Td>
                            <Td className="py-4 px-6">
                                {item.Address}
                            </Td>
                            <Td className="py-4 px-6">
                                {item.birthday}
                            </Td>
                            <Td className="py-4 px-6">
                                {item.email}
                            </Td>
                            <Td className="py-4 px-6">
                                {item.School}
                            </Td>
                        </Tr>
                    ))
                }
                </Tbody>
            </Table>
        </div>
    )
}

export default UserListTable