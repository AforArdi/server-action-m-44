import users from '@/data/users.json'

export const getUsers = async () => {
    // const res = await fetch('https://jsonplaceholder.typicode.com/users');
    // const data = await res.json();
    // return data;
    return users;
}

export const addUser = async (newUser) => {
    newUser.id = users.length + 1;
    users.push(newUser);
    return {ok: true, message: 'user added successfully'};
}