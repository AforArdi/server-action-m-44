import AddUser from "@/components/AddUser";
import UserCard from "@/components/UserCard";
import AddUserAction from "@/lib/actions";
import getUsers from "@/lib/users";

const UsersPage = async () => {
    const users = await getUsers();
    // console.log(users.length, 'total users');
    return ( 
        <div className="container mx-auto">
            <h2 className="font-4xl">Users</h2>
            <AddUser AddUserAction={AddUserAction}></AddUser>
            <div className="grid grid-cols-3 gap-4 mt-8">
                {
                    users.map(user=> <UserCard
                    key={user.id}
                    user={user}
                    ></UserCard>)
                }
            </div>
        </div>
     );
}
 
export default UsersPage;