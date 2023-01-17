import axios from 'axios';
import React from 'react';

const UsersList = ({users, selectUser, getAllUsers}) => {

    const deleteUser = (user) => {
        axios.delete(`https://users-crud.academlo.tech/users/${user.id}/`)
            .then(() => getAllUsers())
    }

    return (
        <div>
            <h3>Lista de Usuarios</h3>
            <div>
                {
                    users.map( user => (
                        <ul key={user.id}>
                            <li> <b>{user.first_name} {user.last_name}</b> </li>
                            <li> <b>Correo:</b> {user.email}</li>
                            <li> <b>Cumpleaños:</b> {user.birthday}</li>
                            <div>
                                <button onClick={() => deleteUser(user)}>delete</button>
                                <button onClick={() => selectUser(user)}>update</button>
                            </div>

                        </ul>
                    ))
                }
            </div>
        </div>
    );
};

export default UsersList;