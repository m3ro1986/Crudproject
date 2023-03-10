import axios from 'axios';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const UsersForm = ({getAllUsers, updatedUser, selectUser, showForm}) => {

    const{ handleSubmit, register, reset} = useForm()

    useEffect(() => {
        if ( updatedUser !== null ) {
            reset(updatedUser)
        } else {
            reset({
                first_name:"",
                last_name: "",
                email: "",
                password: "",
                birthday: ""
            })
        }
    }, [updatedUser])

    const submit = (data) => {
        if (updatedUser) {
            axios.put(`https://users-crud.academlo.tech/users/${updatedUser.id}/`, data)
                .then( () => {
                    getAllUsers()
                    selectUser(null)
                    showForm()
                })
        } else {
            axios.post('https://users-crud.academlo.tech/users/', data)
                .then( () => {
                    getAllUsers()
                    showForm()
                })
        }
    }

    const closeForm = () => {
        selectUser(null);
        showForm();
    }

    return (
        <div className='form-container'>
            <i onClick={closeForm} class='bx bx-x' ></i>
            <form onSubmit={handleSubmit(submit)}>
                

                <div className="input-container">
                    <label htmlFor="first_name">Nombre</label>
                    <input type="text" id='first_name' {...register('first_name')} required/>
                </div>

                <div className="input-container">
                    <label htmlFor="last_name">Apellido</label>
                    <input type="text" id='last_name' {...register('last_name')} required/>
                </div>  

                <div className="input-container">
                    <label htmlFor="email">Correo</label>
                    <input type="text" id='email' {...register('email')} required/>
                </div> 

                <div className="input-container">
                    <label htmlFor="password">Contrase??a</label>
                    <input type="password" id='password' {...register('password')} required/>
                </div> 

                <div className="input-container">
                    <label htmlFor="birthday">Fecha de Cumplea??os</label>
                    <input type="Date" id='birthday' {...register('birthday')} required/>
                </div>  

                <button> { updatedUser ? 'Actualizar' : 'Submit' }</button>  

            </form>
        </div> 
    );
};

export default UsersForm;