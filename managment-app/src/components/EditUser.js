import React from 'react'
import { useState,useEffect } from 'react'
import { useParams } from "react-router-dom";
import axios from 'axios'

const EditUser = () => {

    const {id} = useParams()

    const [users,setUsers] = useState ([]);
    const [name,setName] = useState("");
    const [surname,setSurname] = useState("");
    const [email,setEmail] = useState("");

    useEffect (() => {
        axios.get('http://localhost:5000/users/' + id)
            .then(response => {
                setName(response.data.ime);
                setSurname(response.data.prezime);
                setEmail(response.data.email);
            })
            .catch((err) => {
                console.log(err);
            })
        },[]);


  const onChangeName= (e) => {
    setName(e.target.value);
  }

  const onChangeSurname= (e) => {
    setSurname(e.target.value);
  }

  const onChangeEmail= (e) => {
    setEmail(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    
    const user ={
      ime : name,
      prezime : surname,
      email : email
    }

    console.log(user)

    axios.post('http://localhost:5000/users/update/' + id,user)
      .then(res => console.log(res.data));

      setName("");
      setSurname("");
      setEmail("");

    window.location = "/";
  }

  return (
    <div>
        <h3>Edit User</h3>
        <form onSubmit={onSubmit}>
          <div className="form-group"> 
            <label>Name: </label>
            <input  type="text"
                required
                className="form-control"
                value={name}
                onChange={onChangeName}
                />
                <label>Surname: </label>
            <input  type="text"
                required
                className="form-control"
                value={surname}
                onChange={onChangeSurname}
                />
                <label>Email: </label>
            <input  type="text"
                required
                className="form-control"
                value={email}
                onChange={onChangeEmail}
                />
          </div>
          <div className="form-group">
            <input type="submit" value="Edit User" className="btn btn-primary" />
          </div>
        </form>
      </div>
    
  )
}

export default EditUser