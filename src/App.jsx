import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import UsersForm from './components/UsersForm'
import UsersList from './components/UsersList'

function App() {

  const [users, setUsers] = useState([])
  const [updatedUser, setUpdatedUser] = useState(null)
  const [form, setForm] = useState(false)

  const getAllUsers = () => {
    axios.get('https://users-crud.academlo.tech/users/')
      .then( res => setUsers( res.data ) )
  }

  const selectUser = (user) => {
    setUpdatedUser(user);
    showForm()
  }

  const showForm = () => {
    setForm(!form)
  }

  useEffect(()=>{
    getAllUsers();
  },[])

  return (
    <div className="App">
      {form &&
      <UsersForm 
        getAllUsers={getAllUsers} 
        updatedUser={updatedUser} 
        selectUser={selectUser}
        showForm={showForm}
      />
      }
      <UsersList 
        users={users} 
        selectUser={selectUser} 
        getAllUsers={getAllUsers}
        showForm={showForm}
        updatedUser={updatedUser}
      />
    </div>
  )
}

export default App
