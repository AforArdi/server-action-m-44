'use server'
const AddUserAction = async (formData) => {
    const name = formData.get('name');
    console.log(name);
}
 
export default AddUserAction;