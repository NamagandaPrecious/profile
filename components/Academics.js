import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Academics() {
  const [visibleSemester, setVisibleSemester] = useState("year1sem1");
  const [courses, setCourses] = useState({
    year1sem1: [
      { code: "ICT1102", name: "Essentials of Hardware and software concepts", cu: 4, gp: 5.0 },
      { code: "ICT1103", name: "Fundamentals of Computing", cu: 4, gp: 3.5 },
      { code: "CSC1101", name: "Structured Programming", cu: 4, gp: 4.5 },
      { code: "MTH1102", name: "Discrete Mathematics", cu: 3, gp: 4.5 },
      { code: "LNG1101", name: "Writing and Study Skills", cu: 3, gp: 5.0 },
      { code: "TBS1103", name: "Understanding the Old Testament", cu: 3, gp: 4.0 },
    ],
    year1sem2: [
      { code: "CSC1203", name: "Data Structures and algorithms", cu: 4, gp: 4.0 },
      { code: "CSC2212", name: "Computer Organisation and Architecture", cu: 3, gp: 4.5 },
      { code: "MTH1203", name: "Probability and Statistics", cu: 3, gp: 5.0 },
      { code: "ICT1205", name: "Database Design and Applications", cu: 4, gp: 4.5 },
      { code: "ICT1206", name: "Local Area Computer Networking", cu: 3, gp: 5.0 },
      { code: "PBH2108", name: "Health and Wholeness", cu: 3, gp: 5.0 },
    ],
    year2sem1: [
      { code: "CSC2105", name: "Object Oriented Programming", cu: 4, gp: 5.0 },
      { code: "CSC2106", name: "Operating Systems", cu: 3, gp: 4.5 },
      { code: "CSC2107", name: "Design and Analysis of Algorithms", cu: 3, gp: 5.0 },
      { code: "MTH2104", name: "Calculus", cu: 3, gp: 4.5 },
      { code: "DSC2103", name: "Data Science", cu: 4, gp: 4.0 },
      { code: "TST2206", name: "Understanding Ethics from a Christian Perspective", cu: 3, gp: 5.0 },
    ],
  });

  const [newCourse, setNewCourse] = useState({ code: "", name: "", cu: "", gp: "" });

  const addCourse = () => {
    if (!newCourse.code || !newCourse.name || !newCourse.cu || !newCourse.gp) return;
    setCourses({
      ...courses,
      [visibleSemester]: [...courses[visibleSemester], newCourse],
    });
    setNewCourse({ code: "", name: "", cu: "", gp: "" });
  };

  return (
    <section id="academics" className="section">
      <h2>Academic Performance</h2>
      <div className="semester-buttons">
        <button onClick={() => setVisibleSemester("year1sem1")}>Year 1 - Sem 1</button>
        <button onClick={() => setVisibleSemester("year1sem2")}>Year 1 - Sem 2</button>
        <button onClick={() => setVisibleSemester("year2sem1")}>Year 2 - Sem 1</button>
      </div>

      <div className="table-container">
        <h3>{visibleSemester.replace("year", "Year ").replace("sem", " - Semester ")}</h3>
        <table>
          <thead>
            <tr>
              <th>Course Code</th>
              <th>Course</th>
              <th>CU</th>
              <th>GP</th>
            </tr>
          </thead>
          <tbody>
            {courses[visibleSemester].map((course, index) => (
              <tr key={index}>
                <td>{course.code}</td>
                <td>{course.name}</td>
                <td>{course.cu}</td>
                <td>{course.gp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="add-course-form">
        <h4>Add a Course</h4>
        <input
          type="text"
          placeholder="Course Code"
          value={newCourse.code}
          onChange={(e) => setNewCourse({ ...newCourse, code: e.target.value })}
        />
        <input
          type="text"
          placeholder="Course Name"
          value={newCourse.name}
          onChange={(e) => setNewCourse({ ...newCourse, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="CU"
          value={newCourse.cu}
          onChange={(e) => setNewCourse({ ...newCourse, cu: e.target.value })}
        />
        <input
          type="number"
          step="0.1"
          placeholder="GP"
          value={newCourse.gp}
          onChange={(e) => setNewCourse({ ...newCourse, gp: e.target.value })}
        />
        <button onClick={addCourse}>Add Course</button>
      </div>
    </section>
  );
}

export default Academics;
