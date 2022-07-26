import UserListTable from "./components/user-list-table";

const ListUsersPage = () => {

    let columns = ['name','name','name','name','name']
    let data = [{name:'test',a:'b',c:'c',d:'d',e:'e'}]
    return (
        <><UserListTable columns={columns} data={data}/></>
    )
}
export default ListUsersPage