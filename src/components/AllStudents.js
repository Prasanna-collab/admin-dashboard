import React, { useEffect, useState} from "react";

import { useNavigate } from "react-router-dom";

function AllStudents() {

  useEffect(()=> {
    getData()
  }, [])

  const getData = async ()=>{
   await fetch ("https://63aa73707d7edb3ae628645c.mockapi.io/students")
   .then (msg=> msg.json())
    .then (msg => setStud(msg))
    .catch (err=> console.log(err))
  }

  let navigate = useNavigate();
  let [stud, setStud] = useState([]);

  let handleDelete = async(id) => {
    await fetch(
      "https://63aa73707d7edb3ae628645c.mockapi.io/students/"+id,{
        method: "DELETE"})
        .then(data=> data.json())
        .then (data=> {getData();})
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
          {stud.map((e, i) => {
            return (
              <tr key={i}>
                <th scope="row">{e.id}</th>
                <td>{e.name}</td>
                <td>{e.degree}</td>
                <td>{e.branch}</td>
                <td>{e.email}</td>
                <td>{e.mobile}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      navigate("/edit-student/" + e.id);
                    }}
                  >
                    Edit
                  </button>
                  &nbsp;&nbsp;&nbsp;
                  <button className="btn btn-danger" onClick={()=>handleDelete(e.id)}>
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
