import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import http from "../http";

const Edit = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = () => {
    http.get("/users/" + id + "/edit").then((res) => {
      setInputs({
        first_name: res.data.first_name,
        middle_name: res.data.middle_name,
        last_name: res.data.last_name,
        birthday: res.data.birthday,
        gender: res.data.gender,
      });
    });
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const submitForm = () => {
    http.put("/users/" + id, inputs).then((res) => {
      navigate("/");
    });
  };
  return (
    <div>
      <h2>Edit User</h2>
      <div className="row">
        <div className="col-sm-6">
          <div className="card p-4">
            <label> First Name</label>
            <input
              type="text"
              name="first_name"
              className="form-control mb-2"
              value={inputs.first_name}
              onChange={handleChange}
            />
            <label>Middle Name</label>
            <input
              type="text"
              name="Middle_name"
              className="form-control mb-2"
              value={inputs.middle_name}
              onChange={handleChange}
            />

            <label>last Name</label>
            <input
              type="text"
              name="last_name"
              className="form-control mb-2"
              value={inputs.last_name}
              onChange={handleChange}
            />
            <label>Birthday</label>
            <input
              type="text"
              name="birthday"
              className="form-control mb-2"
              value={inputs.birthday}
              onChange={handleChange}
            />

            <label>gender</label>
            <input
              type="text"
              name="gender"
              className="form-control mb-2"
              value={inputs.gender}
              onChange={handleChange}
            />

            <button
              type="button"
              onClick={submitForm}
              className="btn btn-info mt-2"
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
