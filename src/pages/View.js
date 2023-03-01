import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import http from "../http";

const View = (props) => {
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
        created_at: res.data.created_at,
      });
    });
  };
  return (
    <div>
      <div className="row">
        <div className="col-sm-6 p-5">
          <div className="card p-4">
            <p>First Name</p>
            <h2>{inputs.first_name}</h2>
            <p>Middle Name</p>
            <h2>{inputs.middle_name}</h2>
            <p>Last Name</p>
            <h2>{inputs.last_name}</h2>
            <p>Birthday</p>
            <h2>{inputs.birthday}</h2>
            <p>Gender</p>
            <h2>{inputs.gender}</h2>

            <p>Date created</p>
            <h2>{inputs.created_at}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default View;
