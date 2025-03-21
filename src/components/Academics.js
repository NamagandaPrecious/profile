import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Academics() {
  const [visibleSemester, setVisibleSemester] = useState("year1sem1");

  return (
    <section id="academics" className="section">
      <h2>Academic Performance</h2>
      
      {/* Buttons to Switch Semesters */}
      <div className="semester-buttons">
        <button onClick={() => setVisibleSemester("year1sem1")}>Year 1 - Sem 1</button>
        <button onClick={() => setVisibleSemester("year1sem2")}>Year 1 - Sem 2</button>
        <button onClick={() => setVisibleSemester("year2sem1")}>Year 2 - Sem 1</button>
      </div>

      {/* Year 1 - Semester 1 */}
      {visibleSemester === "year1sem1" && (
        <div className="table-container">
          <h3>Year 1 - Semester 1</h3>
          <table>
            <thead>
              <tr>
                <th>Course code</th>
                <th>Course</th>
                <th>CU</th>
                <th>GP</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>ICT1102</td><td>Essentials of Hardware and software concepts</td><td>4</td><td>5.0</td></tr>
              <tr><td>ICT1103</td><td>Fundamentals of Computing</td><td>4</td><td>3.5</td></tr>
              <tr><td>CSC1101</td><td>Structured Programming</td><td>4</td><td>4.5</td></tr>
              <tr><td>MTH1102</td><td>Discrete Mathematics</td><td>3</td><td>4.5</td></tr>
              <tr><td>LNG1101</td><td>Writing and Study Skills</td><td>3</td><td>5.0</td></tr>
              <tr><td>TBS1103</td><td>Understanding the Old Testament</td><td>3</td><td>4.0</td></tr>
            </tbody>
          </table>
        </div>
      )}

      {/* Year 1 - Semester 2 */}
      {visibleSemester === "year1sem2" && (
        <div className="table-container">
          <h3>Year 1 - Semester 2</h3>
          <table>
            <thead>
              <tr>
                <th>Course code</th>
                <th>Course</th>
                <th>CU</th>
                <th>GP</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>CSC1203</td><td>Data Structures and algorithms</td><td>4</td><td>4.0</td></tr>
              <tr><td>CSC2212</td><td>Computer Organisation and Architecture</td><td>3</td><td>4.5</td></tr>
              <tr><td>MTH1203</td><td>Probability and Statistics</td><td>3</td><td>5.0</td></tr>
              <tr><td>ICT1205</td><td>Database Design and Applications</td><td>4</td><td>4.5</td></tr>
              <tr><td>ICT1206</td><td>Local Area Computer Networking</td><td>3</td><td>5.0</td></tr>
              <tr><td>PBH2108</td><td>Health and Wholeness</td><td>3</td><td>5.0</td></tr>
            </tbody>
          </table>
        </div>
      )}

      {/* Year 2 - Semester 1 */}
      {visibleSemester === "year2sem1" && (
        <div className="table-container">
          <h3>Year 2 - Semester 1</h3>
          <table>
            <thead>
              <tr>
               <th>Course code</th>
                <th>Course</th>
                <th>CU</th>
                <th>GP</th>
              </tr>
            </thead>
            <tbody>
              
              <tr><td>CSC2105</td><td>Object Oriented Programming</td><td>4</td><td>5.0</td></tr>
              <tr><td>CSC2106</td><td>Operating systems</td><td>3</td><td>4.5</td></tr>
              <tr><td>CSC2107</td><td>Design and Analysis of Algorithms</td><td>3</td><td>5.0</td></tr>
              <tr><td>MTH2104</td><td>Calculus</td><td>3</td><td>4.5</td></tr>
              <tr><td>DSC2103</td><td>Data Science</td><td>4</td><td>4.0</td></tr>
              <tr><td>TST2206</td><td>Understanding Ethics from a Christian Perspective</td><td>3</td><td>5.0</td></tr>
            </tbody>
          </table>
        </div>
      )}

    </section>
  );
}

export default Academics;