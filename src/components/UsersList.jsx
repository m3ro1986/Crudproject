import axios from 'axios';
import React from 'react';

const UsersList = ({users, selectUser, getAllUsers, showForm, updatedUser}) => {

    const deleteUser = (user) => {
        axios.delete(`https://users-crud.academlo.tech/users/${user.id}/`)
            .then(() => getAllUsers())
    }


    return (
        <div>
            <div className='header-container'>
                <h2>Lista de Usuarios</h2>
                <button onClick={showForm}> + crear usuario </button>
            </div>
            <div className='users-container'>
                {
                users.map( user => (
                    <div className='user-container' key={user.id}>
                        <ul>
                            <li> <i className='bx bxs-user-circle'></i> {user.first_name} {user.last_name} </li>
                            <li> <i className='bx bxs-envelope'></i> {user.email}</li>
                            <li> <i className='bx bxs-cake' ></i> {user.birthday}</li>
                        </ul>
                        <div className='button-container'>
                            <button onClick={() => deleteUser(user)}> <i className='bx bx-trash'></i> </button>
                            <button onClick={() => selectUser(user)}> <i className='bx bx-edit-alt'></i> </button>
                        </div>
                    </div>
                ))
                }
            </div>
        </div>
    );
};

export default UsersList;