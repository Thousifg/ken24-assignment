import React, { useState } from "react";
import "./classroom.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Classroom = () => {
  const navigate = useNavigate();
  const [contacts, setContacts] = useState(null);
  const [user, setUser] = useState({
    dept: "",
    coursename: "",
    section: "",
    teacher: "",
    start: [],
    end: [],
  });
  let handlechange = (e) => {
    let { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const submit = (e) => {
    e.preventDefault();
    const newuser = {
      dept: user.dept,
      coursename: user.coursename,
      section: user.section,
      teacher: user.teacher,
      start: user.start,
      end: user.endr,
    };
    const newContacts = [...contacts, newuser];
    setContacts(newContacts);
  };

  const register = () => {
    const { dept, coursename, teacher, section, start, end } = user;
    if (dept && coursename && teacher && section && start && end) {
      axios.post("http://localhost:2120/classroom", user).then((res) => {
        alert(res.data.message);
        setContacts(res.data.user);
      });
    } else {
      alert("invalid input");
    }
  };
  return (
    <div className="register">
      <h1>Input Data</h1>
      <form onSubmit={submit}>
        <input
          type="text"
          name="dept"
          value={user.dept}
          placeholder="Enter Dept"
          id="dept"
          onChange={handlechange}
        ></input>
        <input
          type="text"
          name="coursename"
          value={user.coursename}
          onChange={handlechange}
          placeholder="Enter Course Name"
          id="course"
          label="Course"
        ></input>
        <input
          type="text"
          name="section"
          value={user.section}
          onChange={handlechange}
          placeholder="Enter Section"
          id="section"
        ></input>
        <input
          type="text"
          name="teacher"
          value={user.teacher}
          onChange={handlechange}
          placeholder="Enter teacher name"
          id="teacher"
        ></input>
        <input
          type="text"
          name="start"
          value={user.start}
          onChange={handlechange}
          placeholder="Enter Start time"
          id="start"
        ></input>
        <input
          type="text"
          name="end"
          value={user.end}
          onChange={handlechange}
          placeholder="Enter End time"
          id="end"
        ></input>

        {/* <label for='end'>End Time</label> */}
        <button type="submit">Show data</button>
      </form>
      <div className="butt" onClick={register}>
        Submit
      </div>

      <table>
        <thead>
          <tr>
            <th>Dept</th>
            <th>CourseName</th>
            <th>Section</th>
            <th>Teacher</th>
            <th>Start</th>
            <th>End</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <>
              <tr>
                <td>{contact.dept}</td>
                <td>{contact.coursename}</td>
                <td>{contact.section}</td>
                <td>{contact.teacher}</td>
                <td>{contact.start}</td>
                <td>{contact.end}</td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Classroom;
