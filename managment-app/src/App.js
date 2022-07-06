import React from "react";
import {BrowserRouter as Router, Route,Routes} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from "./components/NavBar"
import UserList from "./components/UserList"
import CreateUser from "./components/CreateUser"

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
          <Routes>
            <Route path="/" element={<UserList/>} />
            <Route path="/create-user" element={<CreateUser/>} />
          </Routes>
        </div>
    </Router>
  );
}

export default App;
