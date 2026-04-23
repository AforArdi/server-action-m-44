'use client'

import { NewAddUserAction } from "@/lib/actions";
import { Button, FieldError, Form, Input, Label, TextField } from "@heroui/react";

const AddNewUserPage = () => {
    return (
        <div className="w-1/2 mx-auto">
            <h2 className="font-bold text-4xl my-4">Add a new user page</h2>
            <Form action={NewAddUserAction} className="flex flex-col gap-4">
                <TextField
                isRequired
                minLength={8}
                validate={(value) => {
                    if (value.length < 8) {
                    return "Name must be at least 8 characters";
                    }
                }}
                className="w-full" name="name" type="text">
                    <Label>Name</Label>
                    <Input placeholder="Enter your name" />
                    <FieldError></FieldError>
                </TextField>
                <TextField className="w-full" name="email" type="email">
                    <Label>Email</Label>
                    <Input placeholder="Enter your email" />
                </TextField>
                <TextField className="w-full" name="username" type="text">
                    <Label>Username</Label>
                    <Input placeholder="Enter username" />
                </TextField>
                <div className="flex items-center gap-3">
                    <Button variant="secondary">
                        Cancel
                    </Button>
                    <Button type="submit">Add</Button>
                </div>
            </Form>
        </div>
    );
}

export default AddNewUserPage;