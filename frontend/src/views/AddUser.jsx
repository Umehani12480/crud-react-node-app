
import React, { useState } from "react";

function AddUser({ refresh }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const submit = async (e) => {
    e.preventDefault();

    await fetch("http://localhost:5000/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email })
    });

    setName("");
    setEmail("");
    refresh();
  };

  return (
    <form onSubmit={submit}>
      <h3>Add User</h3>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddUser;