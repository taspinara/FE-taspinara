
import Grade from "./Grade";
import "../styles/student.css";

function Student({ student }) {
  return (
    <div className="student-card">
      <img src={student.picture} alt={`${student.firstName} ${student.lastName}`} />
      <h2>{student.firstName} {student.lastName}</h2>
      <p><strong>Age:</strong> {student.age}</p>
      <p><strong>Course:</strong> {student.course}</p>
      <p><strong>City:</strong> {student.city}</p>
      <p><strong>GPA:</strong> <Grade gpa={student.gpa} /></p>

      {/* Conditional Rendering for Graduation Status */}
      <p className={`status ${student.graduate ? "graduated" : "enrolled"}`}>
        {student.graduate ? "🎓 Graduated" : "📚 Actively Enrolled"}
      </p>
    </div>
  );
}

export default Student;
