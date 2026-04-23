import users from '@/data/users.json'

export const getUsers = async () => {
    return users;
}

export const addUser = async (newUser) => {
    newUser.id = users.length + 1;
    users.push(newUser);
    return {ok: true, message: 'user added successfully'};
}