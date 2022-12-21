import React, { useState, useContext, useEffect } from "react";
import { StudentContext } from "../App";
import { useNavigate, useParams } from "react-router-dom";

function EditPage() {
  let params = useParams();

  useEffect(() => {
    
    if (params.id) {
      getData();
    }
  }, []); //Square Brackets = useEffect Callback. After rendering the getData Function, it allows to reframe the content as we want.
  let context = useContext(StudentContext);
  let navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [degree, setDegree] = useState("");
  const [branch, setBranch] = useState("");
  const [mobile, setMobile] = useState("");

  const handleSave = () => {
    context.stud[params.id] = {
      name,
      degree,
      branch,
      email,
      mobile,
    };
    navigate("/all-students");
    context.setStud([...context.stud]);

  };

  // to update the data of selected object by using context.stud[params.id] to the state variable.

  let getData = () => {
    let student = context.stud[params.id];
    console.log(context.stud[params.id]);
    setName(student.name);
    setDegree(student.degree);
    setBranch(student.branch);
    setEmail(student.email);
    setMobile(student.mobile);
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
