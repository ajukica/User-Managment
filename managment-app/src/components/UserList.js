import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect,useState } from 'react'
import axios from 'axios'

const UserList = () => {

  const [users,setUsers] = useState ([]);

  useEffect (() => {
    axios.get('http://localhost:5000/users/')
      .then(response => {
        setUsers(response.data);
        
    })
    .catch ((err) => {
      console.log(console.log(err));
    }
  )},[]);

  const deleteUser = (id) =>{
    axios.delete('http://localhost:5000/users/' + id)
      .then(response => console.log(response.data));
    users.filter (e => e._id !== id)
  }

  const userList = () => {
    return users.map(user => {
      return (<tr>
      <td>{user.ime}</td>
      <td>{user.prezime}</td>
      <td>{user.email}</td>
      <td>
        <Link to={"/edit/"+ user._id}>Edit</Link> | <a href="/" onClick={() => {deleteUser(user._id) }}>Delete</a>
      </td>
  </tr>)
    })
  }

  return (
    <div>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Ime</th>
              <th>Prezime</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {userList()}
          </tbody>
        </table>
      </div>
  )
}

export default UserList