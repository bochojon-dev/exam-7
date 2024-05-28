"use client";
import React, { useState } from "react";
import "../register/Register.css";

const Register = () => {
  const initialState = {
    username: "",
    password: "",
  };

  const [data, setData] = useState(initialState);

  const handleChange = (el) => {
    setData((p) => ({
      ...p,
      [el.target.name]: el.target.value,
    }));
  };
  console.log(data);

  return (
    <div className="container">
      <div className="register">
        {Object.keys(initialState)?.map((e, i) => (
          <div className="user" key={i}>
            <label htmlFor={e}>{e}</label>
            <input
              required
              onChange={handleChange}
              type="text"
              id={e}
              placeholder={`Your ${e}...`}
              name={e}
              value={data[e]}
            />
          </div>
        ))}
        <button type="submit" className="user_submit">
          LOGIN
        </button>
      </div>
    </div>
  );
};

export default Register;
