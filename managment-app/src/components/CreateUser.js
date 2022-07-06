import React from 'react'
import { useState, useEffect } from 'react'

const CreateUser = () => {

  const [name,setName] = useState("");
  const [surname,setSurname] = useState("");
  const [email,setEmail] = useState("");


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
      name : name,
      surname : surname,
      email : email
    }

    console.log(user)
    
  }



  return (
    <div>
        <h3>Create New User</h3>
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
            <input type="submit" value="Create User" className="btn btn-primary" />
          </div>
        </form>
      </div>
    
  )
}

export default CreateUser