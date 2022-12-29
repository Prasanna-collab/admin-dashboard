import React, { useContext } from "react";
import { StudentContext } from "../App";
import { useNavigate } from "react-router-dom";

function AllStudents() {
  let context = useContext(StudentContext);
  let navigate = useNavigate();

  let handleDelete = (e) => {
    context.stud.splice(context.stud.indexOf(e), 1);
    context.setStud([...context.stud]);
  };

  return (
    <div>
      <h1>All Students Details</h1>
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Degree</th>
            <th scope="col">Branch</th>
            <th scope="col">Email</th>
            <th scope="col">Mobile</th>
            <th scope="col">Options</th>
          </tr>
        </thead>
        <tbody>
          {context.stud.map((e, i) => {
            return (
              <tr key={i}>
                <th scope="row">{i + 1}</th>
                <td>{e.name}</td>
                <td>{e.degree}</td>
                <td>{e.branch}</td>
                <td>{e.email}</td>
                <td>{e.mobile}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      navigate("/edit-student/" + i);
                    }}
                  >
                    Edit
                  </button>
                  &nbsp;&nbsp;&nbsp;
                  <button className="btn btn-danger" onClick={handleDelete}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default AllStudents;
