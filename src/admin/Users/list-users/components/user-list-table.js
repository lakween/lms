import {Table, Tbody, Td, Th, Thead, Tr, useColorMode, useColorModeValue} from "@chakra-ui/react";
import {useEffect, useState} from "react";
import {getAllDocFromCollection} from "../../../../common/common-action/common-action";

const UserListTable = ({columns = [], data = []}) => {
    const { colorMode, toggleColorMode } = useColorMode();
    // let bgColuor = useColorModeValue('bg-white','bg-black')

    return (
                <div
                   >
                    <table className="min-w-full">
                        <thead>
                        <tr>
                            {
                                columns?.map((item) => (
                                    <th scope="col" className={`px-6  py-3 ${colorMode ==="dark" ? 'bg-black':'bg-white'} text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200`}>
                                        {item}
                                    </th>
                                ))
                            }
                        </tr>
                        </thead>

                        <tbody className="bg-white">
                        {
                            data?.map((item) => (
                                <tr className="p-0 bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 border-2 border-sky-500">
                                    <td className="px-1 py-1 whitespace-no-wrap border-b border-gray-200 text-sm ">
                                        <p className={"bg-white bg-white"} > {item.uid} </p>
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
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>
                </div>

    )
}

export default UserListTable