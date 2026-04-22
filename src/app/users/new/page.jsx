import { NewAddUserAction } from "@/lib/actions";
import { Button, Input, Label, TextField } from "@heroui/react";

const AddNewUserPage = () => {
    return (
        <div className="w-1/2 mx-auto">
            <form action={NewAddUserAction} className="flex flex-col gap-4">
                <TextField className="w-full" name="name" type="text">
                    <Label>Name</Label>
                    <Input placeholder="Enter your name" />
                </TextField>
                <TextField className="w-full" name="email" type="email">
                    <Label>Email</Label>
                    <Input placeholder="Enter your email" />
                </TextField>
                <TextField className="w-full" name="username" type="text">
                    <Label>Username</Label>
                    <Input placeholder="Enter username" />
                </TextField>
                <Button variant="secondary">
                    Cancel
                </Button>
                <Button type="submit">Add</Button>
            </form>
        </div>
    );
}

export default AddNewUserPage;