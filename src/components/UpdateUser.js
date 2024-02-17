import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const UpdateUser = () => {
  const { id } = useParams(); // To get the Id of the user in the url and updateuser page
  const users = useSelector((state) => state.users); //To get all the users
  const existingUser = users.filter((user) => user.id == id);
  const { name, email, domain } = existingUser[0];
  const [newName, setNewName] = useState(name);
  const [newEmail, setNewEmail] = useState(email);
  const [newDomain, setNewDomain] = useState(domain);

  return (
    <div className="d-flex w-100 vh-100  justify-content-center align-items-center">
      <div className="w-50 border bg-light p-3">
        <h4 className="text-center my-3 text-info">Edit User Information</h4>
        <form>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control my-2"
              name="name"
              placeholder="Enter your name"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              className="form-control my-2"
              name="email"
              placeholder="Enter your email address"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="domain">Domain</label>
            <input
              type="text"
              className="form-control my-2"
              name="domain"
              placeholder="Enter your Domain"
              value={newDomain}
              onChange={(e) => setNewDomain(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-warning m-2">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateUser;
