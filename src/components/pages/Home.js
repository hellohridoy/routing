import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export default function Home() {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setUser(result.data);
  };
  return (
    <div className="container">
      <div className="py-4">
        <h1>Home Page</h1>

        <table class="table border shadow" style={{ overflow: "auto" }}>
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">User Name</th>
              <th scope="col">Email</th>
              <th style={{ textAlign: "center" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td
                  style={{
                    display: "flex",
                    gap: "10px",
                    marginLeft: "10%",
                  }}
                >
                  <Link class="btn btn-primary">View</Link>
                  <Link class="btn btn-outline-primary">Edit</Link>
                  <Link class="btn btn-danger">Delete</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
