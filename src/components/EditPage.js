import React, { useState, useEffect } from "react";

import { useNavigate, useParams } from "react-router-dom";

function EditPage() {
  let params = useParams();

  useEffect(() => {
    
    if (params.id) {
      getData();
    }
  }, []); //Square Brackets = useEffect Callback. After rendering the getData Function, it allows to reframe the content as we want.
  
  
  let navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [degree, setDegree] = useState("");
  const [branch, setBranch] = useState("");
  const [mobile, setMobile] = useState("");

  const handleSave = async () => {
    await fetch(
      "https://63aa73707d7edb3ae628645c.mockapi.io/students/"+ params.id,
      {
        method: "PUT",
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

  // to update the data of selected object by using context.stud[params.id] to the state variable. Without this
  //the value is not carried to the edit page. But still can be editable.

  let getData = async() => {
    await fetch ("https://63aa73707d7edb3ae628645c.mockapi.io/students/"+ params.id,
    {method: "GET"})
    .then(msg=> msg.json())
    .then(msg=> {
      setName(msg.name)
    setEmail(msg.email)
  setDegree(msg.degree)
setBranch(msg.branch)
setMobile(msg.mobile)
})
  };

  return (
    <div>
      <h1>Edit Student details here.</h1>
      <div className="form-group">
        <label for="exampleName">Name</label>
        <input
          type="text"
          id="exampleName"
          value={name}
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
          value={email}
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
          value={degree}
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
          value={branch}
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
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          placeholder="Mobile"
        />
      </div>

      <button type="submit" onClick={handleSave} class="btn btn-primary">
        Submit
      </button>
    </div>
  );
}

export default EditPage;
