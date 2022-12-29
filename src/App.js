import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SideBar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import AddStudent from "./components/AddStudent";
import AllStudents from "./components/AllStudents";
import Editpage from "./components/EditPage";

export const StudentContext = React.createContext({});

function App() {
  let data = { earning: "50,000", annual: "45,000", task: 20, pending: "200" };
  let [stud, setStud] = useState([
    {
      name: "Prasanna",
      degree: "B.E",
      branch: "Mining",
      email: "prasanna@email.com",
      mobile: "9446",
    },
    {
      name: "Praveen",
      degree: "B.E",
      branch: "Civil",
      email: "praveen@email.com",
      mobile: "94467489377",
    },
  ]);
  return (
    <>
      <div>
        <Router>
          <StudentContext.Provider value={{ stud, setStud }}>
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
          </StudentContext.Provider>
        </Router>
      </div>
    </>
  );
}

export default App;
