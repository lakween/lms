import {Table,Tbody, Td, Th, Thead, Tr} from "@chakra-ui/react";
import {useEffect, useState} from "react";
import {getAllDocFromCollection} from "../../../../common/common-action/common-action";

const UserListTable = ({columns = [], data = []}) => {

    return (
        <div className=" overflow-x-auto relative shadow-md sm:rounded-lg">
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
                                Apple MacBook Pro 17"
                            </Td>
                            <Td className="py-4 px-6">
                                Sliver
                            </Td>
                            <Td className="py-4 px-6">
                                Laptop
                            </Td>
                            <Td className="py-4 px-6">
                                $2999
                            </Td>
                            <Td className="py-4 px-6">
                                <a href="#"
                                   className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
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