
import React, { useState } from "react";

function EditUser({ user, refresh, cancel }) {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  const updateUser = async (e) => {
    e.preventDefault();

    await fetch(`http://localhost:5000/api/users/${user.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email })
    });

    refresh();
    cancel();
  };

  return (
    <form onSubmit={updateUser}>
      <h3>Edit User</h3>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button type="submit">Update</button>
      <button type="button" onClick={cancel}>Cancel</button>
    </form>
  );
}

export default EditUser;