import { useState, useEffect } from "react";
import StudentList from "./StudentList";

const Home = () => {
  const [students, setStudents] = useState(null);
  useEffect(() => {
    fetch("http://localhost:8080/students")
      .then((response) => response.json())
      .then((data) => setStudents(data));
  },[]);
  return (
    <div className="center">
      {/* เช็คว่ามีข้อมูลมั้ย*/}
      {students && <StudentList students={students} />}
    </div>
  );
};

export default Home;
