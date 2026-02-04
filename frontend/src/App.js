import React from "react";
import './App.css';
import AddUser from './views/AddUser';
import UserList from './views/UserList';

function App() {
  return (
    <div className="app-container">
      <h1>CRUD Application using MERN Stack (M - MySql) </h1>

      <AddUser />
      <UserList />
    </div>
  );
}

export default App;