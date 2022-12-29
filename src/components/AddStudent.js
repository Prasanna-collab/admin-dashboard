import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

function AddStudent() {
  let navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [degree, setDegree] = useState("");
  const [branch, setBranch] = useState("");
  const [mobile, setMobile] = useState("");

  const handleSave = async () => {
    await fetch(
        "https://63aa73707d7edb3ae628645c.mockapi.io/students",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name,
            email,
            degree,
            branch,
            mobile,
          })
        })
    
      navigate("/all-students");
    };
    
  

  return (
    <div>
      <h1>Add a Student Here</h1>
      <div className="form-group">
        <label for="exampleName">Name</label>
        <input
          type="text"
          id="exampleName"
          onChange={(e) => setName(e.target.value)}
          className="form-control"
          placeholder="Name"
        />
      </div>
      <div className="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          onChange={(e) => setEmail(e.target.value)}
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
        <small id="emailHelp" class="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>
      <div className="form-group">
        <label for="exampleDegree">Degree</label>
        <input
          type="text"
          id="exampleDegree"
          onChange={(e) => setDegree(e.target.value)}
          className="form-control"
          placeholder="Degree"
        />
      </div>
      <div className="form-group">
        <label for="exampleBranch">Branch</label>
        <input
          type="text"
          className="form-control"
          id="exampleBranch"
          onChange={(e) => setBranch(e.target.value)}
          placeholder="Branch"
        />
      </div>
      <div className="form-group">
        <label for="exampleMobile">Mobile</label>
        <input
          type="text"
          className="form-control"
          id="exampleMobile"
          onChange={(e) => setMobile(e.target.value)}
          placeholder="Mobile"
        />
      </div>

      <button type="submit" onClick={handleSave} className="btn btn-primary">
        Submit
      </button>
    </div>
  );
}

export default AddStudent;
