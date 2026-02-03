import React, { useEffect, useState } from "react";
import AddUser from "./AddUser";
import EditUser from "./EditUser";

function UserList() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  const fetchUsers = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/users");
      const data = await res.json();

      // IMPORTANT FIX
      if (Array.isArray(data)) {
        setUsers(data);
      } else {
        setUsers([]);
      }
    } catch (err) {
      console.error(err);
      setUsers([]);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const deleteUser = async (id) => {
    await fetch(`http://localhost:5000/api/users/${id}`, {
      method: "DELETE"
    });
    fetchUsers();
  };

  return (
    <div>
      {editingUser ? (
        <EditUser
          user={editingUser}
          refresh={fetchUsers}
          cancel={() => setEditingUser(null)}
        />
      ) : (
        <AddUser refresh={fetchUsers} />
      )}

      <h3>User List</h3>

      {users.length === 0 ? (
        <p>No users found</p>
      ) : (
        <ul>
          {users.map((u) => (
            <li key={u.id}>
              {u.name} — {u.email}
              <button onClick={() => setEditingUser(u)}>Edit</button>
              <button onClick={() => deleteUser(u.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default UserList;