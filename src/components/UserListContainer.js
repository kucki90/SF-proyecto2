import {useState, useEffect} from 'react';
import UserList from './UserList';

const UserListContainer = () => {

    const [users, setUsers] = useState([])

    const getUsers = async () => {
        let URL_USERS = 'https://jsonplaceholder.typicode.com/users';
        const response = await fetch(URL_USERS);
        const data = await response.json();
        setUsers(data) // seteamos los users con el resultado de la API
    }
    useEffect(() => {
        getUsers(); 
    }, []); // lo ejecutamos con useEffect
    console.log(users);
    return(
        <div className='usersListContainer'>
            <UserList users={users} />
        </div>
    ) 
}

export default UserListContainer;