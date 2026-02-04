function AddUser() {
  return (
    <div className="card">
      <h2>Add User</h2>

      <input type="text" placeholder="Name" />
      <input type="email" placeholder="Email" />

      <button className="add-btn">Add</button>
    </div>
  );
}

export default AddUser;