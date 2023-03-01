import React, { useEffect, useState } from "react";
import http from "../http";
import { Link } from "react-router-dom";

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchAllUsers();
  }, []);

  const fetchAllUsers = () => {
    http.get("/users").then((res) => {
      setUsers(res.data);
    });
  };
  const deleteUser = (id) => {
    http.delete("/users/" + id).then((res) => {
      fetchAllUsers();
    });
  };

  return (
    <div className="mt-5">
      <h2>Users </h2>
      <table className="table">
        <thead>
          <tr>
            <th>id.</th>
            <th> Name</th>
            <th></th>

            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td>{++index}</td>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>

              <td>
                <Link
                  className="btn btn-info"
                  to={{ pathname: "/edit/" + user.id }}
                >
                  Edit
                </Link>
                &nbsp;
                <Link
                  className="btn btn-primary"
                  to={{ pathname: "/view/" + user.id }}
                >
                  View
                </Link>
                &nbsp;
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => {
                    deleteUser(user.id);
                  }}
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
