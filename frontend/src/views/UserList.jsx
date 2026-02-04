function UserList() {
  const users = [
    { name: "Test User", email: "test@example.com" },
    { name: "User Test", email: "usertest@example.com" }
  ];

  return (
    <div className="card">
      <h2>User List</h2>

      {users.map((user, index) => (
        <div className="user-item" key={index}>
          <div>
            <strong>{user.name}</strong>
            <p>{user.email}</p>
          </div>

          <div>
            <button className="edit-btn">Edit</button>
            <button className="delete-btn">Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default UserList;