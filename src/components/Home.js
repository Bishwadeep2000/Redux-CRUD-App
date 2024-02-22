import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser } from "../redux/UserReducer";

const Home = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteUser({ id: id }));
  };

  return (
    <div className="container mt-4">
      <h2>CRUD App with React - Redux</h2>
      <Link to="/addUser" className="btn btn-success my-3">
        Add User +
      </Link>
      <table className="table table-bordered table-light table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Domain</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, id) => (
            <tr key={id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.domain}</td>
              <td>
                <Link to={`/editUser/${user.id}`} className="btn btn-info m-2">
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(user.id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
