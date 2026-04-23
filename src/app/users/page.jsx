import AddUser from "@/components/AddUser";
import UserCard from "@/components/UserCard";
import AddUserAction from "@/lib/actions";
import { getUsers } from "@/lib/users";
import { Button } from "@heroui/react";
import Link from "next/link";

const UsersPage = async () => {
    const users = await getUsers();
    // console.log(users.length, 'total users');
    return ( 
        <div className="container mx-auto">
            <h2 className="text-4xl font-bold my-4">Users</h2>
            <div className="flex items-center gap-3">
                <AddUser AddUserAction={AddUserAction}></AddUser>
                <Link href={'/users/new'}>
                    <Button>Add New User Page</Button>
                </Link>
                </div>
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