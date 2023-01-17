import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import UsersForm from './components/UsersForm'
import UsersList from './components/UsersList'

function App() {

  const [users, setUsers] = useState([])
  const [updatedUser, setUpdatedUser] = useState(null)

  const getAllUsers = () => {
    axios.get('https://users-crud.academlo.tech/users/')
      .then( res => setUsers( res.data ) )
  }

  const selectUser = (user) => {
    setUpdatedUser(user)
  }

  useEffect(()=>{
    getAllUsers();
  },[])

  return (
    <div className="App">
      <UsersForm 
        getAllUsers={getAllUsers} 
        updatedUser={updatedUser} 
        selectUser={selectUser}/>
      <UsersList 
        users={users} 
        selectUser={selectUser} 
        getAllUsers={getAllUsers}/>
    </div>
  )
}

export default App
