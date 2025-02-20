import Student from "./Student.jsx";
import students from "../data/studentsData.js";
import "../styles/student.css";

const StudentList = () => {
    return (
        <div className="students-container">
            {students.map((student) => (
                <Student key={student.id} student={student}/>
            ))}
        </div>
    )
}

export default StudentList
