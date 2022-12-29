import "./App.css";
import React, { useState, useEffect} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SideBar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import AddStudent from "./components/AddStudent";
import AllStudents from "./components/AllStudents";
import Editpage from "./components/EditPage";



function App() {

  useEffect(()=> {
    getData()
  }, [])

  const getData = async ()=>{
   await fetch ("https://63aa73707d7edb3ae628645c.mockapi.io/students")
   .then (msg=> msg.json())
    .then (msg => setStud(msg))
    .catch (err=> console.log(err))
  }

  let data = { earning: "50,000", annual: "45,000", task: 20, pending: "200" };
  let [stud, setStud] = useState([]);
  return (
    <>
      <div>
        <Router>
      
            <div style={{ display: "grid", gridTemplateColumns: "15% 85%" }}>
              <div>
                <SideBar />
              </div>
              <div>
                <Routes>
                  <Route
                    path="/dashboard"
                    element={<Dashboard value={data} />}
                  />
                  <Route path="/add-student" element={<AddStudent />} />
                  <Route path="/all-students" element={<AllStudents />} />
                  <Route path="/edit-student/:id" element={<Editpage />} />
                  <Route path="/" element={<Dashboard value={data} />} />
                </Routes>
              </div>
            </div>
        
        </Router>
      </div>
    </>
  );
}

export default App;
