import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import http from "../http";

const Create = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const submitForm = () => {
    console.log(inputs);
    http
      .post("/users", inputs)
      .then((res) => {
        navigate("/");
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data); // => the response payload
        }
      });
  };
  return (
    <div className="mt-5">
      <h2>New User</h2>
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
            <label> Middle Name</label>
            <input
              type="text"
              name="middle_name"
              className="form-control mb-2"
              value={inputs.middle_name}
              onChange={handleChange}
            />
            <label> Last Name</label>
            <input
              type="text"
              name="last_name"
              className="form-control mb-2"
              value={inputs.last_name}
              onChange={handleChange}
            />
            <label>Birthday</label>
            <input
              type="date"
              name="birthday"
              className="form-control mb-2"
              value={inputs.birthday}
              onChange={handleChange}
            />
            <label>Gender</label>
            <div className="mx-4 ">
              <input
                type="radio"
                name="gender"
                className="m-2 "
                value="male"
                checked
                onChange={handleChange}
              />{" "}
              <label>Male</label>
              <input
                type="radio"
                name="gender"
                className="m-2"
                value="female"
                onChange={handleChange}
              />{" "}
              <label>Female</label>
            </div>

            <button
              type="button"
              onClick={submitForm}
              className="btn btn-info mt-2"
            >
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
