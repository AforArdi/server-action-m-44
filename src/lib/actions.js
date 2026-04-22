'use server'

import { revalidatePath } from "next/cache";
import { addUser } from "./users";
import { redirect } from "next/navigation";

const AddUserAction = async (formData) => {
    const newUserToAdd = Object.fromEntries(formData.entries());
    const res = await addUser(newUserToAdd);

    if(res.ok){
        revalidatePath('/users');
    }

    return res;
}

export const NewAddUserAction = async (formData)=>{
    const newUserToAdd = Object.fromEntries(formData.entries());
    const res = await addUser(newUserToAdd);
    if(res.ok){
        revalidatePath('/users');
        redirect('/users');
    }
    return res;
}
 
export default AddUserAction;